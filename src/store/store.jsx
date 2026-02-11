import React from 'react';
import { BrowserRouter, NavLink, Routes, Route, useNavigate } from 'react-router-dom';

export function Store() {
    const [game, setGame] = React.useState('');

    // Edit function as needed when API is linked
    function gameChange(e) {
        setGame(e.target.value);
    }

    return (
        <main className="border px-3 py-3">
            <h1>{game ? game : "Game Missing"}</h1>
            <p>Game description</p>
            <p>(This page is for steam store api and information of the game.)</p>
            <p>(After we link the API or however that works, then I'll be able to link the game name to the rest of the app [much of the app has conditional logic behind the game name being present in localstorage, such as the title here])</p>
            <img src="https://playlegend.net/wp-content/uploads/2021/11/lgnd_fp_gd-dm.jpg" width="100%" />
        </main>
    );
}