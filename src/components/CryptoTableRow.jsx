const CryptoTableRow = ({index, symbol, name, image, current_price, price_change_percentage_24h,market_cap, total_volume})=>{
    return (

        <>
        <div className={index%2===0?'bg-[#2d3748] text-lg md:flex hidden md:flex-row justify-between items-center px-2 py-2': 'bg-gray-900 text-lg hidden md:flex md:flex-row justify-between items-center p-2'}>
            <span className="w-[20%]"><img src={image} className="h-8 w-auto inline" alt="coin-img"/> {name}</span>
            <span className="w-[10%]">{symbol}</span>
            <span className="w-[15%]">{current_price.toLocaleString('en-IN', {
                currency:'INR',
                style:'currency',
                maximumFractionDigits:2
            })}</span>
            <span  className={price_change_percentage_24h.toFixed(2)<0?"w-[10%] text-red-700":"w-[10%] text-green-700"}>{price_change_percentage_24h.toFixed(2)}%</span>
            <span className="w-[15%]">{total_volume.toLocaleString('en-IN')} </span>

            <span  className="w-[15%]">{market_cap.toLocaleString('en-IN')}</span>

        </div>

        {/* Mobile View  */}
        <div className={index%2===0?'bg-[#2d3748] md:hidden flex flex-row justify-between text-sm items-center p-2': 'bg-gray-900 md:hidden flex flex-row justify-between text-sm items-center p-2'}>
            <span className="w-[25%] "><img src={image} className="h-8 w-auto inline" alt="coin-img"/> {name}</span>
            <span className="w-[15%] flex flex-row justify-start">{symbol}</span>
            <span className="w-[25%] flex flex-row justify-start">{current_price.toLocaleString('en-IN', {
                currency:'INR',
                style:'currency',
                maximumFractionDigits:2
            })}</span>
            <span  className={price_change_percentage_24h.toFixed(2)<0?"w-[20%] text-red-700 text-center p-2 flex flex-row justify-start":"w-[20%] text-center text-green-700 flex flex-row justify-start "}>{price_change_percentage_24h.toFixed(2)}%</span>
            {/* <span className="w-[15%]">{total_volume.toLocaleString('en-IN')} </span>

            <span  className="w-[15%]">{market_cap.toLocaleString('en-IN')}</span> */}

        </div>

        </>
    )
}
export default CryptoTableRow;