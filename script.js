function locomotiveinitialize(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotiveinitialize();



gsap.to(".bottle",{
  scrollTrigger: {
    trigger: ".bottle",
    scroller: "#main",
    start:"top 5%",
    end:"top -380%",
    pin:true,
    scrub: 1,
    // markers: true
},
rotate: -15,
stagger: 0.05,
})

gsap.to(".bottle",{
  scrollTrigger: {
    trigger: ".bottle",
    scroller: "#main",
    start:"top 4.8%",
    end:"top -56%",
    scrub: 1.2,
    pin:true,
    // markers: true
},  
scale: .4,
stagger: 0.05,
},)
