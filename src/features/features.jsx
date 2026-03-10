import React from 'react';
import { BrowserRouter, NavLink, Routes, Route, useNavigate } from 'react-router-dom';

export function Features({user, game}) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [posts, setPosts] = React.useState(() => {
        const savedPosts = localStorage.getItem('posts');
        return savedPosts ? JSON.parse(savedPosts) : [];
    });

    // Temporary placeholder text for feature suggestions. Will be replaced with actual user suggestions in the future.
    const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut justo nisl. Sed aliquet tellus mi, sit amet aliquet diam suscipit tincidunt. Proin mollis feugiat libero ut dapibus. Aliquam erat volutpat. Maecenas a arcu vitae ipsum tristique condimentum quis id purus. Praesent lobortis odio in sem feugiat tempus sit amet id tortor. Praesent at dignissim justo, quis aliquet nulla. Etiam lobortis augue vitae sem gravida, vestibulum euismod eros suscipit. Vestibulum pretium odio quis erat convallis, in ullamcorper sapien mattis. Nunc efficitur ipsum nulla.";
    
    const counter = React.useRef(0);


    React.useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);


    function handleFormSubmit(e) {
        e.preventDefault();

        const eventTitle = e.title.trim();
        const eventDescription = e.description.trim();
        const eventAuthor = localStorage.getItem('user') || 'Anonymous';

        if (eventTitle === '' || eventDescription === '') {
            alert('Please fill in both title and description fields.');
            return;
        }

        handleSubmit(eventTitle, eventDescription, eventAuthor);
    }

    function handleSubmit(submissionTitle, submissionDescription, author) {
        if (submissionTitle === '' || submissionDescription === '') {
            alert('Please fill in both title and description fields.');
            return;
        }

        setPosts(prevPosts => [
            ...prevPosts,
            {
            title: submissionTitle,
            description: submissionDescription,
            author: localStorage.getItem('user') || 'Anonymous'
            }
        ]);

        setTitle('');
        setDescription('');
    }


    function handleErasePosts(e) {
        e.preventDefault();

        const confirmed = window.confirm('Are you sure you want to erase all your feature suggestions? This action cannot be undone.');

        if (confirmed) {
            setPosts([]);
            localStorage.removeItem('posts');
        }
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            let formData = new FormData();
            formData.append('title', 'Example Feature Suggestion');
            formData.append('description', LOREM);
            // setTitle('Example Feature Suggestion');
            // setDescription(LOREM);
            handleSubmit(formData);
            counter.current += 1;
        }, 3000);

        return () => clearInterval(interval);
    } , [counter] );

    return (
        <main>
            <h2 className="text-center">Feature Suggestions for {game ? game : "This Game"}</h2>

            <br />

            <div className="alert alert-primary px-3 py-2 mb-4">
                <h3>Feature Suggestion Title</h3>
                <p className="text-secondary">Author</p>
                <p>{LOREM}</p>
            </div>

            <div className="alert alert-primary px-3 py-2 mb-4">
                <h3>Feature Suggestion Title 2</h3>
                <p className="text-secondary">Author</p>
                <p>{LOREM}</p>

                <p>{LOREM}</p>
            </div>

            {posts.map((post, index) => (
                <div key={index} className="alert alert-primary px-3 py-2 mb-4">
                    <h3>{post.title}</h3>
                    <p className="text-secondary">{post.author}</p>
                    <p>{post.description}</p>
                </div>
            ))
            }

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
        </main>
    );
}