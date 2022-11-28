const tl = gsap.timeline({defaults: {duration: 0.75 , ease: "power1.out"}})

tl.fromTo('.huevo', {scale: 0}, {scale: 1 , ease: "elastic.out(1, 0.8)", duration: 2.5})
tl.fromTo('.huevo', {y:0}, {y:-15, yoyo: true, repeat: -1})
