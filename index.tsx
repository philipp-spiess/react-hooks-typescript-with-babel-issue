import React, { useState } from "react";
import ReactDOM from "react-dom";

function Hello() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return <div>Hello</div>;
}

ReactDOM.render(<Hello />, document.getElementById("root"));
