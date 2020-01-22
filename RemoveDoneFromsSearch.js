function removeDnFmSe(e) {
    //get the search table
    var table = document.getElementById("se");
    //get the done array
    var done = JSON.parse(localStorage.getItem("done"));
    //delete done task
    done.splice(table.rows[e.parentNode.parentNode.rowIndex].id, 1);
    localStorage.setItem("done", JSON.stringify(done));
    //delete row from the search table
    table.deleteRow(e.parentNode.parentNode.rowIndex);

    //update the search list
    updateList();
    display();
}