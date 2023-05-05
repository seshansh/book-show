import React, { useEffect, useState } from "react";
import "./Home.css";
import Movies from "./Movies";
import { Link,useNavigate } from "react-router-dom";

const Home = ({setSingleData}) => {

    const [data,setData]=useState([]);
    const navigate=useNavigate();

    const fetchData =()=>{
        return fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then((response)=>response.json())
        .then((res)=>setData(res))
        .catch((error)=>console.log(error));
    }

useEffect(()=>{
    fetchData();
    navigate('/')
},[]);

    return <div className="movie-list_outer">
        <h2>Recommended Shows</h2>
        <div className="movie-list">
            {data.map((item,index)=>{
               return   <Link to='/detail' key={index} className="home-link"><Movies detail={item} setSingleData={setSingleData} /></Link>
            })}
        </div>
    </div>
}

export default Home;