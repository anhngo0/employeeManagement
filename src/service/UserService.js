import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user";
const USER_API_POST_URL = "http://localhost:8080/api/v1/post";

class UserService{

    //fetch data get from api & return a promise 
    getUser(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_POST_URL,user,{
            headers: {'Content-Type': 'application/json'}
          });
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId)
    }

    updateUserInfo(user, userId){
        return axios.put(USER_API_BASE_URL + "/" + userId, user)
    }

    deleteUser(id){
        return axios.delete(USER_API_BASE_URL + "/" + id)
    }
}

export default new UserService()