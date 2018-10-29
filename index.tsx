import React, { useState } from "react";
import ReactDOM from "react-dom";

function Hello() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return <div>Hello</div>;
}

const root = document.createElement("div");
document.body.appendChild(root)
ReactDOM.render(<Hello />, root);
