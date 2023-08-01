import React from 'react'

const Banner = () => {
  return (
    <div className="banner" style={{marginTop:"30px"}}>
        <div className="banner-main">
            <div className='banner-container'>
                <div className='image-container'>
                    <img src="https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg?auto=compress&cs=tinysrgb&w=" alt="" />
                </div>
                <div className='image-container'>
                    <img src="https://media.istockphoto.com/id/109350275/photo/modern-living-room-and-patio-next-to-swimming-pool.jpg?b=1&s=612x612&w=0&k=20&c=JVIeJdIKry9VUDVhi-EJkznRidFLOjyy4W4LMocv0U8=" alt="" />
                </div>
                <div className='image-container'>
                    <img src="https://media.istockphoto.com/id/1311356176/photo/modern-luxury-home-interior.jpg?b=1&s=612x612&w=0&k=20&c=lofy1V0jGmlB_YpDuTD1ZJ7_rLSeN3wAZhbzdxjCXPY=" alt="" />
                </div>
            </div>
            <div className='banner-text'>
                <div>
                    <h1>Home is where our story begins! A place of love, hope, and dreams. </h1>
                </div>
                <div><button>Find One Now</button></div>
            </div>
        </div>
    </div>
  )
}

export default Banner