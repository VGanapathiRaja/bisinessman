let mobileicon = document.getElementById("menutoggle");
let mobilemenu = document.getElementById("navbar");
mobileicon.addEventListener("click",()=>{
    mobilemenu.classList.toggle("open");
    if(mobilemenu.classList.contains("open")){
        mobileicon.classList.remove("bx-menu-left");
        mobileicon.classList.add("bx-x")
    }
    else{
        mobileicon.classList.add("bx-menu-left");
        mobileicon.classList.remove("bx-x")
    }
});