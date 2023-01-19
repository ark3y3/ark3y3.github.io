
        var keypresses = 0;
        var keys = document.getElementById("form");
        keys.addEventListener('keypress', function() {
            keypresses++;
            console.log("keypresses: "+keypresses);
        });

        var clicks = 0;
        var click = document.getElementById("body");
        click.addEventListener('click', function() {
            clicks++;
            console.log("clicks: "+clicks)
        })