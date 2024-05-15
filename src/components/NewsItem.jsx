import React from 'react'
import image from '../assets/news.jpg'

export const NewsItem = ({title , description ,src ,url}) => {
  return (

    
      <div  className="card text-center bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
        <img src={src?src:image} style={{ width: "100%"}} className="card-img-top" alt="..." />
        <div className="card-body" >
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"News"}</p>
            <a href={url} className="btn btn-primary" >Read More</a>
        </div>
      </div>
    
    
  )
}
