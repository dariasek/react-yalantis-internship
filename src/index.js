import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let dataUrl = "https://yalantis-react-school-api.yalantis.com/api/task0/users";

fetch(dataUrl)
  .then((response) => response.json())
  .then((data) => {
    ReactDOM.render(
      <React.StrictMode>
        <App data={data} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  });

serviceWorker.unregister();
