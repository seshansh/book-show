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
    const dummy_url='data:image/jpeg;base64,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';
    const img_URL=`${details.show.image?details.show.image.medium:dummy_url }`

    // console.log("BABA",details)


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
                <div className='middle-btn-container'>
                <button className='middle-btn' onClick={showHandler}>Book Show</button>
                {show ? <div className='booking-container'><BookTicket details={details}/> </div>: null}
                </div>
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