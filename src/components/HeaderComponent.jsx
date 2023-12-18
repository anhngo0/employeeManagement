import React, { Component } from 'react';
class HeaderComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"rgba(142, 68, 173,1.0)"}}>
                <a className="navbar-brand" style={{color:"#fff"}}href="#">Navbar</a>
                <button className='btn btn-info'>Log In</button>
                </nav>
          </div>
        ) 
    }
}

export default HeaderComponent;