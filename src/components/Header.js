import React from 'react'

function Header() {
 

    return (
        <div className="container headerBackground">
            <div className="row">
                <Logo />
                <Navigation />
            </div>
        </div>
    )
}

function Logo() {
    return(
        <div className="col-sm-6">
            <h1>Top 5 Anime List</h1>
        </div>
    )
}


function Navigation() {
    return (
        <div className="col-sm-6 navbar">
        <ul className='list-group list-group-horizontal'>
            <li className='list-group-item'>Lorem</li>
            <li className='list-group-item'>About</li>
            <li className='list-group-item'>Content</li>
        </ul>
    </div>
    )
}



export default Header;