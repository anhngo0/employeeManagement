// import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
// import withRouter from '../WithRouter';
// import EmployeeService from '../service/EmployeeService';

// class UpdateEmployeeComponent extends Component {
//     constructor(props){
//         super(props)
//         const { employeeId } = props;
//         this.state = {
//             id: employeeId,
//             firstname:'',
//             lastname:'',
//             email:''
//         }

        
//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
//         this.changeEmailHandler = this.changeEmailHandler.bind(this)
//         this.updateEmployee = this.updateEmployee.bind(this)
//     }
    
//     componentDidMount(){
//         EmployeeService.getEmployeeById(this.state.id).then(res => {
//             let employee = res.data;
//             this.setState({
//                 firstname: employee.firstname,
//                 lastname: employee.lastname,
//                 email:employee.email
//             }
//             )
//         })
//     }
//     updateEmployee = (e) => {
//         e.preventDefault();
//         let employee = {
//             firstname: this.state.firstname,
//             lastname: this.state.lastname,
//             email: this.state.email
//         };
//         console.log('employee =>' + JSON.stringify(employee));
        
//         EmployeeService.updateEmployeeInfo(employee, this.state.id).then(res => {
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
//                         <h3 className="text-center">Update Employee</h3>
//                         <div className="card-body">
//                             {/* Form post employee */}
//                             <form action="PUT">
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

//                                 <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
//                                 <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default withRouter(UpdateEmployeeComponent);