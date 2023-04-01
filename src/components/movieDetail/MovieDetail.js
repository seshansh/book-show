import React, { useEffect, useState } from 'react'
import "./MovieDetail.css";
import { Link, useNavigate } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import BookTicket from '../bookTicket/BookTicket';


const Genres = ({ name }) => {
    return <p className='right-genres'>{name}</p>
}



const MovieDetail = ({details}) => {
    const [show, setShow] = useState(false);

    const showHandler=()=>{
        setShow(!show);
    };

    const navigate=useNavigate();

    const n='N/A';
    const hour=Math.floor((details.show.weight)/60);
    const mint=(details.show.weight)%60;
    const dummy_url='https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg';
    const img_URL=`${details.show.image?details.show.image.medium:dummy_url }`

    console.log("BABA",details)


    useEffect(()=>{
        if(!details){
            navigate('/');
        }
    })

    return (
        <div className='detail-container'>
            <div className='left-container'>
                <img src={img_URL}  alt='All American' />
            </div>
            <div className='middle-container'>
                <div className='middle-home'>
                    <Link to='/' className='middle-home-link'>Home</Link>
                </div>
                <h1>{details.show.name}</h1>
                <div className='middle-time'>
                    <p>Show&nbsp;&nbsp;</p>
                    <p>&#x2022; {hour}h {mint}m&nbsp;&nbsp;</p>
                    <p>&#x2022; {details.show.language}</p>
                </div>
                <button className='middle-btn' onClick={showHandler}>Book Show</button>
                {show ? <div className='booking-container'><BookTicket details={details}/> </div>: null}
                <div className='middle-summery'dangerouslySetInnerHTML={ {__html:details.show.summary}}></div>
            </div>
            <div className='right-container'>
                <p><b>Rating: </b><AiFillStar color='yellow' /> {details.show.rating.average ?details.show.rating.average:n}</p>
                <p><b>Language: </b> {details.show.language}</p>
                <p><b>Schedule: </b> {details.show.schedule.days[0]} at {details.show.schedule.time}</p>
                
                <p><b>Premiered: </b> {details.show.premiered}</p>
                <p><b>Duration: </b> {hour}h {mint}m</p>
                <p><b>Status: </b> {details.show.status}</p>
                <hr />
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}><b>Genres: </b>{details.show.genres.map((item,index) => <Genres key={index} name={item} />)} </div>
            </div>
        </div>
    )
}

export default MovieDetail;