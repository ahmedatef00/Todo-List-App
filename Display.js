/**
 * author @aatef
 */







function display() {
    //this function will run when body tag load and whenever someone add,delete tasks from the arrays
    //check if the localstorage has the arrays:todo and done
    if (localStorage.hasOwnProperty("todo") == false) {
        //create the todo array
        var arr = new Array();
        localStorage.setItem("todo", JSON.stringify(arr));
    }
    if (localStorage.hasOwnProperty("done") == false) {
        //create the done array
        var arr2 = new Array();
        localStorage.setItem("done", JSON.stringify(arr2));
    }
    if (localStorage.hasOwnProperty("users") == false) {
        //create the users array
        var arr3 = new Array();
        localStorage.setItem("users", JSON.stringify(arr3));
    }

    //hold the div tag to display the table
    var tag = document.getElementById("tdl-list");
    //check if the todo array has tasks to display
    if (localStorage.todo.length) {
        //get the todo array
        var todo = JSON.parse(localStorage.getItem("todo"));
        //create the todo table
        tag.innerHTML = "<table id='show'>";
        var table = document.getElementById("show");
        for (var i = 0; i < todo.length; i++) {
            //display the data from the todo array in the todo table
            table.innerHTML += "<tr id='" + i + "'><td>" + todo[i].data + "</td><td><button onclick='removeTask(this)'>delete</button></td><td><button onclick='doneit(this)'>done</button></td></tr>"
        }
        //close the table tag
        table.innerHTML += "</table>";

    }
    //check if the done array has tasks to display
    if (localStorage.done.length) {
        //get the done array
        var done = JSON.parse(localStorage.getItem("done"));
        var tag4 = document.getElementById("td2-list");
        //create the done table
        tag4.innerHTML = "<table id='done'>";
        var table2 = document.getElementById("done");
        for (var i = 0; i < done.length; i++) {
            //display the data from the done array
            table2.innerHTML += "<tr id='" + i + "'><td class='t'>" + done[i].data + "</td><td><button  onclick='removeDone(this)'>delete</button></td></tr>";

        }
        //close the table tag
        table2.innerHTML += "</table>";
    }
    //update the search list
    updateList();
    //update user List
    updateUserList();


}