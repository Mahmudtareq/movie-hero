import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movies from '../movies/Movies';
import './Movie.css'

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [person, setPerson] = useState([]);

    useEffect(() => {
        fetch('./moviesData.JSON')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    const handleAddToStar = (movie) => {
        const newPerson = [...person, movie];
        setPerson(newPerson);
        console.log(movie);
    }

    return (
        <div className="movie-container">
            <div className="detials-container">

                {
                    movies.map(movie => <Movies
                        key={movie.name}
                        movie={movie}
                        handleAddToStar={handleAddToStar}
                    ></Movies>)
                }

            </div>
            <div className="cart-container">
                <Cart person={person}></Cart>

            </div>

        </div>
    );
};

export default Movie;