import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "../sass/playground.scss";
import InputLabel from "@material-ui/core/InputLabel";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/yonce.css";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/hint/anyword-hint";
import "codemirror/addon/hint/css-hint";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/display/fullscreen";

import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import NavBar from "../components/nav/nav";
import Cookies from "js-cookie";
import API from "../utils/API";

class Playground extends Component {
  constructor() {
    super();
    this.state = {
      html: "",
      css: "",
      js: "",
      activeUser: Cookies.get("name"),
      playmation_name: ""
    };
  }
  //saving the code to the playground_code database
  saveCode = () => {
    console.log(this);
    API.savePlaygroundCode({
      username: this.state.activeUser,
      playmation_name: this.state.playmation_name,
      html: this.state.html,
      css: this.state.css,
      js: this.state.js
    })
      .then(data => {})
      .catch(error => {
        console.log(error);
      });
  };

  componentDidUpdate() {
    this.runCode();
  }

  runCode = () => {
    const { html, css, js } = this.state;

    const iframe = this.iframe;
    const document = iframe.contentDocument;
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Playground</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}

        <script type="text/javascript">
          ${js}
        </script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };
  render() {
    return (
      <div>
        <div>
          <NavBar name={this.state.activeUser} />
        </div>
        <div className="App">
          <input
            type="text"
            className="userCodeInput"
            placeholder="Name Playmation"
            onChange={event =>
              this.setState({ playmation_name: event.target.value })
            }
          />
          <button className="saveCodeBtn" onClick={this.saveCode}>
            Save
          </button>

          <section className="playground">
            <div className="code-editor html-code">
              <div className="editor-header">HTML</div>
              <CodeMirror
                value={this.state.html}
                options={{
                  mode: "htmlmixed",
                  theme: "yonce",
                  lineNumbers: true,
                  lineWrapping: true,
                  autoCloseBrackets: true,
                  smartIndent: true,
                  autoCloseTags: true,
                  showHint: true
                }}
                onBeforeChange={(editor, data, html) => {
                  this.setState({ html });
                }}
              />
            </div>
            <div className="code-editor css-code">
              <div className="editor-header">CSS</div>
              <CodeMirror
                value={this.state.css}
                options={{
                  mode: "css",
                  theme: "yonce",
                  lineNumbers: true,
                  lineWrapping: true,
                  autoCloseBrackets: true,
                  smartIndent: true,
                  matchBrackets: true,
                  showHint: true,
                  spellcheck: true
                }}
                onBeforeChange={(editor, data, css) => {
                  this.setState({ css });
                }}
              />
            </div>
            <div className="code-editor js-code">
              <div className="editor-header">JavaScript</div>
              <CodeMirror
                value={this.state.js}
                options={{
                  mode: "javascript",
                  autoCloseBrackets: true,
                  theme: "yonce",
                  lineWrapping: true,
                  lineNumbers: true,
                  smartIndent: true,
                  autoCloseTags: true,
                  matchBrackets: true,
                  spellcheck: true
                }}
                onBeforeChange={(editor, data, js) => {
                  this.setState({ js });
                }}
              />
            </div>
          </section>
          <section className="result">
            <iframe
              title="result"
              className="iframe"
              ref={element => (this.iframe = element)}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Playground;
