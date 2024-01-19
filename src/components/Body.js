import React from 'react'

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

export default Body