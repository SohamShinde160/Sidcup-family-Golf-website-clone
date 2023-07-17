var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x+10 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y -150 +"px"
})

var h4 = document.querySelectorAll("nav ")
h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.border = " 0.5px solid white";
        crsr.style.backgroundColor = "transparent";
        crsr.style.transition = "all ease 0.2s";
        crsr.style.cursor = "pointer"

    })
        elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = " 0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    })
})

gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.3,
    height: "90",
    scrollTrigger: {
        Trigger: "nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",    
    scrollTrigger: {
        Trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -75%",
        scrub: 1,
    }
})
gsap.from(".about img , .info", {
    y: 50,
    opacity: 0,
    duartion: 1,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub:2
    }
})

gsap.from(".card", {
    scale:0.8,
    opacity: 0,
    duartion: 1,
    stagger:0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 85%",
        end: "top 75%",
        // markers:true,
        scrub:1
    }
})

gsap.from("#colon1", {
    x: -70,
    y: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        // markers:true,
        scrub:4
    }
})

gsap.from("#colon2", {
    x: 70,
    y: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 100%",
        end: "top 80%",
        // markers:true,
        scrub:4
    }
})
gsap.from(".page4 h1",{
    y: 70,
        scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 50%",
        end: "top 40%",
        // markers:true,
        scrub:4
    }
})