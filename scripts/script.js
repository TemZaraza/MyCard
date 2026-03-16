let showJoke = false;

//Make joke hidden until show button is clicked

function hideJoke() {
    if (showJoke) {
        document.getElementById('barbarian-joke').style.display = 'none';
        document.getElementById("joke-button").innerHTML = "Show joke :)";
    } else {
        document.getElementById('barbarian-joke').style.display = '';
        document.getElementById("joke-button").innerHTML = "Hide joke :|";
    }
    showJoke = !showJoke;
}