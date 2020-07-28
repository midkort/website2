document.body.onkeyup = function(e) {
    //console.log(e)

    if(e.keycode == 68){
        document.body.classList.toggle("dark");
    }
}