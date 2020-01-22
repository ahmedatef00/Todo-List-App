function removeTask(e) {
    //get the todo table
    var table = document.getElementById("show");
    //get the todo array
    var todo = JSON.parse(localStorage.getItem("todo"));
    //delete the todo task from the todo array
    todo.splice(e.parentNode.parentNode.rowIndex, 1);
    localStorage.setItem("todo", JSON.stringify(todo));
    //delete the row from the table
    table.deleteRow(e.parentNode.rowIndex);
    //update table rows ids after deletion
    for (var i = 0; i < table.rows.length; i++) {

        table.rows[i].id = i;
    }

    //update search list
    updateList();


}