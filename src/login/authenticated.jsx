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
    <div>
        <h2 className="text-center">Welcome to <span>FeatureReacher</span></h2>
        <div className='color-primary'>{props.user}</div>
        <Button variant='primary' onClick={() => navigate('/features')}>
        Suggest Features
        </Button>
        <Button variant='secondary' onClick={() => logout()}>
        Logout
        </Button>
    </div>
  );
}