const animations = [
  {
    id: 1,
    name: "fade",
    type: { _id: "1b", type: "Exit" },
    code: `@keyframes fade {
        to {
          opacity: 0;
        }
      }`
  },
  {
    id: 2,
    name: "flubber",
    type: { _id: "1c", type: "Static" },
    code: `@keyframes flubber {
        from {
            transform: scale3d(1, 1, 1);
        }
    
        30% {
            transform: scale3d(1.25, 0.75, 1);
        }
    
        40% {
            transform: scale3d(0.75, 1.25, 1);
        }
    
        50% {
            transform: scale3d(1.15, 0.85, 1);
        }
    
        65% {
            transform: scale3d(0.95, 1.05, 1);
        }
    
        75% {
            transform: scale3d(1.05, 0.95, 1);
        }
    
        to {
            transform: scale3d(1, 1, 1);
        }
    }`
  },
  {
    id: 3,
    name: "fall",
    type: { _id: "1b", type: "Exit" },
    code: `@keyframes fall {
        from {
            transform: translateY(0px);
            opacity: 1;
        }
    
        to {
            transform: translateY(300px);
            opacity: 0;
        }
    }`
  },
  {
    id: 4,
    name: "cartWheel",
    type: { _id: "1c", type: "Static" },
    code: `@keyframes cartWheel {
    
        to {
            transform: rotate(360deg);
        }
    }`
  },
  {
    id: 5,
    name: "flipX",
    type: { _id: "1c", type: "Static" },
    code: `@keyframes flipX { 
        to {
          transform: rotateX(360deg);
      
        }
      }`
  },
  {
    id: 6,
    name: "flipY",
    type: { _id: "1c", type: "Static" },
    code: `@keyframes flipY {
        to {
          transform: rotateY(360deg);
      
        }
      }`
  },
  {
    id: 7,
    name: "rise",
    type: { _id: "1b", type: "Exit" },
    code: `@keyframes rise {
        from {
          transform: translateY(0px);
          opacity: 1;
        }
      
        to {
          transform: translateY(-300px);
          opacity: 0;
        }
      }`
  },
  {
    id: 8,
    name: "rollLeft",
    type: { _id: "1b", type: "Exit" },
    code: `
    @keyframes rollLeft {
      from {
        opacity: 1;
      }
    
      to {
        transform: translateX(-300px) rotate(-360deg);
        opacity: 0;
      }
    }`
  },
  {
    id: 9,
    name: "rollRight",
    type: { _id: "1b", type: "Exit" },
    code: `
    @keyframes rollRight {
      from {
        opacity: 1;
      }
    
      to {
        transform: translateX(300px) rotate(360deg);
        opacity: 0;
      }
    }`
  },
  {
    id: 10,
    name: "spinOut",
    type: { _id: "1b", type: "Exit" },
    code: `
    @keyframes spinOut {

        to {
          transform: rotate(360deg) scale(0);
          opacity: 0;
        }
      }`
  }
];

export function getAnimations() {
  return animations;
}
