function updateUserList() {
    var tag2 = document.getElementById("user");
    if (localStorage.users.length) {
        //get the users array
        var users = JSON.parse(localStorage.getItem("users"));
        //add search options from the users array
        tag2.innerHTML = "<datalist id='users'></datalist>";
        var tag3 = document.getElementById("users");
        for (var i = 0; i < users.length; i++) {
            tag3.innerHTML += "<option value=\"" + users[i] + "\">";
        }
    }
}