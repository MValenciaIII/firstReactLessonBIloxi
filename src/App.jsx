import React from 'react'
import "./style.css"

//Nav Bar will here 
//
function Header() {
 

    return (
        <div className="container headerBackground">
            <div className="row">
                <div className="col-sm-6">
                    <h1>Top 5 Anime List</h1>
                </div>
                <div className="col-sm-6 navbar">
                    //list-group
                    <ul className='list-group list-group-horizontal'>
                        <li className='list-group-item'>Lorem</li>
                        <li className='list-group-item'>About</li>
                        <li className='list-group-item'>Content</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

//Pascalcase == ex. Body
function Body() {
    let test = 'BlueLock'
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <ol>
                        <li>Full Metal Alchemist: Brotherhood</li>
                        <li>{test}</li>
                        <li>Demon Slayer</li>
                        <li>Shield Hero (S1)</li>
                        <li>Soul Eater</li>
                    </ol>
                </div> {/* END OF COL */}
            </div> {/* End OF ROW */}
            <div className="row">
                <div className="col-sm-12">
                    <h1>I'm a Picture</h1>
                    <img src="" alt="" />

                </div>{/* END OF COL */}
            </div>{/* End OF ROW */}
        </div> 

    )
}

function Footer() {

    return (
        <div className="container">
            <h1>Footer</h1>
        </div>
    )
}

function App() {

    return (
        <div className="container">
            <Header />
            <Body />
            <Footer />
        </div>
    
    )

}

export default App;