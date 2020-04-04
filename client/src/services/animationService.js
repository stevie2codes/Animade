const animations = [
  {
    id: 1,
    name: "fade",
    code: `@keyframes fade {
        to {
          opacity: 0;
        }
      }`
  },
  {
    id: 2,
    name: "flubber",
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
    code: `@keyframes cartWheel {
    
        to {
            transform: rotate(360deg);
        }
    }`
  },
  {
    id: 5,
    name: "flipX",
    code: `@keyframes flipX { 
        to {
          transform: rotateX(360deg);
      
        }
      }`
  },
  {
    id: 6,
    name: "flipY",
    code: `@keyframes flipY {
        to {
          transform: rotateY(360deg);
      
        }
      }`
  },
  {
    id: 7,
    name: "rise",
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
