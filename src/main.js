(function(){
    console.log('asana chrome extension loaded');
    ["keydown", "keypress", "keyup"].forEach(function(s){
        document.addEventListener(s, function(e){
                if(e.keyCode == 229){ // while IME input is active, the (keydown) keycode become is always 229.
                    e.stopPropagation();
                    // console.log("stopPropergation! "+s +": "+e.keyCode);
                }
                // console.log(e);
        }, false)})

})();
