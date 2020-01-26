"use strict";
btn.addEventListener('click', function () {
    let wrap = document.getElementById("table-div");

    wrap.addEventListener('click', function (event) {
        let td = event.target.closest("td");

        if (!td) return;
        if (!wrap.contains(td)) return;

        if (td.bgColor == "" || td.bgColor == null) {
            td.bgColor = '#' + Math.random().toString(16).substr(-6);
        }
        else {
            td.bgColor = "";
        }
    });
}); 