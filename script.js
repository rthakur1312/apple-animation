LottieScrollTrigger({
    target: "#anim",
    path: "anim.json",
    speed: "medium",
    // scrub: 2 // seconds it takes for the playhead to "catch up"
    // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
   });

LottieScrollTrigger({
    target: "#animationWindow",
    path: "head.json",
    speed: "medium",
    // scrub: 2 // seconds it takes for the playhead to "catch up"
    // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
   });
   
   
   function LottieScrollTrigger(vars) {
     let playhead = {frame: 0},
       target = gsap.utils.toArray(vars.target)[0],
       speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
       st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
       animation = lottie.loadAnimation({
         container: target,
         renderer: vars.renderer || "svg",
         loop: false,
         autoplay: false,
         path: vars.path
       });
     for (let p in vars) { // let users override the ScrollTrigger defaults
       st[p] = vars[p];
     }
     animation.addEventListener("DOMLoaded", function() {
       gsap.to(playhead, {
         frame: animation.totalFrames - 1,
         ease: "none",
         onUpdate: () => animation.goToAndStop(playhead.frame, true),
         scrollTrigger: st
       });
       // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
       ScrollTrigger.sort();
       ScrollTrigger.refresh(); 
     });
     return animation;
   }









// var animation = bodymovin.loadAnimation({
//     container : document.getElementById("anim"),
//     renderer : 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'https://assets.codepen.io/35984/tapered_hello.json'
// })

// // LottieScrollTrigger({
// //     target: "#animationWindow",
// //     path: "https://assets.codepen.io/35984/tapered_hello.json",
// //     speed: "medium",
// //     scrub: 2 // seconds it takes for the playhead to "catch up"
// //     // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
// //    });
   
   
// //    function LottieScrollTrigger(vars) {
// //      let playhead = {frame: 0},
// //        target = gsap.utils.toArray(vars.target)[0],
// //        speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
// //        st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
// //        animation = lottie.loadAnimation({
// //          container: target,
// //          renderer: vars.renderer || "svg",
// //          loop: false,
// //          autoplay: false,
// //          path: vars.path
// //        });
// //      for (let p in vars) { // let users override the ScrollTrigger defaults
// //        st[p] = vars[p];
// //      }
// //      animation.addEventListener("DOMLoaded", function() {
// //        gsap.to(playhead, {
// //          frame: animation.totalFrames - 1,
// //          ease: "none",
// //          onUpdate: () => animation.goToAndStop(playhead.frame, true),
// //          scrollTrigger: st
// //        });
// //        // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
// //        ScrollTrigger.sort();
// //        ScrollTrigger.refresh(); 
// //      });
// //      return animation;
// //    }