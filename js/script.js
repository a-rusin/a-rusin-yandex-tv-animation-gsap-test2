gsap.registerPlugin(ScrollTrigger);

gsap.to(".access", {
  scrollTrigger: {
    trigger: ".access",
    start: "top top",
    end: "4000 bottom",
    pin: true,
  },
});

const accesGroup = gsap.timeline({
  scrollTrigger: {
    trigger: ".access",
    start: "top top",
    end: "4000 bottom",
    scrub: true,
    markers: true,
  },
});

accesGroup
  .to(".content-group_01 .content-group__desription", { opacity: 0 })
  .to(".content-group_01 .content-group__title", { opacity: 0.5 }, "<")
  .fromTo(".content-group_02", { opacity: 0, top: "250px" }, { opacity: 1, top: "70px" }) // content - 02
  .fromTo(".content-group__image_02", { opacity: 0, top: "250px" }, { opacity: 1, top: "0px" }, "<") // content-img - 02
  .to(".content-group_02 .content-group__desription", { opacity: 0 })
  .to(".content-group_02 .content-group__title", { opacity: 0.5 }, "<")
  .fromTo(".content-group_03", { opacity: 0, top: "250px" }, { opacity: 1, top: "140px" }) // content - 03
  .fromTo(".content-group__image_03", { opacity: 0, top: "250px" }, { opacity: 1, top: "0px" }, "<") // content-img - 02
  .to(".content-group_03 .content-group__desription", { opacity: 0 })
  .to(".content-group_03 .content-group__title", { opacity: 0.5 }, "<")
  .fromTo(".content-group_04", { opacity: 0, top: "250px" }, { opacity: 1, top: "210px" }) // content - 04
  .fromTo(".content-group__image_04", { opacity: 0, top: "250px" }, { opacity: 1, top: "0px" }, "<"); // content-img - 02
