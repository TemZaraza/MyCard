let showJoke = false;
if (!showJoke) {
    document.getElementById('barbarian-joke').style.display = 'none';
}

function hideShowJoke() {
    console.log('showJoke = ', showJoke)
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