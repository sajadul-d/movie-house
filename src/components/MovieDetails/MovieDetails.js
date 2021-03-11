import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {  FaDirections,FaFlag,FaBold,FaUserPlus,FaFacebook,FaTwitter,FaYoutube} from 'react-icons/fa';
 
import './MovieDetais.css'

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=870967436c1517d581daf3b245495790&language=en-US`;

        fetch(url)
        .then(res => res.json())
        .then(data => setMovie(data))
    });
   
     
    return (
        <div className=" bg-1 container my-5">
            <div className="row bg-2">
                
                <div className="col-md-6">
                    <h2 className="details">{movie.title}</h2>
                    <h4 className="details"><FaDirections/> Release Date : {movie.release_date}</h4>
                    <h4 className="details"><FaFlag/> Language : {movie.original_language}</h4>
                    <h4 className="details"> <FaBold/> Budget : {movie.budget} $</h4> 
                    
                    <h4 className="details"> <FaUserPlus/> Popularity : {movie.popularity} M</h4>
                    
                </div>
                <div className="col-md-6">
                    
                    <img className="img" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt=""/>
                </div>
             </div>       
             <p className="overview">{movie.overview}</p>
             
             <div className="social">
                 <a className="s-1" href="https://twitter.com/login?lang=en-gb"> <FaTwitter/></a>
                 <a className="s-1" href="https://www.facebook.com/"> <FaFacebook/></a>
                 
                 <a className="s-1" href="https://www.youtube.com/"> <FaYoutube/></a>
             </div>
              
        </div>
    );
};

export default MovieDetails;