import React, { useEffect, useState } from 'react'; //import React object from 'react' library

import './App.css';
import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

//OMDB api key: ec451e8a

const API_URL = 'http://www.omdbapi.com?apikey=' + process.env.REACT_APP_API_KEY;

const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

//below 'App' variable is whats called a react component
const App = () => {

    //set useState() hook, the [] part is using destructuring
    const [movies, setMovies] = useState([]);//we pass in empty array as the states default value

    // below is how you implement an api call without any http protocol routing (get/post/put/delete), 
    // you will need express.js for http routing/REST, and usually done from a dedicated backend
    const searchMovies = async (title) => { 
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        //console.log(data.Search);

        //never do this:
        //movies = data.search;

        //instead, state can only be modified using the setState function:
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Batman');
    },[]);

    return (
        //<h1>App</h1> //this is jsx (javascript xml, its a combination of JS and markup language)

        <div className="app">
            <h1>MovieDatabase</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Batman"
                    onChange={()=>{}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{}}
                />
            </div>

            <div className="container">
                <MovieCard movie1={movie1} />
            </div>

        </div>
    );
}

export default App;// export this script so that it can be called from other scripts