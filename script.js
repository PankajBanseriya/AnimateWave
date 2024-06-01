let cursor = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});


document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  blur.style.left = dets.x - 100 + "px";
  blur.style.top = dets.y - 100 + "px";
});

let links = document.querySelectorAll(".nav-links li");
links.forEach(element => {
  element.addEventListener("mouseenter", () => {
    cursor.style.scale = 2.5
    cursor.style.border = "1px solid #fff"
    cursor.style.backgroundColor = "transparent"
  })
  element.addEventListener("mouseleave", () => {
    cursor.style.scale = 1
    cursor.style.border = "0px"
    cursor.style.backgroundColor = "#00a6fb"
  })

});


gsap.to("#nav", {
  backgroundColor: "#00a6fb",
  duration: 0.5,
  height: "90px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    start: "top -26%",
    end: "top -75%",
    scrub: 2,
  },
});

gsap.from(".about-us img, .about-us-in", {
  y:50,
  opacity: 0,
  duration: 2,
  stagger: 0.7,
  scrollTrigger: {
    trigger: ".about us",
    scroller: "body",
    start: "top -60%",
    end: "top -58%",
    scrub: 2,
  }
})

gsap.from(".card", {
  scale: 0.6,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  }
})

gsap.from(".page3 h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page3 h1",
    scroller: "body",
    start: "top 80%",
    end: "top 75%",
    scrub: 2,
  }
})