import React from 'react';

function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Sam Corkery. All Rights Reserved.</p>
            <div>
                <a href="https://github.com/yourusername">GitHub</a> |
                <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;
