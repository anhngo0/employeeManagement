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
                <span className='text-muted row' style={{marginTop:"15px", textAlign:"center"}}> Course Management Website</span>
               </footer>
            </div>
        ) 
    }
}

export default FooterComponent;