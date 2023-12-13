import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';
import withRouter from '../WithRouter';
class ListEmployeeComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }
    componentDidMount(){
        EmployeeService.getEmployee().then(response => {
            this.setState({employees : response.data})
        })
    }

    addEmployee(){
        const {navigate} = this.props;
        navigate('/add-employee')
    }

    editEmployee(id){
        const {navigate} = this.props;
        navigate(`/update-employee/${id}`)
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res =>{
            this.setState({
                employees:this.state.employees.filter(employee => employee.id != id)
            });
        });
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
                                <td>
                                    <button className="btn btn-info" onClick={() => this.editEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger' style={{marginLeft:'15px'}} onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default withRouter(ListEmployeeComponent);