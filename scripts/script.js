"use strict";

var container = document.getElementsByClassName("container")[0];
let btn = document.getElementById("run");

btn.addEventListener('click', function() {
    let exTable = document.getElementById("theTable");
    let exCont = document.getElementById("table-div");

    if(exTable != null)
    {
        exTable.remove();
    }
    exCont.remove();

    let columns = document.getElementById("input1").value;
    let rows = document.getElementById("input2").value;

    let cont = document.createElement("div");
    cont.id = "table-div";
    let table = document.createElement("table");
    table.id = "theTable";
    let tbody = document.createElement("tbody");

    for(let i = 0; i < rows; i++)
    {
        let row = document.createElement('tr');
        for(let j = 0; j < columns; j++)
        {
            let column = document.createElement('td');
            row.appendChild(column);
        }
        tbody.appendChild(row);
    }
    debugger;
    table.appendChild(tbody);
    cont.appendChild(table);
    container.appendChild(cont);
});
btn.addEventListener('click', function() {

    for(let i = 0; i < document.getElementsByTagName("tr").length; i++)
    {
        for(let j = 0; j < document.getElementsByTagName("tr")[i].cells.length; j++)
        {
            let data = document.getElementsByTagName("tr")[i].cells[j].textContent = (i + 1) + "" + (j + 1);
        }
    }
}); 