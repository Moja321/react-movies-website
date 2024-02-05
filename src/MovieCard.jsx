import React from 'react';

const MovieCard = ({movie1}) => { //normally (props) is used but using deconstructuring, we can pass movie1 into props by doing ({moviee1})
    return (
        <div className="movie">
            <div>
                <p>{movie1.Year}</p>
            </div>
            <div>
                <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}/>
            </div>
            <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;