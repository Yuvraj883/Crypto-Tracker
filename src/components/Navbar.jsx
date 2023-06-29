import React from "react";

const Navbar = ()=>{
    return(
        <>
        <nav className="bg-[#171923] hidden md:flex items-center p-4 ">
            <h1 className="text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-red-600 to-purple-500">Crypto Tracker</h1>
        </nav>

        {/* mobile view  */}
        <nav className="bg-[#171923] md:hidden flex items-center p-4 ">
            <h1 className="text-xl  font-bold bg-gradient-to-r text-transparent bg-clip-text from-red-600 to-purple-500">Crypto Tracker</h1>
        </nav>
        </>
    )
}
export default Navbar; 