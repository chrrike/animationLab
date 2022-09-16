var title = document.getElementsByClassName("title");
var header = document.getElementsByClassName("header");
var boxItems = document.getElementsByClassName("box");

init();

function init(){
    TweenMax.from(title,
        {duration: .5, delay: 0, alpha: 0, x:-10}
        );
    TweenMax.from(header,
        {duration: .5, delay: 0, alpha: 0, x:-10}
        );

    for(let i = 0; i<boxItems.length; i++){
        TweenMax.from(boxItems[i],
            {duration: .6, alpha: 0, x:-100, delay: i*.2}
            );
    }
}

function boxFocus(x){
    resetAnimation(boxItems[x]);
    boxItems[x].classList.remove("mouseLeft");
    boxItems[x].classList.add("mousedOver");
}

function boxLeave(x){
    resetAnimation(boxItems[x]);
    boxItems[x].classList.remove("mousedOver");
    boxItems[x].classList.remove("mouseLeft");
}

function resetAnimation(el){
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null;
}

function clicked(x){
    boxItems[x].classList.add("clicked");
    console.log("Test");
}