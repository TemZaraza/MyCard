let showJoke = false;
if (!showJoke) {
    document.getElementById('barbarian-joke').style.display = 'none';
}

function hideShowJoke() {
    if (showJoke) {
        document.getElementById('barbarian-joke').style.display = 'none';
        document.getElementById("joke-button").innerHTML = "Show joke :)";
    } else {
        document.getElementById('barbarian-joke').style.display = '';
        document.getElementById("joke-button").innerHTML = "Hide joke :|";
        document.getElementById('end-of-joke').scrollIntoView({behavior: 'smooth'}); 
        // Why smooth behaviour works only one time after first click?
    }
    showJoke = !showJoke;
}

//todo:
//- Make showing joke work smooth, even after 1 click
//- Change (update) main photo