const React = require("react");
const ReactDom = require("react-dom");

const username = "Rajat";

const elem = (
  <div>
    <h1>Hello React</h1>
    <h2>
      {username}
      {console.log(username)}
    </h2>
  </div>
);

ReactDom.render(elem, document.getElementById("root"));
