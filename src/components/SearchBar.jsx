const SearchBar = ({search, setSearch}) => {
console.log(search);

    return (
        <>
        <div className="md:flex hidden flex-row justify-center items-center  m-10">
            <input onChange={(e)=>{setSearch(e.target.value)}} className=" py-2 bg-gray-300 w-[80%] rounded-xl px-2 focus:outline-blue-500 focus:border-2" placeholder="Search coin..."/>
        </div>

        {/* mobile view  */}
        <div className="md:hidden flex flex-row justify-center items-center  m-5">
            <input onChange={(e)=>{setSearch(e.target.value)}} className=" py-2  bg-gray-300 w-[90%] rounded-xl px-2 focus:outline-blue-500 focus:border-2 " placeholder="Search coin..."/>
        </div>

        </>
    )
}

export default SearchBar; 
