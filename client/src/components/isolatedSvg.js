import React from "react";

function Isolated() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="iconIsolated"
      viewBox="0 0 300 300"
    >
      <path
        fill="transparent"
        d="M0 0H300V300H0z"
        className="logo-background-square"
      ></path>
      <defs>
        <linearGradient
          id="a"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="0%"
          gradientTransform="rotate(25)"
        >
          <stop offset="0%" stopColor="#8E42D3"></stop>
          <stop offset="100%" stopColor="#D46975"></stop>
        </linearGradient>
      </defs>
      <g
        fill="url(#a)"
        stroke="none"
        transform="matrix(3.00546 0 0 3.00546 -.273 -.273)"
      >
        <path d="M76.7 52.7c.6 0 1.1 0 1.7.1-.9-9.3-6.2-17.4-13.9-21.9-2.1 6-7.8 10.3-14.5 10.3s-12.4-4.3-14.5-10.3c-7.7 4.5-13 12.6-13.9 21.9.5-.1 1.1-.1 1.7-.1 8.5 0 15.4 6.9 15.4 15.4 0 4.3-1.8 8.2-4.6 11 4.6 3.1 10.1 4.9 16 4.9s11.4-1.8 16-4.9c-2.9-2.8-4.6-6.7-4.6-11-.1-8.5 6.8-15.4 15.2-15.4z"></path>
        <path d="M50 35.7c5.4 0 9.9-4.4 9.9-9.9S55.4 16 50 16s-9.9 4.4-9.9 9.9 4.5 9.8 9.9 9.8zM23.3 58.2c-5.4 0-9.9 4.4-9.9 9.9 0 5.4 4.4 9.9 9.9 9.9 5.4 0 9.9-4.4 9.9-9.9-.1-5.4-4.5-9.9-9.9-9.9zm53.4 0c-5.4 0-9.9 4.4-9.9 9.9 0 5.4 4.4 9.9 9.9 9.9 5.4 0 9.9-4.4 9.9-9.9 0-5.4-4.4-9.9-9.9-9.9z"></path>
      </g>
    </svg>
  );
}

export default Isolated;
