import React, { Component } from 'react';
class FooterComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
               <footer>
                <span className='text-muted'> ALl rights reserved</span>
               </footer>
            </div>
        ) 
    }
}

export default FooterComponent;