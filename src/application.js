import React from 'react';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function Application() {
    return (
        <div>
            <Router>
            <HeaderComponent />
            <div className='container'>
                <Routes>
                    <Route path = "/" exact element= {<ListEmployeeComponent />}/>
                    <Route path = "/employees" element= {<ListEmployeeComponent />}/>
                    <Route path = "/add-employees" element= {<CreateEmployeeComponent />}/>
                </Routes>
            </div>
            <FooterComponent />   
            </Router>
        </div>
);
}

export default Application;