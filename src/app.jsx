import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Login } from './login/login';
import { Features } from './features/features';
import { Store } from './store/store';

export default function App() {
  const [user, setUser] = React.useState(localStorage.getItem('user') || null);

  return (
    <BrowserRouter>
    
    <div>
        <div className="container">

        <header className="d-flex flex-wrapp align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <NavLink to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <h1>FeatureReacher</h1>
            </NavLink>

            <menu className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li className="nav-item"><NavLink to="/"  className="nav-link px-2 link-secondary">Home</NavLink></li>
                {user &&<li className="nav-item"><NavLink to="features"  className="nav-link px-2 link-dark">Suggest Features</NavLink></li>}
                {user && <li className="nav-item"><NavLink to="store"  className="nav-link px-2 link-dark">Game Store Page</NavLink></li>}
                {user && <li className="nav-item"><NavLink to="/"  className="nav-link px-2 py-2 link-light bg-info rounded" onClick={() => {localStorage.removeItem('user'); setUser(null);}}>Logout {user}</NavLink></li>}
            </menu>
        </header>

        </div>
        <div className="container">

        <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/features" element={<Features />} />
            <Route path="/store" element={<Store />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

        </div>
        <div className="container">

        <footer className="py-3 my-4 nav justify-content-center border-top pb-3">
            <NavLink to="https://github.com/morganaustad/startup.git" target="_blank" className="text-center text-muted text-decoration-none pt-3">Morgan Austad's Startup GitHub Repository</NavLink>
        </footer>

        </div>
    </div>

    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container bg-secondary text-center">
      <h1>404 Not Found</h1>
    </main>
  );
}