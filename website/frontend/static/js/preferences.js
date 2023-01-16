function toggleOn(){
    console.log("working")
    var body = document.documentElement;
    var toggleOn = document.getElementById("onToggle")
    if (body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode");
        toggleOn.classList.add("fa-toggle-on");
        toggleOn.classList.remove("fa-toggle-off");
    }
    else {
        body.classList.add("dark-mode");
        toggleOn.classList.remove("fa-toggle-on");
        toggleOn.classList.add("fa-toggle-off");
    }
}