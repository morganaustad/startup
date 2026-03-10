import React, { useState, useEffect } from 'react';
import '../app.css';

function GameCard() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const randomGameId = Math.floor(Math.random() * 500) + 100; // Random ID between 100 and 600

    async function fetchGame() {
      try {
        const res = await fetch(`/api/game/${randomGameId}`);
        if (!res.ok) {
          throw new Error('Failed to fetch game');
        }
        // console.log('Response:', await res.json());
        const data = await res.json();
        console.log('Fetched game data:', data);
        setGame(data);
        localStorage.setItem('game', JSON.stringify(data.title));
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, []);

  if (loading) return <p>Loading game...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!game) return <p>No game found.</p>;

  return (
    <div className='d-flex flex-column align-items-center justify-content bg-dark rounded-4 p-4 text-white w-50'>
      <h2 className='text-center mb-3'>{game.title}</h2>
      {game.thumbnail && (
        <img src={game.thumbnail} alt={game.title} className='align-center rounded-4 img-thumbnail w-50 mb-4' />
      )}

      <div className='border border-secondary rounded p-3 w-75'>
        <p className='text-white'><strong>Genre:</strong> {game.genre}</p>
        <p className='text-white'><strong>Platform:</strong> {game.platform}</p>
        <p className='text-white'>{game.short_description}</p>
        <a href={game.game_url} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Play Now</a>
      </div>
    </div>
  );
}

export default GameCard;