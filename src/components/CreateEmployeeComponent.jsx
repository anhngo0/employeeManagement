// import React, { Component } from 'react';
// import withRouter from '../WithRouter';
// import EmployeeService from '../service/EmployeeService';

// class CreateEmployeeComponent extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             firstname:'',
//             lastname:'',
//             email:''
//         }

        
//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
//         this.changeEmailHandler = this.changeEmailHandler.bind(this)
//         this.saveEmployee = this.saveEmployee.bind(this)
//     }
    
//     saveEmployee = (e) => {
//         e.preventDefault();
//         let employee = {
//             firstname: this.state.firstname,
//             lastname: this.state.lastname,
//             email: this.state.email
//         };
//         console.log('employee =>' + JSON.stringify(employee));
        
//         EmployeeService.createEmployee(employee).then(res => {
//             const { navigate }= this.props;
//             navigate('/employees');
//         })
//     }

//     cancel(){
//         const { navigate }= this.props;
//         navigate('/employees');
//     }

//     changeFirstNameHandler = (event) =>{
//         this.setState({
//             firstname: event.target.value
//         });
//     }

//     changeLastNameHandler = (event) =>{
//         this.setState({
//             lastname: event.target.value
//         });
//     }

//     changeEmailHandler = (event) => {
//         this.setState({email: event.target.value});
//     }
//     render() {
//         return (
//             <div className='container'>
//                 <div className="row">
//                     <div className="card col-md-6 offset-md-3 offset-md-3">
//                         <h3 className="text-center">Add Employee</h3>
//                         <div className="card-body">
//                             {/* Form post employee */}
//                             <form action="POST">
//                                 <div className="form-group">
//                                     <label>First Name:</label>
//                                     <input type="text" placeholder='first name' name='firstname'
//                                     value={this.state.firstname} onChange={this.changeFirstNameHandler} className="form-control" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Last Name:</label>
//                                     <input type="text" placeholder='last name' name='lastname'
//                                     value={this.state.lastname} onChange={this.changeLastNameHandler} className="form-control" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Email:</label>
//                                     <input type="text" placeholder='email' name='email'
//                                     value={this.state.email} onChange={this.changeEmailHandler} className="form-control" />
//                                 </div>

//                                 <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
//                                 <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default withRouter(CreateEmployeeComponent);