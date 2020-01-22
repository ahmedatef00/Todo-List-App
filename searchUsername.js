function searchUser(name) {
    var ind = -1;
    if (localStorage.users.length) {
        //get the users array
        var user = JSON.parse(localStorage.getItem("users"));

        for (var i = 0; i < user.length; i++) {
            if (user[i] == name)
                return i;
        }
    }
    return ind;
}