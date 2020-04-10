import React, { useState } from "react";
import NavBar from "../components/nav/nav";
import Cookies from "js-cookie";
import ThreeScene from "../components/three";
const Contact = () => {
  const [activeUser] = useState(Cookies.get("name"));

  return (
    <div>
      <NavBar name={activeUser} />
      <h1>Contact</h1>
      <ThreeScene />
    </div>
  );
};

export default Contact;
