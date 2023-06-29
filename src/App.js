import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CryptoTable from './components/CryptoTable'
// import { Provider } from "./ContextAPI";

function App() {
  return (
   <>
    
    <div className="bg-gray-900 h-full ">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <CryptoTable></CryptoTable>
    
    </div>
  
   </>
  );
}

export default App;
