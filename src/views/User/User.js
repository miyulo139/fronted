import React from 'react';
import UserService from  '../../services/UserService';

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = { users:[] }
        this.componentDidMount();
    }

    componentDidMount(){
        UserService.getUsers().then((response)=>{
            this.setState({users: response.data})
        });
        console.log(this.state);
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> username </td>
                            <td> password </td>
                            <td> first name </td>
                            <td> last name </td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.username}>
                                     <td> {user.username}</td> 
                                     <td> {user.password}</td>
                                     <td> {user.nombres}</td>   
                                     <td> {user.apellidos}</td>   
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default UserComponent