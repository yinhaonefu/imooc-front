
function byId(id) {
    if(typeof id === "string"){
        return document.getElementById(id);
    }else{
        return id;
    }
}

function byClassName(className) {
    if(typeof className === "string"){
        return document.getElementsByClassName(className);
    }else{
        return className;
    }
}

var index = 0, timer = null, pics = byClassName("banner-slide"), len = pics.length;

function slideImg() {
    var main = byId("main");

    main.onmouseover = function () {
        if(timer){
            clearInterval(timer);
        }
    }

    main.onmouseout = function () {
        timer = setInterval(function () {
            console.log(index);
            index++;
            if(index == len){
                index = 0;
            }
            changeImg();
        }, 3000);
    }

    main.onmouseout();

}

function changeImg(){
    for(var i = 0; i < len; i++){
        pics[i].style.display = "none";
    }
    pics[index].style.display = "block";
}

slideImg();
