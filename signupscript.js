
var body = document.getElementById("body");         // this is the body element


var clicks = 0;
var click = document.getElementById("body");
click.addEventListener('click', function() {        // keep track of mouseclicks on the body element + log it
    clicks++;
    console.log("clicks: "+clicks)
})

var keypresses = 0;
var keys = document.getElementById("form");
keys.addEventListener('keypress', function() {      // keep track of keypresses in the form inputs + log it
    keypresses++;
    console.log("keypresses: "+keypresses);
});

function onSubmit() {                               // function for the submit button to make code more easily understandable;
    var frm = document.getElementById("form");
    showStats();                                    // call the stats function
    frm.reset();                                    // we just reset the form because we dont actually submit the form yet, this submit function can be added later in a complete form
}

function showStats(){
    var deleteDiv = document.getElementById("stats");   // delete the old div
    deleteDiv.remove();

    seeTime();                                          // function to keep track of the elapsed time
    startDate = new Date();                             // reset the start time
    const minutes = Math.floor(spentTime/60);           // calculate minutes, respectively the seconds.
    const seconds = spentTime%60;

    const newDiv = document.createElement("div");       // create a new div, we do this instead of changin elements in the div directly because we thought this was much easier
    newDiv.setAttribute("id", "stats");                 // change the id of the new div
    body.appendChild(newDiv);                           // add the div to the body

    const stats = document.createElement("span");                   // make elements for the text, we decided to use <span> tag
    const clix = document.createTextNode("clicks: "+clicks);        // create nodes for each field
    const keyz = document.createTextNode("keypresses: "+keypresses);
    const time = document.createTextNode("time spent: "+minutes+" minutes and "+seconds+" seconds");

    stats.appendChild(clix);                                        // the order here matters to create breakpoints in between the different values
    stats.appendChild(document.createElement("br"));                // this is 1 breakpoint
    stats.appendChild(keyz);
    stats.appendChild(document.createElement("br"));                // second breakpoint
    stats.appendChild(time);
    newDiv.appendChild(stats);

    clicks = 0;                                                     // reset the values
    keypresses = 0;

    calcLength();
}


let startDate = new Date();                                         // the starting time
let spentTime = 0;                                                  // the spent time

function seeTime() {                                        // function to calculate spent time + log it
    const endDate = new Date();
    spentTime = endDate.getTime() - startDate.getTime();            // function to calculate the time
    spentTime = Math.round(spentTime/1000);                         // from milliseconds to seconds, and remove all decimals with Math.round()
    console.log("time: " + spentTime);
};



function calcLength(){                                              // calculate the total amount of characters
                                                                    // we just add all element lengths individually  
    
    var idLength = document.getElementById('userid').value;
    console.log(idLength.length);
}





