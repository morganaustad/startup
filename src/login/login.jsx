import React from 'react';


export function Login({ setUser }) {
    const [text, setText] = React.useState('');
    const navigate = useNavigate();

    function loginUser() {
        localStorage.setItem('user', text);
        setUser(text);
        navigate('/features');
    }

    function textChange(e) {
        setText(e.target.value);
    }

    return (
        <main className="justify-content-center align-items-center">
            <h2 className="text-center">Welcome to <span>FeatureReacher</span></h2>
            <form className="px-4 py-3 border">
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input type="text" className="form-control" placeholder="Username" onChange={textChange} />
                </div>
                <div className="mb-4">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button className="btn btn-info text-light" onClick={loginUser} >Login</button>
            </form>
        </main>
    );
}