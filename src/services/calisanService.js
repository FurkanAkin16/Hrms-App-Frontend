import axios from "axios";

export default class CalisanService {
    getCalisans(){
        return axios.get("http://localhost:8081/api/cvcandidate/getAll")
    }
}