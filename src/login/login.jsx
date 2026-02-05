import React from 'react';

export function Login() {
    return (
        <main className="justify-content-center align-items-center">
            <h2 className="text-center">Welcome to <span>FeatureReacher</span></h2>
            <form method="get" action="features.html" className="px-4 py-3 border">
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" placeholder="email@example.com" />
                </div>
                <div className="mb-4">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-info">Login</button>
            </form>
        </main>
    );
}