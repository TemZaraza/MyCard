let firstlaunch = true;
let currentTheme = 'light';

Joke(showJoke = false);

// const element1 = document.getElementById('start-of-page');
// const yOffset = -10; 
// const y = element1.getBoundingClientRect().top + window.scrollY + yOffset; 
// Not what I want

function switchTheme() {
    if (currentTheme == 'light') {
        currentTheme = 'dark'
        document.getElementById('theme-switcher-btn').innerHTML = 'Dark'
        document.getElementById('theme-switcher-btn').style.color = 'white'
        document.getElementById('theme-switcher-btn').style.backgroundColor = 'black'
        document.getElementById('theme-switcher-btn').style.borderColor = 'black'
    } else {
        currentTheme = 'light'
        document.getElementById('theme-switcher-btn').innerHTML = 'Light'
        document.getElementById('theme-switcher-btn').style.color = 'black'
        document.getElementById('theme-switcher-btn').style.backgroundColor = 'white'
        document.getElementById('theme-switcher-btn').style.borderColor = 'white'
    }
}

function Joke(show) {
    if (!show) {
        console.log('hiding joke')

        document.getElementById('barbarian-joke').style.opacity = '0';
        document.getElementById('joke-button').innerHTML = firstlaunch ? 'Show joke :)' : 'Hiding joke...';
        document.getElementById('barbarian-joke').style.transition = 'opacity 0.7s 0.2s'
        setTimeout(() => {
            document.getElementById('joke-button').innerHTML = "Show joke :)";
            document.getElementById('barbarian-joke').style.display = 'none';
            document.getElementById('hr-one').style.opacity = '1';
            // window.scrollTo({top: y, behavior: 'smooth'});
            // window.scrollTo({top: document.getElementById('start-of-page').getBoundingClientRect().top + window.scrollY - 50, behavior: "smooth"});
            // Not what I want
        }, 800);
    } else {   
        console.log('showing joke');

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

firstlaunch = false;



// window.scrollTo({top: y, behavior: 'smooth'});