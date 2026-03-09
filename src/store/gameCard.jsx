import React, { useState, useEffect } from 'react';

function GameCard({ gameId }) {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const randomGameId = Math.floor(Math.random() * 500) + 1; // Random ID between 1 and 500
    gameId = gameId || randomGameId;
    async function fetchGame() {
      try {
        const res = await fetch(`/api/game/${gameId}`);
        if (!res.ok) {
          throw new Error('Failed to fetch game');
        }
        const data = await res.json();
        setGame(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, [gameId]);

  if (loading) return <p>Loading game...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!game) return <p>No game found.</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', maxWidth: '400px' }}>
      <h2>{game.title}</h2>
      {game.thumbnail && (
        <img src={game.thumbnail} alt={game.title} style={{ width: '100%', borderRadius: '8px' }} />
      )}
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Platform:</strong> {game.platform}</p>
      <p>{game.short_description}</p>
      <a href={game.game_url} target="_blank" rel="noopener noreferrer">Play Now</a>
    </div>
  );
}

export default GameCard;