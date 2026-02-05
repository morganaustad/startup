import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
        <div className="container">

        <header className="d-flex flex-wrapp align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="index.html" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <h1>FeatureReacher</h1>
            </a>

            <menu className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li className="nav-item"><a href="index.html"  className="nav-link px-2 link-secondary">Home</a></li>
                <li className="nav-item"><a href="features.html"  className="nav-link px-2 link-dark">Suggest Features</a></li>
                <li className="nav-item"><a href="store.html"  className="nav-link px-2 link-dark">Game Store Page</a></li>
            </menu>
        </header>

        </div>
        <div className="container">

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

        </div>
        <div className="container">

        <footer className="py-3 my-4 nav justify-content-center border-top pb-3">
            <a href="https://github.com/morganaustad/startup.git" target="_blank" className="text-center text-muted text-decoration-none pt-3">Morgan Austad's Startup GitHub Repository</a>
        </footer>

        </div>
    </div>
  );
}