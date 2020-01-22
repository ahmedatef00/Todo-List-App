function removeDone(e) {
    //get the done table
    var table = document.getElementById("done");
    //get the done array
    var done = JSON.parse(localStorage.getItem("done"));
    //delete done task
    done.splice(e.parentNode.parentNode.rowIndex, 1);
    localStorage.setItem("done", JSON.stringify(done));
    //delete row from the done table
    table.deleteRow(e.parentNode.parentNode.rowIndex);
    //update table rows ids after deletion
    for (var i = 0; i < table.rows.length; i++) {

        table.rows[i].id = i;
    }
    //update the search list
    updateList();

}