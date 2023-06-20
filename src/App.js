import React,{useState} from "react";
import DisplayMovies from "./Components/DisplayMovies";
import MovieInfo from "./Components/MovieInfo";

const App = () =>{
    let [selectedMovie, setSelectedMovie] = useState(null)

    console.log("selectedMovie", selectedMovie)

    return(
        <div className="App">
              <DisplayMovies  addSelectedMovie = {setSelectedMovie} />
              <MovieInfo  selectedMovie={selectedMovie}/>
        </div>
    )
}

export default App





