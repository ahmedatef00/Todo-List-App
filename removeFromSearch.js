function removeFmSe(e) {
    //get the search table
    var table = document.getElementById("se");
    //get the todo array
    var todo = JSON.parse(localStorage.getItem("todo"));
    //delete the todo task from the todo array by id
    todo.splice(table.rows[e.parentNode.parentNode.rowIndex].id, 1);
    localStorage.setItem("todo", JSON.stringify(todo));
    //delete the row from the table
    table.deleteRow(e.parentNode.rowIndex);

    //update search list
    updateList();
    //update users List
    updateUserList();
    display();
}