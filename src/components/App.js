import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div class="parent">
      <h1>Parent Component</h1>
      <ChildComponent showModal={showModal} handleClick={handleClick} />
    </div>
  );
}

export default App;
