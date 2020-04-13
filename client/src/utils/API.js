import axios from "axios";

export default {
    createUser: function(userData){
        return axios.post("/signup", userData);
    },
    logInUser: function(userData){
        return axios.post("/signin", userData);
    },
    savePlaygroundCode: function(userData){
        return axios.post("/api/playground_code", userData);
    },
    getPlaygroundCode: function(username){
        return axios.get("/api/playground_code", username);
    }
}