document.addEventListener('DOMContentLoaded', function() {
    
    const lightswitch = document.getElementsByTagName('button')[0];

    lightswitch.addEventListener('click', toggleLights)
    
    function toggleLights() {
        const text = document.getElementsByTagName('h1')[0];
        const body = document.getElementsByTagName('body')[0];
    
        if (body.classList.contains("light")) {
            body.classList.remove("light");
            body.classList.add("dark");
            text.innerText = "Hey, who turned off the lights?";
            lightswitch.classList.remove("on");
            lightswitch.classList.add("off");
    
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
            text.innerText = "It's so bright in here!";
            lightswitch.classList.add("on");
            lightswitch.classList.remove("off");

        }
    }
})





