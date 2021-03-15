import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
            <div className= "nav">
                <div id= 'input-fields'>
                    <input type= "text" placeholder= "Search..."></input>
                    <button type= "submit">Search</button>
                </div>
            </div>
        )
    }
}

export default Navbar;