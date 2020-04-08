import axios from "axios";

export default {
    createUser: function(userData){
        return axios.post("/signup", userData);
    },
    logInUser: function(userData){
        return axios.post("/signin", userData);
    }
}