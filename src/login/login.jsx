import React from 'react';


export function Login() {
    const [username, setUsername] = React.useState('');

    function loginUser() {
        localStorage.setItem('username', username);
    }

    function textChange(e) {
        setUsername(e.target.value);
    }

    return (
        <main className="justify-content-center align-items-center">
            <h2 className="text-center">Welcome to <span>FeatureReacher</span></h2>
            <form method="get" action="features" className="px-4 py-3 border">
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input type="text" className="form-control" placeholder="Username" onChange={textChange} />
                </div>
                <div className="mb-4">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-info" onClick={loginUser} >Login</button>
            </form>
        </main>
    );
}