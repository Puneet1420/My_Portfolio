const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//flat mouse pointer code and logic...........
let timeout;
function flatcircle (){
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

window.addEventListener("mousemove", function (details){
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(.8, 1.2, details.clientX - xprev);
    yscale = gsap.utils.clamp(.8, 1.2, details.clientY - yprev);
    
    xprev = details.clientX;
    yprev = details.clientY;

    circlemousefollower (xscale, yscale);
    this.setTimeout(function(){
      timeout =  document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`;
    },100)

});
}
flatcircle ();
// mouse follower
function circlemousefollower (xscale, yscale){
    window.addEventListener("mousemove",function(details){
    document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale},${yscale})`;
    })
}
circlemousefollower();

//when mouse will be hover the hide pic will be show..................
document.querySelectorAll(".elem").forEach(function(elem){
    let rotate = 0;
    let diffrot = 0;

    elem.addEventListener('mouseleave',function(details){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
        })
    })


    elem.addEventListener("mousemove", function(details){
       let diff = details.clientY-elem.getBoundingClientRect().top;
         diffrot =details.clientX -rotate;
         rotate = details.clientX;
         gsap.utils.clamp(-20,20, diff)
        gsap.to(elem.querySelector("img"),{ 
            opacity: 1,
            ease: Power3,
            top: diffrot,
            left: details.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot *0.5),

        });
    });
});




// gsap style for animation
let tl = gsap.timeline();

tl.from("#nav a, #nav h2",{
    y:30,
    duration:0.3,
    delay:0.3,
    opacity:0,
})
tl.from("#heading h1, #blocktext h1",{
    y:30,
    duration:0.3,
    delay:0.3,
    opacity:0,
    stagger:0.3
})
tl.from("#blocktext h3,#smallheading h3,#herofooter ",{
    y:-30,
    duration:0.3,
    delay:0.3,
    opacity:0,
    stagger:0.3,
});

// tl.to("#navoption",{
//     y:-30,
//     duration:0.3,
//     delay:0.3,
//     opacity:1,
//     scrollTrigger:"#navoption h3",
// });

//Dom Manipulation.............................
 let showmenu = document.querySelector("#navoption");
 let hidemenu = document.querySelector("#nav h2");
 hidemenu.onclick = () => {
    hidemenu.style.opacity = "0";
    showmenu.style.opacity = "1";
    // showmenu.style.transition=  "all ease 0.5s";
    
 }
 let closemenu = document.querySelector("#close");
 closemenu.onclick =() => {
    hidemenu.style.opacity = "1";
    showmenu.style.opacity = "0";
 }

 // lets talk button//
 let talk = document.getElementById("about");
 let lettalk = talk.querySelector("button");
 lettalk.onclick = () => {
    location.href = "https://www.instagram.com/a_king_is_always_be_a_king/";
 };
 //
 let youtube = document.querySelector("#subscribe h2");
 youtube.onclick = () => {
    location.href ="https://www.youtube.com/channel/UC_v6O9LrLmxGMr3ECOkeFYQ";
 }
 //
 let map = document.querySelector("#blocktext h3");
 map.onclick = () => {
    location.href ="https://goo.gl/maps/EMiaW9gPaAsWLZqG9";
 }

 let projects = document.querySelectorAll("#navoption h3");
 projects[0].onclick = () =>{
    location.href ="https://github.com/Puneet1420?tab=repositories";
 }
// date and time code in footer section------------------------------------------------------
let dclock = document.querySelectorAll("#left h3");
let d = new Date();
let time = (d.toLocaleTimeString('en-IN'));
setInterval(function(){
    let d = new Date();
    let time = (d.toLocaleTimeString('en-IN'));
    dclock[1].innerHTML = time;
    },1000);
//
//year

let year = d.getFullYear();
dclock[0].innerHTML = year;
 