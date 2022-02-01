document.addEventListener('scroll', scrolling);
function scrolling(){
    let navBarHeight=window.innerHeight;
   if( document.documentElement.clientHeight>= navBarHeight){
      
       console.log(navBarHeight);
       console.log(document.documentElement.clientHeight);
       document.getElementById("nav").style.setProperty("background-color", "crimson");
   }
}


var card1AddSrcTimeOut;
var card1RemoveSrcTimeOut;
var card2AddSrcTimeOut;
var card2RemoveSrcTimeOut;
var card3AddSrcTimeOut;
var card3RemoveSrcTimeOut;

function hover(element) {
    if (element.classList.contains("card1")) {
        clearTimeout(card1RemoveSrcTimeOut);
        let image = element.firstElementChild;
        function changesrc() { image.setAttribute('src', '/images/skills/soft skills/white/teamwork.png') };
        card1AddSrcTimeOut = setTimeout(changesrc, 60);
    }

    else if (element.classList.contains("card2")) {
        clearTimeout(card2RemoveSrcTimeOut);
        let image = element.firstElementChild;
        function changesrc() { image.setAttribute('src', '/images/skills/soft skills/white/problem-solving.png') };
        card2AddSrcTimeOut = setTimeout(changesrc, 60);
    }
    else if (element.classList.contains("card3")) {
        clearTimeout(card3RemoveSrcTimeOut);
        let image = element.firstElementChild;
        function changesrc() { image.setAttribute('src', '/images/skills/soft skills/white/communication.png') };
        card3AddSrcTimeOut = setTimeout(changesrc, 60);
    };
}

function unhover(element) {
    if (element.classList.contains("card1")) {
        clearTimeout(card1AddSrcTimeOut);
        let image = element.firstElementChild
        function removesrc() { image.setAttribute('src', '/images/skills/soft skills/crimson/teamwork.png') };
        card1RemoveSrcTimeOut = setTimeout(removesrc, 70);

    }

    else if (element.classList.contains("card2")) {
        clearTimeout(card2AddSrcTimeOut);
        let image = element.firstElementChild
        function removesrc() { image.setAttribute('src', '/images/skills/soft skills/crimson/problem-solving.png') };
        card2RemoveSrcTimeOut = setTimeout(removesrc, 70);
    }
    else if (element.classList.contains("card3")) {
        clearTimeout(card3AddSrcTimeOut);
        let image = element.firstElementChild
        function removesrc() { image.setAttribute('src', '/images/skills/soft skills/crimson/communication.png') };
        card3RemoveSrcTimeOut = setTimeout(removesrc, 70);
    };
}