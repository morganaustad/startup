import React from 'react';
import { BrowserRouter, NavLink, Routes, Route, useNavigate } from 'react-router-dom';

export function Features({user, game}) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [posts, setPosts] = React.useState(() => {
        const savedPosts = localStorage.getItem('posts');
        return savedPosts ? JSON.parse(savedPosts) : [];
    });

    React.useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);


    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === '' || description.trim() === '') {
            alert('Please fill in both title and description fields.');
            return;
        }

        setPosts(prevPosts => [
            ...prevPosts,
            {
            title,
            description,
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

    return (
        <main>
            <h2 className="text-center">Feature Suggestions for {game ? game : "This Game"}</h2>

            <br />

            <div className="alert alert-primary px-3 py-2 mb-4">
                <h3>Feature Suggestion Title</h3>
                <p className="text-secondary">Author</p>
                <p>Feature suggestion description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut justo nisl. Sed aliquet tellus mi, sit amet aliquet diam suscipit tincidunt. Proin mollis feugiat libero ut dapibus. Aliquam erat volutpat. Maecenas a arcu vitae ipsum tristique condimentum quis id purus. Praesent lobortis odio in sem feugiat tempus sit amet id tortor. Praesent at dignissim justo, quis aliquet nulla. Etiam lobortis augue vitae sem gravida, vestibulum euismod eros suscipit. Vestibulum pretium odio quis erat convallis, in ullamcorper sapien mattis. Nunc efficitur ipsum nulla.</p>

                <p>Integer est risus, iaculis id feugiat non, efficitur sit amet ipsum. Vestibulum sodales magna ipsum, nec sollicitudin elit mattis vel. Pellentesque hendrerit nec sem nec porta. Fusce pellentesque dui ex, ut faucibus orci sagittis congue. Nulla facilisi. Curabitur nisi nulla, pharetra non elit sit amet, molestie aliquam sem. Donec fermentum elementum enim. Suspendisse a molestie lorem, eu fermentum sapien. Pellentesque tincidunt est sapien, eget tristique felis condimentum et. Maecenas sit amet luctus ipsum. Vestibulum et tortor quis odio ultrices ornare vel vel libero. Phasellus iaculis lacus turpis, ut feugiat metus porta at.</p>
            </div>

            <div className="alert alert-primary px-3 py-2 mb-4">
                <h3>Feature Suggestion Title 2</h3>
                <p className="text-secondary">Author</p>
                <p>Feature suggestion description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut justo nisl. Sed aliquet tellus mi, sit amet aliquet diam suscipit tincidunt. Proin mollis feugiat libero ut dapibus. Aliquam erat volutpat. Maecenas a arcu vitae ipsum tristique condimentum quis id purus. Praesent lobortis odio in sem feugiat tempus sit amet id tortor. Praesent at dignissim justo, quis aliquet nulla. Etiam lobortis augue vitae sem gravida, vestibulum euismod eros suscipit. Vestibulum pretium odio quis erat convallis, in ullamcorper sapien mattis. Nunc efficitur ipsum nulla.</p>

                <p>Integer est risus, iaculis id feugiat non, efficitur sit amet ipsum. Vestibulum sodales magna ipsum, nec sollicitudin elit mattis vel. Pellentesque hendrerit nec sem nec porta. Fusce pellentesque dui ex, ut faucibus orci sagittis congue. Nulla facilisi. Curabitur nisi nulla, pharetra non elit sit amet, molestie aliquam sem. Donec fermentum elementum enim. Suspendisse a molestie lorem, eu fermentum sapien. Pellentesque tincidunt est sapien, eget tristique felis condimentum et. Maecenas sit amet luctus ipsum. Vestibulum et tortor quis odio ultrices ornare vel vel libero. Phasellus iaculis lacus turpis, ut feugiat metus porta at.</p>
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

            <form className="border px-3 py-3 " onSubmit={handleSubmit}>
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