//NAVBAR CHANGING COLOR ON SCROLL
document.addEventListener('scroll', scrolling);
function scrolling() {
    if (window.scrollY > 20) {
        document.getElementById("nav").classList.add("nav-sticky");
        document.getElementById("lio").classList.add("sticky");


    } else {
        document.getElementById("nav").classList.remove("nav-sticky")
        document.getElementById("lio").classList.remove("sticky");
    }
}



//WRITING "WEB DEVELOPER"

//entering the letters
function insert() {
    var text = "Web developer";
    var letters = ""
    var lettersIndex = 0
    var switcH = false; //It check if the "|" is written

    const addLettersInterv = setInterval(() => {
        if (lettersIndex < text.length) {
            letters += text[lettersIndex];
            document.getElementById("span1").innerText = letters + "|";
            lettersIndex++
        }
        else {
            clearInterval(addLettersInterv);
            const switchInt = setInterval(() => {
                if (!switcH) {
                    document.getElementById("span1").innerText = letters;
                    switcH = !switcH
                }
                else {
                    document.getElementById("span1").innerText = letters + "|";
                    switcH = !switcH
                }
            }, 230)
            setTimeout(() => {
                clearInterval(switchInt); remove(text, letters, lettersIndex); return;
            }, 500)
        };
    }, 100);

}
insert()

//removing the letters
function remove(text, letters, lettersIndex) {
    letters = "";
    const RemLettersInterv = setInterval(() => {
        letters = text.slice(0, lettersIndex);
        document.getElementById("span1").innerText = letters + "|";
        if (lettersIndex > 0) { lettersIndex-- }
        else if (lettersIndex == 0) { insert(); clearInterval(RemLettersInterv); return }
    }, 100);

}

//CARDS CHANGING COLOR ON HOVER
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

//CLEARING THE FORM AFTER SUBMISSION

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}


//HIDE SCROLL TO THE TOP BUTTON
document.addEventListener('scroll', hideButton);
function hideButton() {
    if (window.scrollY > 870) {
        document.getElementById("back-to-top").setAttribute('style', 'display:visible');
    }

    else { document.getElementById("back-to-top").setAttribute('style', 'display:none') }
}

hideButton()

//ROTATE CV BUTTON AT CLICK
var cvdownload=0;
function rotate(){
    cvdownload++
    console.log(cvdownload);
    document.getElementById("Cv").classList.add("fa-flip");
    setTimeout(()=>{document.getElementById("Cv").classList.remove("fa-flip");},1000)
}


//IMAGE CAROUSEL

var mountainUrl= ["/images/mountain/mountain-river.jpeg","/images/mountain/mountain-morning.jpeg","/images/mountain/mountain-sunset.jpeg"]
var iMountain=0;

var iMoto=0;
var motoUrl=["/images/motorcicle/motocroos.jpeg","/images/motorcicle/motocross-wheelie.jpeg","/images/motorcicle/moto-mountain.jpeg"]

var iTrip=0;
var tripUrl=["/images/trips/firenze.jpeg","/images/trips/sardegna.jpeg","/images/trips/plane-trip.jpeg"]


function changeImage(){
   //MOUNTAIN 
   if(iMountain<2){iMountain++}else{
       iMountain=0;
   }
  console.log(iMountain)
   document.getElementById("mountain").setAttribute("style",`background-image: url("${mountainUrl[iMountain]}")`)

   //MOTO
   if(iMoto<2){iMoto++}else{
    iMoto=0;
    
}
document.getElementById("moto").setAttribute("style",`background-image: url("${motoUrl[iMoto]}")`)

//TRIP

if(iTrip<2){iTrip++}else{
    iTrip=0;
    
}
document.getElementById("trip").setAttribute("style",`background-image: url("${tripUrl[iTrip]}")`)
}

setInterval(changeImage,2000);