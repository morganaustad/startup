import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('user');
        props.onLogout();
      });
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
        <h2 className="text-center p-3">Welcome to <span>FeatureReacher</span></h2>

        <div className='d-flex flex-column border p-5'>
            <p className='text-center text-muted'>Signed in as:</p>
            <div className='color-primary fs-3 mb-4 text-center'>{props.userName}</div>
            <Button variant='primary' className='m-2' onClick={() => navigate('/features')}>
            Suggest Features
            </Button>
            <Button variant='secondary' className='m-2' onClick={() => logout()}>
            Logout
            </Button>
        </div>
    </div>
  );
}