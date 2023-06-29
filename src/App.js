import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CryptoTable from './components/CryptoTable'
// import { Provider } from "./ContextAPI";

function App() {
const [search, setSearch] = useState('');
console.log(search);

  return (
   <>
    
    <div className="bg-gray-900 h-full ">
      <Navbar></Navbar>
      <SearchBar search={search} setSearch = {setSearch}></SearchBar>
      <CryptoTable search={search}></CryptoTable>
    
    </div>
  
   </>
  );
}

export default App;
