document.getElementsByClassName("more_filter")[0].onclick = function() {show()};


function show(){
    document.getElementById("hided").style.display = "block"
    document.getElementsByClassName("more_filter")[0].innerHTML = "Gizlət"
};

document.getElementsByClassName("more_filter")[0].ondblclick = function() {hide()};


function hide(){
    document.getElementById("hided").style.display = "none"
    document.getElementsByClassName("more_filter")[0].innerHTML = "Daha çox filtr"
};

