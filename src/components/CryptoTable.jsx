import { useState, useEffect} from "react";
import CryptoTableRow from "./CryptoTableRow";


const CryptoTable = ()=>{
const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d&locale=en";
// const [price, setPrice] = useState(null); 
// const [symbol, setSymbol] = useState(null);
// const [priceGraph, setPriceGraph] = useState(null); 
// const [orderVolume, setOrderVolume] = useState(null); 
// const [marketDepth, setMarketDepth] = useState(null);
const [isLoading, setIsLoading]  = useState(true);
const [data, setData] = useState([]);

   

    useEffect(()=>{
       async function fetchAPI (url){
        try{
            const response = await fetch(url);
           if(!response.ok){
            throw new Error("An error occured!!"); 
           } 
            const d = await response.json();
            setData(d); 
            // console.log(data);
            setIsLoading(false);

           }
           catch(error){
            console.log("Error: "+ error);
           }
           
            
        }
        fetchAPI(API_URL); 

        setTimeout(()=>{
            console.log(data);
        },3000)
        // console.log(data); 

        
    }, []);

    if(isLoading){
               return (
                <div className="text-center text-gray-400 text-xl p-4 m-4 mt-10">Loading ...</div>

               )
    }
    return(
        <>
        <div className="w-[90%] mx-auto md:block hidden">
            <div className="text-[#A0AEC0] font-semibold flex flex-col text-xl justify-between items-ceter  border-[.5px] border-solid border-white">
                <div className="flex flex-row text-lg justify-between p-2">
              <span className="w-[20%] p-2">COIN</span>
                <span  className="w-[10%] ">SYMBOL</span>
                <span  className="w-[15%] ">CURRENT PRICE</span>
                <span  className="w-[10%]">PRICE GRAPH</span>
                <span  className="w-[15%]">ORDER VALUE</span>
                <span  className="w-[15%]">MARKET DEPTH</span>
              </div>
            {
                   data.map((obj, index)=>(
                    <CryptoTableRow {...obj} index={index} key={index}/> 
                ))
            }
               
              

            </div>
            </div>

            {/* Mobile View */}
            <div className="w-[98%] mx-auto md:hidden block ">
            <div className="text-[#A0AEC0] font-semibold flex flex-col text-md justify-between items-ceter  border-[.5px] border-solid border-white">
                <div className="flex flex-row text-base justify-between p-2">
              <span className="w-[25%] mx-1">COIN</span>
                <span  className="w-[15%] mx-1 ">SYMBOL</span>
                <span  className="w-[25%] mx-1 ">CURRENT PRICE</span>
                <span  className="w-[20%] mx-1">PRICE GRAPH</span>
                {/* <span  className="w-[15%]">ORDER VALUE</span>
                <span  className="w-[15%]">MARKET DEPTH</span> */}
              </div>
            {
                   data.map((obj, index)=>(
                    <CryptoTableRow {...obj} index={index} key={index}/> 
                ))
            }
               
              

            </div>
            </div>

        </>
    )
}
export default CryptoTable;