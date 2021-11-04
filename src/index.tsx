import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "",
          amount: 50,
          categoty: "",
        },
      ];
    });
    this.post();
    this.put();
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
