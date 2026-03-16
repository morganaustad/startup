import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginOrCreate(endpoint) {
    console.log(`Attempting to ${endpoint === '/api/auth/login' ? 'login' : 'create'} with username: ${userName}`);
    const response = await fetch(endpoint, {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      credentials: 'include',
      body: JSON.stringify({ email: userName, password: password }),
    });
    console.log(`Response status: ${response.status}`);
    if (response?.status === 200) {
      props.onLogin(userName);
      console.log('Login/Create successful');
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
      console.error(`Error: ${body.msg}`);
    }
  }

  return (
    <>
      <main className="justify-content-center align-items-center">
        <h2 className="text-center">Welcome to <span>FeatureReacher</span></h2>
        <div className='px-4 py-3 border'>
            <div className='mb-3'>
                <label className='form-label'>Username:</label>
                <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Username' />
            </div>
            <div className='mb-4'>
                <label className='form-label'>Password:</label>
                <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            </div>
            <Button variant='primary' className='me-3' onClick={() => loginOrCreate('/api/auth/login')} disabled={!userName || !password}>
            Login
            </Button>
            <Button variant='secondary' onClick={() => loginOrCreate('/api/auth/create')} disabled={!userName || !password}>
            Create
            </Button>
        </div>
      </main>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}