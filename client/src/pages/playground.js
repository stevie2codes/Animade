import React, { Component } from "react";
import "../sass/playground.scss";
// function compile() {
//   var html = document.getElementById("html");
//   var css = document.getElementById("css");
//   var js = document.getElementById("js");
//   var code = document.getElementById("code").contentWindow.document;

//   document.body.onkeyup = function() {
//     code.open();
//     code.writeln(
//       html.value +
//         "<style>" +
//         css.value +
//         "</style>" +
//         "<script>" +
//         js.value +
//         "</script>"
//     );
//     code.close();
//   };
// }
// compile();
const code = document.getElementById("code").contentWindow;
const Playground = () => {
  return (
    <React.Fragment>
      <div className="ideContainer">
        <textarea id="html" placeholder="HTML"></textarea>
        <textarea id="css" placeholder="CSS"></textarea>
        <textarea id="js" placeholder="JavaScript"></textarea>
        <button onClick={() => console.log(code)}></button>
        <iframe title="playground" id="code"></iframe>
      </div>
    </React.Fragment>
  );
};

export default Playground;
