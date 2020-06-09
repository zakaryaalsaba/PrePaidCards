const API_URL = "http://192.168.1.65:5001/";

module.exports = {

    register: API_URL + "api/auth/register",
    login: API_URL + "api/auth/login",
    tokenLogin : API_URL + "api/auth/tokenlogin",

    getMyInfo: API_URL + "api/auth/getmyinfo",
    changeName: API_URL + "api/auth/changename",
    changePassward: API_URL + "api/auth/changepassward",

    getMyRooms: API_URL + "api/Rooms",
    createRoom: API_URL + "api/Rooms",
    

}