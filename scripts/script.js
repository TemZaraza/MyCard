Joke(showJoke = false);

function Joke(show) {
    if (!show) {
        document.getElementById('barbarian-joke').style.opacity = '0';
        document.getElementById('joke-button').innerHTML = "Show joke :)";
        document.getElementById('start-of-page').scrollIntoView({behavior: 'smooth'});
        document.getElementById('barbarian-joke').style.transition = 'opacity 0.7s 0.2s'
    } else {        
        document.getElementById('barbarian-joke').style.opacity = '1';
        document.getElementById("joke-button").innerHTML = "Hide joke :|";
        document.getElementById('end-of-joke').scrollIntoView({behavior: 'smooth'}); 
        document.getElementById('barbarian-joke').style.transition = 'opacity 0.7s 0.2s'
    }
}

function hideShowJoke() {  
    showJoke = !showJoke;
    Joke(showJoke);
}

