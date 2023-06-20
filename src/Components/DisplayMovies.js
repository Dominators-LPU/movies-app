
import React,{useState} from "react"
import moviesData from "../staticData/moviesData"


const DisplayMovies = ({addSelectedMovie}) => {
    

    return(
        <div className="display-movies" style={{background: "green", width:"80vw"}}>
                {
                    moviesData.map((movie)=>
                    <div className="movie">
                        <img src={movie.poster} alt ="{movie.title" />
                        <h1>{movie.title}</h1>
                        <button onClick={()=>addSelectedMovie(movie)}>Movie Details</button>
                    </div>
                )
            }
            </div>
    )
  
}


export default DisplayMovies