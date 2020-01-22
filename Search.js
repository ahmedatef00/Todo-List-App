function search(e) {
    //get the drop down list selected value
    var selected = document.getElementById("selected").value;
    //get the task user searching for
    var txt = document.getElementById("data").value;
    //get user name
    var user = document.getElementById("user").value;
    //index of user
    var ind = -1;
    //hold the div tag
    var tag = document.getElementById("search");
    //get the key pressed  ascii code
    var keycode = (e.keyCode ? e.keyCode : e.which);
    //create search table 
    tag.innerHTML = "<table id='se'>";
    var table = document.getElementById("se");
    if (txt != "")
        ind = searchUser(user);
    //check if user pressed 'enter' and selected 'all'
    if (keycode == 13 && selected == "all") {
        //check if todos array has tasks
        if (localStorage.todo.length) {
            //get the todo array
            var todo = JSON.parse(localStorage.getItem("todo"));

            for (var i = 0; i < todo.length; i++) {
                if (todo[i].data == txt && todo[i].userIndex == ind)
                    table.innerHTML += "<tr id='" + i + "'><td>" + todo[i].data + "</td><td><button onclick='removeFmSe(this)'>delete</button></td><td><button onclick='doneFmSe(this)'>done</button></td></tr>";
            }

        }
        //check if done array has tasks
        if (localStorage.done.length) {
            //get the done array
            var done = JSON.parse(localStorage.getItem("done"));
            for (var i = 0; i < done.length; i++) {
                if (done[i].data == txt && done[i].userIndex == ind)
                    table.innerHTML += "<tr id='" + i + "'><td>" + done[i].data + "</td><td><button onclick='removeDnFmSe(this)'>delete</button></td></tr>";
            }
        }

    }
    //check if user pressed 'enter' and selected 'tasks'
    else if (keycode == 13 && selected == "tasks") {
        if (localStorage.todo.length) {
            //get the todo array
            var todo = JSON.parse(localStorage.getItem("todo"));
            //display the task user searching for
            for (var i = 0; i < todo.length; i++) {
                if (todo[i].data == txt && todo[i].userIndex == ind)
                    table.innerHTML += "<tr id='" + i + "'><td>" + todo[i].data + "</td><td><button onclick='removeFmSe(this)'>delete</button></td><td><button onclick='doneFmSe(this)'>done</button></td></tr>"
            }
        }
    }
    //check if user pressed 'enter' and selected 'done'
    else if (keycode == 13 && selected == "done") {
        //check if done array has tasks
        if (localStorage.done.length) {
            //get the done array
            var done = JSON.parse(localStorage.getItem("done"));
            for (var i = 0; i < done.length; i++) {
                if (done[i].data == txt && done[i].userIndex == ind)
                    table.innerHTML += "<tr id='" + i + "'><td>" + done[i].data + "</td><td><button onclick='removeDnFmSe(this)'>delete</button></td></tr>";
            }
        }
    }
    //close table tag
    table.innerHTML += "</table>";
}