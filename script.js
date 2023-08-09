const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circlemousefollower (){
    window.addEventListener("mousemove",function(details){
    document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
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
