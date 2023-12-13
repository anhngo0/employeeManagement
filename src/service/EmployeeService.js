import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_POST_URL = "http://localhost:8080/api/v1/post";

class EmployeeService{

    //fetch data get from api & return a promise 
    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_POST_URL,employee,{
            headers: {'Content-Type': 'application/json'}
          });
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId)
    }

    updateEmployeeInfo(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee)
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id)
    }
}

export default new EmployeeService()