import React from 'react';

export default function Menus({ option, onClick }) {
    return (
        <li className="menu-item">
            <button onClick={onClick} className="menu-button">
                {option}
            </button>
        </li>
    );
}
