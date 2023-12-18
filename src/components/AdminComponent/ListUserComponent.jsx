import React, { Component } from 'react';
import UserService from '../../service/UserService';
import withRouter from '../../WithRouter';
class ListUserComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.editUser = this.editUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }
    componentDidMount(){
        UserService.getUser().then(response => {
            this.setState({users : response.data})
        })
    }

    editUser(id){
        // const {navigate} = this.props;
        // navigate(`/update-user/${id}`);
    }

    deleteUser(id){
        UserService.deleteUser(id).then(res =>{
            this.setState({
                users:this.state.users.filter(user => user.id != id)
            });
        });
    }

    render() {
        return (
        <div>
            <h2 className='text-center'>Users List </h2>
            {/* <div className="row">
                <button className="btn btn-primary" onClick={this.addUsers}>Add Users</button>
            </div> */}
            <div className="row">
                <table className="table table-stripped table-bordered">
                    <thead style={{backgroundColor:"rgba(44,62,80,1.0)", color:"rgba(236,240,241,1.0"}}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.users.map(
                            user => <tr key={user.key}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => this.editUser(user.id)}>View</button>
                                    <button className='btn btn-danger' style={{marginLeft:'15px'}} onClick={() => this.deleteUser(user.id)}>Delete</button>
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

export default withRouter(ListUserComponent);