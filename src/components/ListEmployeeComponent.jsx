import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';
import { useNavigate, BrowserRouter } from 'react-router-dom';
class ListEmployeeComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
        this.addEmployee = this.addEmployee.bind(this);
    }
// TODO: ADD @CrossOrigin(origins = "http://locahost:8080" to EmployeeController)
    componentDidMount(){
        EmployeeService.getEmployee().then(response => {
            this.setState({employee : response.data})
        })
    }

    addEmployee(){
        useNavigate()('/add-employee')
    }

    render() {
        return (
        <div>
            <h2 className='text-center'>Employees List </h2>
            <div className="row">
                <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
            </div>
            <div className="row">
                <table className="table table-stripped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.employees.map(
                            employee => <tr key={employee.key}>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default ListEmployeeComponent;