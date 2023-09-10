$(function($){
    particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 480.51896047731543
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 2,
            random: false,
            anim: {
              enable: true,
              speed: 170,
              size_min: 4,
              sync: false
            }
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 20,
            direction: "bottom-right",
            random: false,
            straight: true,
            out_mode: "out",
            bounce: false,
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
          },
        },
        retina_detect: true
      });
})