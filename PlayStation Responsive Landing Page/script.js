let menulist = document.getElementById("menu-list");
menulist.style.maxHeight = "0px";

function tooglemenu(){
    if(menulist.style.maxHeight == "0px")
    {
        menulist.style.maxHeight = "130px";
    }
    else{
        menulist.style.maxHeight = "0px";
    }
}