import React, { useEffect } from "react";
import { useReducer } from "react";
import reducer from "./reducer";

const API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d&locale=en";
let initialState ={
    isLoading:true,
    data: []
    
}
const Context = React.createContext(); 
const Provider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState )

    const fetchAPI = async (url)=>{
        const res = await fetch(url); 
        const APIData = await res.json;
        console.log("HI from context API page");
        // const dispatch = ()=>{
        //     dispatch({
        //         type:"SET_DATA", 
        //         payload: {
        //             data: APIData
        //         }
        //     })
        // }

        dispatch({
            type:"SET_DATA", 
            payload: {
                data: APIData
            }
        })
     
}

    useEffect(()=>{
        fetchAPI(API); 
    },[]);
    return (

        <Context.Provider value={state}></Context.Provider>
    )
}

export {Context, Provider}