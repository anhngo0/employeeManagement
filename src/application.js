import React from 'react';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
function Application() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent />
                <div className='container'>
                    <Routes>
                        <Route path = "/" exact element= {<ListEmployeeComponent />}/>
                        <Route path = "/employees" element= {<ListEmployeeComponent />}/>
                        <Route path = "/add-employee" element= {<CreateEmployeeComponent />}/>
                        <Route path = "/update-employee/:employeeId" element= {<UpdateEmployeeComponent />}/>
                    </Routes>
                </div>
                <FooterComponent />   
            </BrowserRouter>
        </div>
);
}

export default Application;