const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

let users = [];
let posts = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createServerModuleRunner(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ email: user.email });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// Middleware to verify auth token
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

// GetPosts
apiRouter.get('/posts', verifyAuth, (_req, res) => {
    res.send(posts);
});

// PostPost
apiRouter.post('/post', verifyAuth, (req, res) => {
    posts = updatePosts(req.body);
    res.send(posts);
});

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, msg: err.message });
})

// Return default page if path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// updatePosts adds a new post to the list of posts and returns the updated list
function updatePosts(post) {
    posts.push(post);
    return posts;
}

function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4()
    };
    users.push(user);
    return user;
}

function findUser(key, value) {
    if (!value) { return null; }
    return users.find(user => user[key] === value);
}

function setAuthCookie(res, token) {
    res.cookie(authCookieName, token, {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
    });
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});