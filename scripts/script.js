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
    }
    showJoke = !showJoke;
}

