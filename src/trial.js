import React from "react";



const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "Im Kartiik"),
  ]),
]);
export default parent 