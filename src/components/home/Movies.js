import React from "react";
import './Movies.css';
import { AiFillStar } from "react-icons/ai";


const Movies =({detail,setSingleData})=>{

    const handleClick=(detail)=>{
        setSingleData(detail);
    }

    const n='N/A'
    const dummy_url='https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg';
    const img_URL=`${detail.show.image?detail.show.image.medium:dummy_url }`

    return <div className="movie-card-container" onClick={()=>handleClick(detail)}>
            <div className="movie-image">
            
                <img src={img_URL}
                alt="All American"  width="230px" height="290px"/>
            <div className="movie-details">
                <div>
                <p className="movie-name">{detail.show.name}</p>
                <p className="movie-genres">
                    {detail.show.genres.map((item,index)=>{
                        return <span key={index}>&#x2022;{item}&nbsp;</span>
                    })}
                </p>
                </div>
                <div className="movies-rating">
                <AiFillStar size={"10px"} color="yellow"/> <p className="movie-rate__num">{detail.show.rating.average ?detail.show.rating.average:n}</p>
            </div>
            </div>
            
            </div>
    </div>
};

export default Movies;