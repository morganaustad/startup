const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const uuid = require('uuid');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const postCollection = db.collection('post');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function updateUserRemoveAuth(user) {
  await userCollection.updateOne({ email: user.email }, { $unset: { token: 1 } });
}

async function addPost(post) {
  post.created = new Date();
  return postCollection.insertOne(post);
}

function getPosts() {
  const options = {
    sort: { created: -1 },
  };
  const cursor = postCollection.find({}, options);
  return cursor.toArray();
}

function deletePostsByAuthor(authorEmail) {
  return postCollection.deleteMany({ author: authorEmail });
}

async function createNewUserToken(email) {
  const newToken = uuid.v4();
  await userCollection.updateOne({ email: email }, { $set: { token: newToken } });
  return newToken;
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  updateUserRemoveAuth,
  addPost,
  getPosts,
  deletePostsByAuthor,
  createNewUserToken
};