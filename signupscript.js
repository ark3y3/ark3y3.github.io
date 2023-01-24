
var body = document.getElementById("body");


var clicks = 0;
var click = document.getElementById("body");
click.addEventListener('click', function() {
    clicks++;
    console.log("clicks: "+clicks)
})

var keypresses = 0;
var keys = document.getElementById("form");
keys.addEventListener('keypress', function() {
    keypresses++;
    console.log("keypresses: "+keypresses);
});

function onSubmit() {
    var frm = document.getElementById("form");
    frm.reset();
    showStats();
}

function showStats(){
    var deleteDiv = document.getElementById("stats");
    deleteDiv.remove();

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "stats");
    body.appendChild(newDiv);

    const stats = document.createElement("span");
    const clix = document.createTextNode("clicks: "+clicks);
    const keyz = document.createTextNode("keypresses: "+keypresses);

    stats.appendChild(clix);
    stats.appendChild(document.createElement("br"));
    stats.appendChild(keyz);
    newDiv.appendChild(stats);

    clicks = 0;
    keypresses = 0;
}

