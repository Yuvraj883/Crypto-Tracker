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

    const fetchAPI = (url)=>{
        fetch(url).then((res)=>{res.json()})
        .then((data)=>{
            setData(data);
            setIsLoading(false);
            

        })
        .catch((error)=>{
            console.log(error);
        })
        
    }

    useEffect(()=>{
        fetchAPI(API_URL); 

        setTimeout(()=>{
            console.log(data);
        },3000)
        // console.log(data); 

        
    }, []);


    return(
        <>
        <div className="w-[80%] mx-auto">
            <div className="text-[#A0AEC0] font-semibold flex flex-col text-xl justify-between items-ceter p-2 border-1 border-solid border-white">
              <div className="flex flex-row text-lg justify-between">
              <span>COIN</span>
                <span>SYMBOL</span>
                <span>CURRENT PRICE</span>
                <span>PRICE GRAPH</span>
                <span>ORDER VALUE</span>
                <span>MARKET DEPTH</span>
              </div>
              {
               isLoading && 
               <div className="text-center mt-10">Loading ...</div>
              }
              {
                !isLoading &&
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