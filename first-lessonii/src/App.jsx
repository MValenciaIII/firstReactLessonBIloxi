import React from 'react'
import "./style.css"

//Nav Bar will here 
//
function Header() {
 

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h1>Hello World</h1>
                </div>
                <div className="col-sm-4">
                    
                </div>
                <div className="col-sm-4 navbar ">
                    <ul className='list-group list-group-horizontal'>
                        <li className='list-group-item'>About </li>
                        <li className='list-group-item'>Content</li>
                        <li className='list-group-item'>Lorem</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

//Pascalcase == ex. Body
function Body() {
    
    return(
        // <div className="main">
        //     <p className='pTag'>Testing Body COntent</p>
            
        // </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4"></div>
                <div className="col-sm-4"></div>
            </div>
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