import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "../axios"
import "../index"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title,fetchURL,isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results);
            console.log(request);
            return request;
        }
        fetchData();
    }, [fetchURL]);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    const handleClick1 = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(null,{tmdbId:movie.id})
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
         }
        
    };
  return (
    <div className='row'>
          <h2 className='row-title'>{ title}</h2> 
          <div className='row_posters'>
              {movies && movies.map((movie) => (
                  <img key={movie.id} onClick={()=>handleClick1(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
              ))}
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row