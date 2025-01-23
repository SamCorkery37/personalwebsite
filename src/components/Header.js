import React from 'react';

function Header() {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                {/* Add navigation links if needed */}
                <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
