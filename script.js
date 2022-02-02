//NAVBAR CHANGING COLOR ON SCROLL
document.addEventListener('scroll', scrolling);
function scrolling() {
    if (window.scrollY > 20) {

        console.log(window.scrollY);
        console.log(document.documentElement.clientHeight);
        document.getElementById("nav").classList.add("nav-sticky")
    } else {
        document.getElementById("nav").classList.remove("nav-sticky")
    }
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


//WRITING "WEB DEVELOPER"

function insert() {
    var text = "Web developer";
    var cos = ""
    var cont = 0
    var complete = false;
    var switcH = false;

    if (!complete) {
        const addInter = setInterval(() => {
            if (cont < text.length) {
                cos += text[cont];
                document.getElementById("span1").innerText = cos + "|";
                cont++
            }
            else {
                clearInterval(addInter);
                const switchInt = setInterval(() => {
                    if (!switcH) {
                        document.getElementById("span1").innerText = cos;
                        switcH = !switcH
                    }
                    else {
                        document.getElementById("span1").innerText = cos + "|";
                        switcH = !switcH
                    }
                }, 230)
                setTimeout(() => {
                    clearInterval(switchInt); complete = true; remove(text, cos, cont, complete)
                }, 500)
            };
        }, 100);
    }
}
insert()

function remove(text, cos, cont, complete) {
    if (complete) {
        cos = "";
        console.log(complete);
        const RemInt = setInterval(() => {

            cos = text.slice(0, cont);
            document.getElementById("span1").innerText = cos + "|";
            if (cont > 0) { cont-- }
            else if (cont == 0) { complete = false; insert(), clearInterval(RemInt) }
        }, 100);
    }

}


