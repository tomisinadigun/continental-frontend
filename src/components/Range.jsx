import React, {useState} from 'react'

const Range = () => {
  let minPropertyPrice = 25000;
  let maxPropertyPrice = 25000000;
  minPropertyPrice = minPropertyPrice.toLocaleString();
  // maxPropertyPrice = maxPropertyPrice.toLocaleString();
  
  const [minPercent, setMinPercent] = useState(10)
  const [maxPercent, setMaxPercent] = useState(10)
  const [maxPrice, setMaxPrice] = useState(minPropertyPrice)
  
  const handleMinPriceRange = (e) => {
    const percentChange = parseInt(e.target.value)
    const price = percentChange / 100 * maxPropertyPrice
    
    setMaxPercent(percentChange)
    setMaxPrice(price.toLocaleString())
  }

  

  return (
    <div className='rangeForm'>
        <div className="price-range">
          <h3>Price Range</h3>
          <p>$ {maxPercent >= minPercent ? maxPrice : minPropertyPrice}</p>
        </div>
        <div className="rangeInput">
            <input type="range"
              value={maxPercent >= 10 ? maxPercent : minPercent}
              onChange={handleMinPriceRange}
              
            />
        </div>
    </div>
  )
}

export default Range