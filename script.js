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
    stagger:0.3

})
