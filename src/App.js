import React, { useEffect } from 'react'; //import React object from 'react' library

import './App.css';
import SearchIcon from './search.svg';

//OMDB api key: ec451e8a

const API_URL = 'http://www.omdbapi.com?apikey=' + process.env.REACT_APP_API_KEY;

//below 'App' variable is whats called a react component
const App = () => {

    // below is how you implement an api call without any http protocol routing (get/post/put/delete), 
    // you will need express.js for http routing/REST, and usually done from a dedicated backend
    const searchMovies = async (title) => { 
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(()=>{
        searchMovies('Spiderman');
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
                />
            </div>

        </div>
    );
}

export default App;// export this script so that it can be called from other scripts