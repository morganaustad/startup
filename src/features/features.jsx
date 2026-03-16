import React from 'react';
import { BrowserRouter, NavLink, Routes, Route, useNavigate } from 'react-router-dom';

export function Features({user, game}) {
     // Temporary placeholder text for feature suggestions. Will be replaced with actual user suggestions in the future.
    const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut justo nisl. Sed aliquet tellus mi, sit amet aliquet diam suscipit tincidunt. Proin mollis feugiat libero ut dapibus. Aliquam erat volutpat. Maecenas a arcu vitae ipsum tristique condimentum quis id purus. Praesent lobortis odio in sem feugiat tempus sit amet id tortor. Praesent at dignissim justo, quis aliquet nulla. Etiam lobortis augue vitae sem gravida, vestibulum euismod eros suscipit. Vestibulum pretium odio quis erat convallis, in ullamcorper sapien mattis. Nunc efficitur ipsum nulla.";
    

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [posts, setPosts] = React.useState([]);


    React.useEffect(() => {
        async function loadPosts() {
            const response = await fetch('/api/posts', {
                credentials: 'include'
            });
            const data = await response.json();
            setPosts(data);
        }
        loadPosts();
    }, []);


    function handleFormSubmit(e) {
        e.preventDefault();

        const eventTitle = title.trim();
        const eventDescription = description.trim();
        const eventAuthor = localStorage.getItem('user') || 'Anonymous';

        if (eventTitle === '' || eventDescription === '') {
            alert('Please fill in both title and description fields.');
            return;
        }

        handleSubmit(eventTitle, eventDescription, eventAuthor);
    }

    async function handleSubmit(submissionTitle, submissionDescription, submissionAuthor) {
        if (submissionTitle === '' || submissionDescription === '') {
            alert('Please fill in both title and description fields.');
            return;
        }

        const newPost = {
            title: submissionTitle,
            description: submissionDescription,
            author: submissionAuthor
        };

        await fetch('/api/post', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });

        const response = await fetch('/api/posts', {
            credentials: 'include'
        });
        const savedPost = await response.json();

        setPosts(savedPost);

        setTitle('');
        setDescription('');
    }


    async function handleErasePosts(e) {
        e.preventDefault();

        const confirmed = window.confirm('Are you sure you want to erase all your feature suggestions? This action cannot be undone.');

        if (confirmed) {
            await fetch('/api/posts', {
                method: 'DELETE',
                credentials: 'include'
            });
            setPosts([]);
        }
    }

    // Temporary autoload of posts
    async function loadPosts() {
        try {
            const response = await fetch('/api/posts', {
                credentials: 'include'
            });
            if (!response.ok) {
                console.error('Failed to fetch posts:', response.status);
                setPosts([]);
                return;
            }
            const data = await response.json();
            setPosts(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error('Error fetching posts:', err);
            setPosts([]);
        }
    }

    React.useEffect(() => {
        loadPosts();
        const interval = setInterval(loadPosts, 5000);
        return () => clearInterval(interval);
    }, [] );

    // React.useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleSubmit('Please just post', LOREM, 'Spammer');
    //     }, 10000);

    //     return () => clearInterval(interval);
    // } , [] );

    return (
        <main>
            <h2 className="text-center">Feature Suggestions for {game ? game : "This Game"}</h2>

            <br />

            <form className="border px-3 py-3 " onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    <input type="text" placeholder="Title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <textarea placeholder="Description" className="form-control" wrap="soft" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div> 
                <div className="d-flex justify-content-between align-items-end">
                    <button className="btn btn-info text-light" type='submit'>Submit Feature Suggestion</button>
                    <p className='text-secondary'>{game ? game : ""} - {user}</p>
                </div>
            </form>

            <div className="d-flex justify-content-center align-items-center mt-4">
                <button className="btn btn-danger text-light mt-3" onClick={handleErasePosts}>Erase All Your Feature Suggestions</button>
            </div>

            <br />

            {posts.map((post, index) => (
                <div key={index} className="alert alert-primary px-3 py-2 mb-4">
                    <h3>{post.title ?? 'No Title'}</h3>
                    <p className="text-secondary">{post.author}</p>
                    <p>{post.description}</p>
                </div>
            ))
            }
            
        </main>
    );
}