import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movies from '../movies/Movies';
import Person from '../Person/Person';
import './Movie.css'

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [person, setPerson] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('./moviesData.JSON')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    const handleAddToStar = (movie) => {
        const newPerson = [...person, movie];
        const newDetails = [...details, movie];
        setPerson(newPerson);
        setDetails(newDetails);
        // console.log(movie);
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

                {
                    details.map(detail => <Person
                        key={detail.name}
                        detail={detail}
                        handleAddToStar={handleAddToStar}
                    ></Person>)
                }


            </div>

        </div>
    );
};

export default Movie;