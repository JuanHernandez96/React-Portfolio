import React from 'react';



//  page for navigation, on every page, just to get back and forth in between pages
function Nav(){






    return(
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <nav className="navbar-brand">
                {/* made link so we can go back to the homepage */}
                <h1 ><a class='main-link' href='/'>React Portfolio</a></h1>
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