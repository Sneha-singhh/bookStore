import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Freebook() {
  const [book,setBook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try {
                const res = await axios.get("http://localhost:4001/book");                
                const data = res.data.filter((data)=>data.category==="Free");
                // console.log(data);                
                setBook(data);

            } catch (error) {
                console.log("Error : ", error);
                
            }
        };
        getBook();
    },[])
  // const filterData = list.filter((data)=>data.category==="Free");
  // // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mb-6'>
       <div className='mb-4'>
       <h2 className='text-xl font-semibold'>
        Free offered courses
      </h2>
      <p className='text-justify'>
       Explore our Free Books section and dive into a world of knowledge without spending a dime! From timeless classics to insightful guides, discover your next great read today.
      </p>
       </div>
       <div>
         <Slider {...settings}>
          {/* {filterData.map((item)=>(
            <Card item={item} key={item.id}/>
          ))} */}

          {book.map((item)=>(
            <Card item={item} key={item.id}/>
          ))}
         </Slider>
       </div>
    </div>
    </>
  )
}
