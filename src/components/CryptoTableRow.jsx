const CryptoTableRow = ({index, symbol, name, image, current_price, price_change_percentage_24h,market_cap})=>{
    return (

        <>
        <div className={index%2===0?'bg-[#2d3748]': 'bg-gray-900'}>
            <span>{name}</span>
            <span>{symbol}</span
            ><span><img src={image} alt="coin-img"/> </span>
            <span>{current_price}</span>
            <span>{price_change_percentage_24h}</span>
            <span>{market_cap}</span>
        </div>
        </>
    )
}
export default CryptoTableRow;