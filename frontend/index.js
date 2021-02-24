import React, {useState} from "react";
import ReactDOM from "react-dom";

const Index = () => {
  const [number, setnumber] = useState(1);
  return (
    <>
  <div>Hello React and django! {number} increased</div>
  <button onClick={() => setnumber(number + 1)}>Click me</button>
  </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));