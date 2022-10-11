import React from 'react'
import './Card.css'
import {MdOutlineReviews} from 'react-icons/md'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
export default function Card({id,name,job,image,text,prev,next,shuffle}) {
  return (
    <div className='card'>

        <img src={image} alt="person" className="image" />
        <div className="symbol"><MdOutlineReviews/></div>
        <div className="name">{name}</div>
        <div className="job">{job}</div>
        <div className="details">{text}</div>
        <div className="arrows">
            <button className="btn" onClick={prev}><AiOutlineLeft/></button>
            <button className="btn" onClick={next}><AiOutlineRight/></button>
        </div>
       
        <button className="suprise" onClick={shuffle}>Suprise</button>
    </div>
  )
}
