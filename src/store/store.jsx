import React from 'react';
import GameCard from './gameCard';

export function Store() {

    return (
        <main className="d-flex flex-column align-items-center justify-content-center border px-3 py-3">
            <h2 className="text-center m-3">Game for Recommending Suggestions:</h2>
            <GameCard />
            <p className="text-center text-muted mt-5">*Game data is randomly pulled and may not be accurate. Refresh if nothing loads.</p>
        </main>
    );
}