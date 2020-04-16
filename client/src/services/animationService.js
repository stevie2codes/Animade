const animations = [
  {
    id: 1,
    name: "fade",
    type: { _id: "1b", type: "Exit" },
    code: `
    .fade{
      animation: fade 1s;
    }
    @keyframes fade {
        to {
          opacity: 0;
        }
      }`
  },
  {
    id: 2,
    name: "flubber",
    type: { _id: "1c", type: "Static" },
    code: `
    .flubber{
      animation: flubber 1s;
    }
    @keyframes flubber {
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
    name: "over",
    type: { _id: "1c", type: "Static" },
    code: `
    .over {
      animation: fall 1s;
    }
    @keyframes over {
      0% {
        transform: translateY(0) rotateX(0) scale(1);
        transform-origin: 50% 0%;
      }
      50% {
        transform: translateY(-50%) rotateX(-90deg) scale(2);
        transform-origin: 50% 50%;
      }
      100% {
        transform: translateY(-100%) rotateX(-180deg) scale(1);
        transform-origin: 50% 100%;
      }
    }`
  },
  {
    id: 4,
    name: "cartWheel",
    type: { _id: "1c", type: "Static" },
    code: `
    .cartWheel{
      animation: cartWheel 1s;
    }
    @keyframes cartWheel {
    
        to {
            transform: rotate(360deg);
        }
    }`
  },
  {
    id: 5,
    name: "flipX",
    type: { _id: "1c", type: "Static" },
    code: `
    .flipX{
      animation: flipX 1s;
    }
    @keyframes flipX { 
        to {
          transform: rotateX(360deg);
      
        }
      }`
  },
  {
    id: 6,
    name: "flipY",
    type: { _id: "1c", type: "Static" },
    code: `
    .flipY{
      animation: flipY 1s;
    }
    @keyframes flipY {
        to {
          transform: rotateY(360deg);
      
        }
      }`
  },
  {
    id: 7,
    name: "rise",
    type: { _id: "1b", type: "Exit" },
    code: `
    .rise{
      animation: rise 1s;
    }
    @keyframes rise {
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
    .rollLeft{
      animation: rollLeft 1s;
    }
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
    .rollRight{
      animation: rollRight 1s;
    }
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
    .spinOut{
      animation: spinOut 1s;
    }
    @keyframes spinOut {

        to {
          transform: rotate(360deg) scale(0);
          opacity: 0;
        }
      }`
  },
  {
    id: 11,
    name: "flubUp",
    type: { _id: "1a", type: "Enter" },
    code: `
    .flubUp{
      animation: flubUp 1s;
    }
   
@keyframes flubUp {

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }`
  },
  {
    id: 12,
    name: "bigIn",
    type: { _id: "1a", type: "Enter" },
    code: `
    .bigIn{
      animation: bigIn 1s;
    }
    @keyframes bigIn {
      from {
        opacity: 0;
        transform: scale3d(2, 2, 2)
      }
    
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1)
      }
    }`
  },
  {
    id: 13,
    name: "spinIn",
    type: { _id: "1a", type: "Enter" },
    code: `
    .spinIn{
      animation: spinIn 1s;
    }
    
    @keyframes spinIn {
      from {
        opacity: 0;
        transform: scale3d(2, 2, 2) rotate(360deg);
      }
    
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1) rotate(0deg);
      }`
  },
  {
    id: 14,
    name: "flipIn",
    type: { _id: "1a", type: "Enter" },
    code: `
    .flipIn {
      animation: flipIn 1s;
    }
    
    @keyframes flipIn {
      from {
        opacity: 0;
        transform: scale3d(2, 2, 2) rotateY(360deg);
      }
    
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1) rotateY(0deg);
      }
    }`
  },
  {
    id: 15,
    name: "fallIn",
    type: { _id: "1a", type: "Enter" },
    code: `
    .fallIn{
      animation: fallIn 1s;
    }
    @keyframes fallIn {

      from {
        opacity: 0;
        transform: translate3d(0, -3000px, 0);
      }
    
      60% {
        opacity: 1;
        transform: translate3d(0, 20px, 0);
      }
    
      75% {
        transform: translate3d(0, -10px, 0);
      }
    
      90% {
        transform: translate3d(0, 5px, 0);
      }
    
      to {
        transform: translate3d(0, 0, 0);
      }
    }`
  },
  {
    id: 16,
    name: "arriveLeft",
    type: { _id: "1a", type: "Enter" },
    code: `
    .arriveLeft {
       {
        cursor: pointer;
        animation: arriveLeft 1s;
      }
    }
    
    @keyframes arriveLeft {
    
      from {
        opacity: 0;
        transform: translate3d(-300px, 0, 0);
      }
    
      60% {
        opacity: 1;
        transform: translate3d(20px, 0, 0);
      }
    
      75% {
        transform: translate3d(0, 0, -3px);
      }
    
      90% {
        transform: translate3d(5px, 0, 0);
      }
    
      to {
        transform: translate3d(0, 0, 0);
      }
    }`
  },
  {
    id: 17,
    name: "arriveRight",
    type: { _id: "1a", type: "Enter" },
    code: `.arriveRight { animation: arriveRight 1s;}
    
    
    @keyframes arriveRight {
    
      from {
        opacity: 0;
        transform: translate3d(300px, 0, 0);
      }
    
      60% {
        opacity: 1;
        transform: translate3d(-20px, 0, 0);
      }
    
      75% {
        transform: translate3d(0, 0, 3px);
      }
    
      90% {
        transform: translate3d(-5px, 0, 0);
      }
    
      to {
        transform: translate3d(0, 0, 0);
      }
    }`
  }
];

export function getAnimations() {
  return animations;
}
