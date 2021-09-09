window.onload=function(){
    var navbarContent=document.getElementById("navbarSupportedContent");
    var supportButton=document.getElementById("support-button");

    if(window.innerWidth<501){
        navbarContent.removeAttribute("class","navbarSupportedContent");
        navbarContent.setAttribute("class","navbar-collapse");
        supportButton.removeAttribute("class","btn btn-button bg-warning");
        supportButton.setAttribute("class","nav-link");
    }
}