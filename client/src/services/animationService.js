import React from "react";

// const animations = [
//   {
//     animation_name: "flubber",

//     animation_code: "@keyframes slideUp {
//         from {
//           transform: translateY(500px);
//           opacity: 0;
//         }

//         to {
//           transform: translateY(0px);
//           opacity: 1;
//         }
//       }"
//   }
// ];

const zoomIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0);
    }

    to {
        transform: scale(1);
        opacity: 1;
    
}`;
export default Ball = dropDown.div`
width: 200px;
height: 200px;
border-radius: 50%;
animation: ${zoomIn} 2s linear infinite`;
