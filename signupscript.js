
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

    seeTime();
    startDate = new Date();
    const minutes = Math.floor(spentTime/60);
    const seconds = spentTime%60;

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "stats");
    body.appendChild(newDiv);

    const stats = document.createElement("span");
    const clix = document.createTextNode("clicks: "+clicks);
    const keyz = document.createTextNode("keypresses: "+keypresses);
    const time = document.createTextNode("time spent: "+minutes+" minutes and "+seconds+" seconds");

    stats.appendChild(clix);
    stats.appendChild(document.createElement("br"));
    stats.appendChild(keyz);
    stats.appendChild(document.createElement("br"));
    stats.appendChild(time);
    newDiv.appendChild(stats);

    clicks = 0;
    keypresses = 0;
}


let startDate = new Date();
let spentTime = 0;

const focus = function() {
    startDate = new Date();
};

window.addEventListener('focus', focus);

const seeTime = function() {
    const endDate = new Date();
    spentTime = endDate.getTime() - startDate.getTime();
    spentTime = Math.round(spentTime/1000);
    console.log(spentTime);
    // elapsedTime contains the time spent on page in milliseconds
};



