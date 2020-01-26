"use strict";

btn.addEventListener('click', function() {

    for(let i = 0; i < document.getElementsByTagName("tr").length; i++)
    {
        for(let j = 0; j < document.getElementsByTagName("tr")[i].cells.length; j++)
        {
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