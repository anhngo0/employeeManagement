import React from 'react';
import ListUserComponent from './components/AdminComponent/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
// import CreateUserComponent from './components/CreateUserComponent';
// import UpdateUserComponent from './components/UpdateUserComponent';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import SignInComponent from './components/Form_Component/SignInComponent';
function Application() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent />
                <div className='container'>
                    <Routes>
                        <Route path = "/" exact element= {<SignInComponent />}/>
                        <Route path = "/admin" element= {<ListUserComponent />}/>
                        {/* <Route path = "/add-employee" element= {<CreateUserComponent />}/>
                        <Route path = "/update-employee/:employeeId" element= {<UpdateUserComponent />}/> */}
                    </Routes>
                </div>
                <FooterComponent />   
            </BrowserRouter>
        </div>
);
}

export default Application;