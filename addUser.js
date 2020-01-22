function addUser(e) {
    var txt = document.getElementById("user").value;
    // var tag = document.getElementById("user");
    //get the key pressed  ascii code
    var keycode = (e.keyCode ? e.keyCode : e.which);
    var flag = false;
    if (keycode == 13) {
        if (localStorage.users.length) {
            var users = JSON.parse(localStorage.getItem("users"));
            for (var i = 0; i < users.length; i++) {
                if (users[i] == txt)
                    flag = true;

            }
            if (flag == false) {
                var usr = new String();
                usr = txt;
                users.push(usr);
            }
            localStorage.setItem("users", JSON.stringify(users));
        }

    }
    updateUserList();


}