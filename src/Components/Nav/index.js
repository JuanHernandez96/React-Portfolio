import React from 'react';




function Nav(){






    return(
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <nav className="navbar-brand">
                <h1 href='/'>React Portfolio</h1>
                <ul>
                    <li><a className="nav-link" href="About">About Me</a></li>
                    <li><a className="nav-link" href="Projects">My Projects </a></li>
                    <li><a className="nav-link" href="Contact">How to Contact Me</a></li>
                </ul>
            
            </nav>
        </header>

    )
}

export default Nav;