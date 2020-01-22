function updateList() {
    //get selected element from the drop down list
    var selected = document.getElementById("selected").value;
    //hold the tag of the search list to add options
    var tag2 = document.getElementById("data");
    //get user name
    var user = document.getElementById("user").value;
    //index of default user
    var ind = -1;
    //search for user index by entered name
    ind = searchUser(user);
    //check if user wants to search in all tasks
    if (selected == "all") {
        if (localStorage.todo.length) {
            //get the todos array
            var todo = JSON.parse(localStorage.getItem("todo"));
            //add search options from the todos array
            tag2.innerHTML = "<datalist id='tasks'></datalist>";
            var tag3 = document.getElementById("tasks");
            for (var i = 0; i < todo.length; i++) {
                //add tasks of selected user to options
                if (todo[i].userIndex == ind)
                    tag3.innerHTML += "<option value=\"" + todo[i].data + "\">";
            }
        }

        //check if the done array has any elements?
        if (localStorage.done.length) {
            //if true,then add the search options from the done array
            var done = JSON.parse(localStorage.getItem("done"));
            for (var i = 0; i < done.length; i++) {
                //add tasks of selected user to options
                if (done[i].userIndex == ind)
                    tag3.innerHTML += "<option value=\"" + done[i].data + "\">";
            }
        }
    }
    //check if user wants to search the todos tasks only
    else if (selected == "tasks") {
        if (localStorage.todo.length) {
            //get the todos array 
            var todo = JSON.parse(localStorage.getItem("todo"));
            //add search options from the todos array only!
            tag2.innerHTML = "<datalist id='tasks'></datalist>";
            var tag3 = document.getElementById("tasks");
            for (var i = 0; i < todo.length; i++) {
                //add tasks of selected user to options
                if (todo[i].userIndex == ind)
                    tag3.innerHTML += "<option value=\"" + todo[i].data + "\">";
            }
        }
    }
    //check if the user wants to search the done tasks only
    else if (selected == "done") {
        //check if there any done tasks in the done array!
        if (localStorage.done.length) {
            //add search options from the done array only!
            done = JSON.parse(localStorage.getItem("done"));
            tag2.innerHTML = "<datalist id='tasks'></datalist>";
            var tag3 = document.getElementById("tasks");
            for (var i = 0; i < done.length; i++) {
                //add tasks of selected user to options
                if (done[i].userIndex == ind)
                    tag3.innerHTML += "<option value=\"" + done[i].data + "\">";
            }
        }
    }
}