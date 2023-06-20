

const MovieInfo = ({ selectedMovie }) => {

    return(
        <div className="movie-info" style={{width:"20vw", backgroundColor: "tomato"}}>
        {
             selectedMovie && 
             (
                 <div>
                        <h1>{selectedMovie.title}</h1>
                         <p>{selectedMovie.year}</p>
                         <p>{selectedMovie.runtime}</p>
                         <p>{selectedMovie.genres}</p>
                         <img src={selectedMovie.poster} alt="{selectedMovie.title}" />
                 </div> 
             )
        }
 </div>
    )
}

export default MovieInfo