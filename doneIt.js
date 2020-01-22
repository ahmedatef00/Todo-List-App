function doneit(e) {
    //get table of todos
    var table = document.getElementById("show");
    //get the array of done tasks
    var done = JSON.parse(localStorage.getItem("done"));
    //get the array of todos
    var todo = JSON.parse(localStorage.getItem("todo"));
    //create new object to hold the data of the newly done task
    var obj = new Object();
    obj.data = todo[e.parentNode.parentNode.rowIndex].data;
    obj.userIndex = todo[e.parentNode.parentNode.rowIndex].userIndex;
    //add the newly done task to the done array
    done.push(obj);
    localStorage.setItem("done", JSON.stringify(done));
    //hold the tag of the div to display the updated table of done tasks
    var tag = document.getElementById("td2-list");
    //create the table of done tasks
    tag.innerHTML = "<table id='done'>";
    var table2 = document.getElementById("done");
    //loop on the array of done tasks and display them in the table
    for (var i = 0; i < done.length; i++) {
        table2.innerHTML += "<tr id='" + i + "'><td class='t'>" + done[i].data + "</td><td><button  onclick='removeDone(this)'>delete</button></td></tr>";
    }
    //close the table tag
    table2.innerHTML += "</table>";

    //delete the done task from the tasks array
    todo.splice(e.parentNode.parentNode.rowIndex, 1);
    localStorage.setItem("todo", JSON.stringify(todo));
    //delete row of the done task from the todos table
    table.deleteRow(e.parentNode.parentNode.rowIndex);


    //update the search list
    updateList();

}