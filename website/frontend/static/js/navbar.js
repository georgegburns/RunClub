window.addEventListener('click', function(e){
    var navBar = document.getElementById("navBar");
    if (document.getElementById('menuBtn').contains(e.target) && navBar.classList.contains("close")){
            navBar.classList.remove("close");
        }
    else {
    navBar.classList.add("close");
    }
})