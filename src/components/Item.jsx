import React, { useState } from 'react'

const Item = () => {
    const [cursorOnItem, setCursorOnItem] = useState(false)

    const handleItemDetail = () => {
        if(!cursorOnItem) {
            setCursorOnItem(true)
        } 
    }

    const handleResetActive = () => {
        setCursorOnItem(false)
    }
    
  return (
    <div className="item" onMouseOver={handleItemDetail} onMouseLeave={handleResetActive}  >
        
        <div className='item-img'  >
            <img src="https://media.istockphoto.com/id/109350275/photo/modern-living-room-and-patio-next-to-swimming-pool.jpg?b=1&s=612x612&w=0&k=20&c=JVIeJdIKry9VUDVhi-EJkznRidFLOjyy4W4LMocv0U8=" alt=""  />
        </div>
        
        <div className="item-name"><p>Property Name</p></div>

        <div className={cursorOnItem ? "item-desc show-detail" : "item-desc hide-detail "}>
            
            <div className='info-item'>
                <span>Location:</span>
                <p>7520 Pembina Hw...</p>
            </div>
            <div className='info-item'>
                <span>City:</span>
                <p>Winnipeg</p>
            </div>
            <div className='info-item'>
                <span>Province:</span>
                <p>Manitoba</p>
            </div>
            <div className='info-item'>
                <span>Country:</span>
                <p>Canada</p>
            </div>
            <div className='info-item'>
                <span>Land Size:</span>
                <p>2,115 Sq. Ft.</p>
            </div>
            <div className='info-item'>
                <span>Price:</span>
                <p>$1,150,000</p>
            </div>
            <div className='other-info'>
                <p><span>4</span> Beds, <span>2.25</span> Bath, <span>Built-in:</span> 2023 </p>
            </div>

            <div className='decision-btns'>
                <div><button>Explore</button></div>
                <div><button>Hold</button></div>
                <div><button>wishlist</button></div>
            </div>
        </div>
    </div>
  )
}

export default Item