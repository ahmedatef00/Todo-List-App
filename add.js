function add() {
    //get the user name
    var txt = document.getElementById("user").value;
    //search for user
    var ind = -1;
    if (localStorage.users.length) {
        var users = JSON.parse(localStorage.getItem("users"));
        //if the input tag of users not empty
        if (txt != "") {
            for (var i = 0; i < users.length; i++) {
                //search for user index
                if (users[i] == txt) {
                    ind = i;
                    break;
                }

            }
            //if user not found ,creat new user 
            if (ind == -1) {
                var usr = new String();
                usr = txt;
                users.push(usr);
                ind = users.length - 1;
            }
            //add the new user to the users array
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
    //check if user has the entered task
    var flag = false;
    //get the task data from the input tag
    var data = document.getElementById("new-task");
    //check if input tag for task is not empty
    if (data.value != "") {

        //if todo array created
        if (localStorage.todo.length) {
            //get the todo array
            var todo = JSON.parse(localStorage.getItem("todo"));
            for (var i = 0; i < todo.length; i++) {
                //check if the selected user has the selected task
                if (todo[i].data == data.value && todo[i].userIndex == ind) {
                    flag = true;
                    break;
                }
            }
            //if selected user doesn't has the task ,added to the tasks array
            if (flag == false) {
                //create new object for new task
                var task = new Object();
                //if there is data in input tag
                //assign data to the newly created object
                task.data = data.value;
                task.userIndex = ind;
                //add the newly created object to the tada array
                todo.push(task);
                localStorage.setItem("todo", JSON.stringify(todo));

                //display the updated arrays
                display();
            } else {
                alert("this task is already assigned in your todo list! ");
            }

        }
    }
}