import { functionTypeAnnotation } from "@babel/types";

const animations = [
  {
    fallAway: `
   @keyframes fallAway {
       from {
           opacity: 0;
           transform: scale(1);
       }
   
       to {
           transform: scale(0);
           opacity: 1;
       }
   }`,

    flubber: `@keyframes flubber {
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
}`,

    dipset: `@keyframes dipSet {
        from {
            transform: translateY(0px);
            opacity: 1;
        }
    
        to {
            transform: translateY(300px);
            opacity: 0;
        }
    }`,
    cartWheel: `@keyframes cartWheel {
        from {
            transform: rotate(0deg);
        }
    
        to {
            transform: rotate(360deg);
        }
    }`
  }
];

export function getAnimations() {
  return animations;
}
