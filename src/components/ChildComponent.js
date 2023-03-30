import React from "react";

function ChildComponent(props) {
  return (
    <div class="child">
      <h2>Child Component</h2>
      <button onClick={props.handleClick}>Show Modal</button>
      {props.showModal && (
        <div>
          <h3>Modal Content</h3>
          <p>This is the modal content.</p>
        </div>
      )}
    </div>
  );
}

export default ChildComponent;
