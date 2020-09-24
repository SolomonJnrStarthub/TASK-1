var button = document.getElementById("quit");
var section = document.getElementById("fixed-nav");
section.style.display="none";

var ufa = document.getElementById("letsee");
ufa.addEventListener('mouseover',function(){
    section.style.display="";
})

var button2 = document.getElementById("accept")
function ok(){
    section.style.display="none"
    ufa.addEventListener('mouseover',function(){
        section.style.display="none"
    })
}


//NO1
var minusa = document.getElementById("minusa");
minusa.style.display="none";
var minus1 = document.getElementById("minus1")
minus1.addEventListener('click',function(){
    minusa.style.display=""
    minus1.style.display="none"
})
minusa.addEventListener('click',function(){
    minusa.style.display="none"
    minus1.style.display=""
})
//END OF NO.1

//NO2
var minusb = document.getElementById("minusb");
minusb.style.display="none";
var minus2 = document.getElementById("minus2")
minus2.addEventListener('click',function(){
    minusb.style.display=""
    minus2.style.display="none"
})
minusb.addEventListener('click',function(){
    minusb.style.display="none"
    minus2.style.display=""
})
//END OF NO.2

//NO.3
var minusc = document.getElementById("minusc");
minusc.style.display="none";
var minus3 = document.getElementById("minus3");
minus3.addEventListener('click',function(){
    minusc.style.display=""
    minus3.style.display="none"
})
minusc.addEventListener('click',function(){
    minusc.style.display="none"
    minus3.style.display=""
})
//END OF NO.3

//NO.4
var minusd = document.getElementById("minusd");
minusd.style.display="none";
var minus4 = document.getElementById("minus4");
minus4.addEventListener('click',function(){
    minusd.style.display=""
    minus4.style.display="none"
})
minusd.addEventListener('click',function(){
    minusd.style.display="none"
    minus4.style.display=""
})
//END OF NO4

//NO.5
var minuse = document.getElementById("minuse");
minuse.style.display="none";
var minus5 = document.getElementById("minus5");
minus5.addEventListener('click',function(){
    minuse.style.display=""
    minus5.style.display="none"
})
minuse.addEventListener('click',function(){
    minuse.style.display="none"
    minus5.style.display=""
})
//END OF NO.5

//NO.6
var minusf = document.getElementById("minusf");
minusf.style.display="none";
var minus6 = document.getElementById("minus6");
minus6.addEventListener('click',function(){
    minusf.style.display=""
    minus6.style.display="none"
})
minusf.addEventListener('click',function(){
    minusf.style.display="none"
    minus6.style.display=""
})
//END OF NO.6

//NO.7
var minusg = document.getElementById("minusg");
minusg.style.display="none";
var minus7 = document.getElementById("minus7");
minus7.addEventListener('click',function(){
    minusg.style.display=""
    minus7.style.display="none"
})
minusg.addEventListener('click',function(){
    minusg.style.display="none"
    minus7.style.display=""
})
//END OF NO.7

//NO.8
var minush = document.getElementById("minush");
minush.style.display="none";
var minus8 = document.getElementById("minus8");
minus8.addEventListener('click',function(){
    minush.style.display=""
    minus8.style.display="none"
})
minush.addEventListener('click',function(){
    minush.style.display="none"
    minus8.style.display=""
})

var a = document.getElementById("a");
a.addEventListener('animationend',function(){
    a.style.display="none";
})