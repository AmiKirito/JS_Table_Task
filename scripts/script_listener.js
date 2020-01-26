"use strict";

var cont = document.getElementsByClassName("table-div")[0];
let btn = document.getElementById("run");

btn.addEventListener('click', function() {
    let exTable = document.getElementById("theTable");
    if(exTable != null)
    {
        exTable.remove();
    }

    let columns = document.getElementById("input1").value;
    let rows = document.getElementById("input2").value;

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
    table.appendChild(tbody);
    cont.appendChild(table);
});
btn.addEventListener('click', function() {

    for(let i = 0; i < document.getElementsByTagName("tr").length; i++)
    {
        for(let j = 0; j < document.getElementsByTagName("tr")[i].cells.length; j++)
        {
            let data = document.getElementsByTagName("tr")[i].cells[j].textContent = (i + 1) + "" + (j + 1);
            let box = document.getElementsByTagName("tr")[i].cells[j];
            box.addEventListener('click', function() {
                if(box.bgColor == "")
                {
                    box.bgColor = '#'+Math.random().toString(16).substr(-6);
                }
                else
                {
                    box.bgColor = "";
                }
            });
        }
    }
}); 