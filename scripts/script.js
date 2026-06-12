Joke(showJoke = false);

function Joke(show) {
    if (!show) {
        document.getElementById('barbarian-joke').style.opacity = '0';
        document.getElementById('joke-button').innerHTML = "Hiding joke...";
        document.getElementById('barbarian-joke').style.transition = 'opacity 0.7s 0.2s'
        setTimeout(() => {
            document.getElementById('joke-button').innerHTML = "Show joke :)";
            document.getElementById('barbarian-joke').style.display = 'none';
            document.getElementById('hr-one').style.opacity = '1';
            // document.getElementById('center-of-page').scrollIntoView({behavior: 'smooth'}); - Figure out how to make smooth moving from joke
        }, 800);
    } else {        
        document.getElementById('hr-one').style.opacity = '0';
        document.getElementById('barbarian-joke').style.opacity = '1';
        document.getElementById('barbarian-joke').style.display = 'block';
        document.getElementById("joke-button").innerHTML = "Hide joke :|";
        document.getElementById('end-of-joke').scrollIntoView({behavior: 'smooth'}); 
        document.getElementById('barbarian-joke').style.transition = 'opacity 0.5s'
        document.getElementById('hr-one').style.transition = 'opacity 0.5s';
    }
}

function hideShowJoke() {  
    showJoke = !showJoke;
    Joke(showJoke);
}

