import axios from "axios";

export default class JobVerenService {
getJobVerens(){
    return axios.get("http://localhost:8081/api/EmployerJobPosting/getAll")
}

}