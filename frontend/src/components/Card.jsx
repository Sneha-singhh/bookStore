import React from 'react'

export default function Card({item}) {
    // console.log(item);

  return (
    <>
 <div className='p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="book image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>Explore timeless classics and transformative reads, all available for free to fuel your curiosity and imagination</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline hover:bg-pink-600 hover:border-none">Buy now</div>
    </div>
  </div>
  </div>
 </div>
    </>
  )
}
