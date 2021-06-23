import {Link} from 'react-router-dom';
import * as React from 'react';

export default function NavBar() {
    return(
        <div>
            <Link to='/shoppingList'>Shopping List</Link>
            <Link to='/leaderBoard'>Counter Leaderboard</Link>
            <Link to='/questioner'>Questioner</Link>
            <Link to='/aboutUs'>About Us</Link>
            <Link to='/clock'>Clock Timer</Link>
            <Link to='/currency'>Currency Converter</Link>
            <Link to='/infoPage'>Info Page</Link>

        </div>
    )
}

