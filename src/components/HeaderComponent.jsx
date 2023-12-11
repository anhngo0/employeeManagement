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
                <header>
                    <div className="navbar navbar-expand-md navbar-dark">
                        <div><a href="#" className='navbar-brand'>Employee Management App</a></div>
                    </div>
                </header>
            </div>
        ) 
    }
}

export default HeaderComponent;