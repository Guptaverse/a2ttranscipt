import logo from "./logo.svg";
import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";
import { useState } from "react";
import Popup from "./components/Popup";
import { AnimatePresence } from "framer-motion";

function App() {
  const [popupState, setPopupState] = useState(true);
  return (
    <AnimatePresence>
      <div className="App">
        <Left />
        <Right setPopupState={setPopupState} />
        {popupState && <Popup setPopupState={setPopupState} />}
      </div>
    </AnimatePresence>
  );
}

export default App;
