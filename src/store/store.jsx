import React from 'react';
import { BrowserRouter, NavLink, Routes, Route, useNavigate } from 'react-router-dom';

export function Store() {
    const [game, setGame] = React.useState('');

    // Edit function as needed when API is linked
    function gameChange(e) {
        setGame(e.target.value);
    }

    async function getGame(id) {
        const res = await fetch(`/api/game/${id}`);
        const data = await res.json();

        return (data);
    }

    return (
        <main className="border px-3 py-3">
            <h1>{game ? game : "Game Missing"}</h1>
            {getGame(452)}
        </main>
    );
}