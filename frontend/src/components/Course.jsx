import React from 'react'
import list from "../../public/list.json"
import Card from './Card';
import { Link } from 'react-router-dom';


export default function Course() {
    const filterData = list.filter((data)=>data.category!="Free");
    // console.log(filterData);

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 m-20'>
        <div className='mt-32 items-center justify-center text-center space-y-8 md:space-y-12'>
            <h1 className='text-2xl md:text-4xl '>
                We're delighted to have you
                <span className='text-pink-500'> here! :)</span>
            </h1>
            <p className='text-justify'>
                Explore a wide range of academic materials, from textbooks and guides to reference materials, tailored for every discipline, including engineering, literature, and more. Our curated selection ensures you find the perfect resources to excel in your studies. Stay ahead in your courses with our trusted and comprehensive collection!
            </p>
            <Link to="/">
            <button className='bg-pink-500 border-none px-4 py-1 rounded-md hover:bg-pink-600 mt-6'>
                Back
            </button>
            </Link>
        </div>
        <div className='mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-4'>
            {filterData.map((item)=>(
                        <Card item={item} key={item.id}/>
                      ))}
        </div>
    </div>
    </>
  )
}
