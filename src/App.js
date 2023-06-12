import React from "react";
import Navbar from "./components/Navbar";
import { Provider } from "./ContextAPI";

function App() {
  return (
   <>
    <Provider>
    <div className="bg-black">
      <Navbar></Navbar>
      hi
    </div>
    </Provider>
   </>
  );
}

export default App;
