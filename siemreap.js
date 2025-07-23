
  gsap.registerPlugin(ScrollTrigger);





document.addEventListener("DOMContentLoaded", function() {

const cards = [

 {id: "#card-1", endTranslateX: -2000, rotate: 45},

 {id: "#card-2", endTranslateX: -1000, rotate: -30},

 {id: "#card-3", endTranslateX: -2000, rotate: 45},

 {id: "#card-4", endTranslateX: -1500, rotate: -30},

];

 ScrollTrigger.create({

  trigger: ".wrapper-404",

  start: "top top",

  end: "+=900vh",

  scrub: 1.5,

  pin: true,

  onUpdate: (self) => {

   gsap.to(".wrapper-404", {

   x: `${-300 * self.progress}vw`,

   duration: 0.5,

   ease: "power3.out",

  });
 },
});



cards.forEach((card) => {
 ScrollTrigger.create({
  trigger: "card.id",
  start: "top top",
  end: "+=1200vh",
  scrub: 1.5,
  onUpdate: (self) => {
   gsap.to(card.id, {
   x: `${card.endTranslateX * self.progress}px`,
   rotate: `${card.rotate * self.progress * 2}`,
   duration: 0.5,
   ease: "power3.out",
})
 }
 })
})
});
// Animate background color of .outro
gsap.to(".outro", {
  backgroundColor: "white",
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".outro",
    start: "top 80%",       // Starts when .outro is 80% into view
    end: "top 30%",         // Ends closer to center
    scrub: 1.5,
  }
});

// Animate h1 inside .outro
gsap.to(".outro h1", {
  color: "black",
  opacity: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".outro",
    start: "top 75%",       // Slightly earlier than bg
    end: "top 30%",         // Sync finish time with bg
    scrub: 1.5,
  }
});

gsap.fromTo(".templeText",
  { y: 50, opacity: 0 },
  {
    y: -50,
    opacity: 1,
    fontSize: "30px",
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".section1",
      start: "top 80%",
      end: "top 30%",
      scrub: 1.7,
    }
  }
);
gsap.from(".temple1", {
  x: -200,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".temple1",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.7,
  }
});
gsap.from(".temple2", {
  x: 200,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".temple2",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.7,
  }
})

gsap.from(".temple3", {
  x: -200,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".temple3",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.7,
  }
})

gsap.from(".temple4", {
  x: 200,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".temple4",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.7,
  }
});
  gsap.from(".Kulen", {
  y: 100, // move up into place
  opacity: 0,
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top 80%",
    end: "center center",
    scrub: 1.5
  }
});

gsap.from(".Mountain", {
  y: -100, // move down into place
  opacity: 0,
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top 80%",
    end: "center center",
    scrub: 1.5
  }
});
gsap.from(".kulen-1", {
  X: -200, // move up into place
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".description-wrapper",
    start: "top 80%",
    end: "center center",
    scrub: 1.5
  }
});
gsap.from(".kulen-2", {
  X: 200, // move up into place
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".description-wrapper",
    start: "top 80%",
    end: "center center",
    scrub: 1.5
  }
})
  gsap.to(".background", {
        y: "-10%",
        ease: "none",
        scrollTrigger: {
            trigger: ".floatingVillage",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
        }
    });
   gsap
  .timeline({
    scrollTrigger: {
      trigger: ".trigger",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=150%"
    }
  })
  .to(".box", {
    force3D: true,
    duration: 1,
    xPercent: 100,
    ease: "power1.inOut",
    stagger: { amount: 1 }
  })
  .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
  .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);
gsap.from(".floatingWrapper", {
  y: 100, // move up into place
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".floatingWrapper",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
gsap.from(".floatingWrapper2", {
  y: 100, // move up into place
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".floatingWrapper2",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
gsap.from(".floatingWrapper3", {
  y: 100, // move up into place
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".floatingWrapper3",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
gsap.from(".floatingHeading", {
  y: 100,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".floatingHeading",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
gsap.from(".floatingTitle1", {
    y: 100,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".floatingTitle1",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
gsap.from(".floatingTitle2", {
    x: -100,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".floatingTitle2",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
gsap.from(".floatingTitle3", {
    x: 100,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".floatingTitle3",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
gsap.from(".floating1", {
   y: 100,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".floating1",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
gsap.from(".floating2", {
   y: 100,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".floating2",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
gsap.from(".floating3", {
   y: 100,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".floating3",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
gsap.to(".psImage", {
  scale: 1.05,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".psContainer",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.6
  }
});
gsap.to(".floatingImage1", {
  scale: 1.05,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".floating1",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.6
  }
})
gsap.to(".floatingImage2", {
  scale: 1.05,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".floating2",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.6
  }
})
gsap.to(".floatingImage3", {
  scale: 1.05,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".floating3",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.6
  }
})