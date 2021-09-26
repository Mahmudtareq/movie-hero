import React from 'react';
import './Movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';




const Movies = (props) => {
    // console.log(props)
    const { name, Occupation, age, bestMovie, img, rating } = props.movie;
    const element = <FontAwesomeIcon icon={faAlignRight} />
    return (

        <div className="card g-5 border-primary m-2 mb-3 shadow p-3">
            <div>
                <img src={img} className="card-img-top img-fluid  image-class rounded" alt="" />
            </div>

            <div className="card-body">
                <h5 className="card-title text-center">Name:{name}</h5>
                <h5 className="text-center">Occupation:{Occupation}</h5>
                <h6 className="text-center">Age:{age}</h6>
                <p className="text-center text-info">Best Movie : {bestMovie}</p>
                <p className="text-center">Rating : {rating}</p>

            </div>
            <button
                onClick={() => props.handleAddToStar(props.movie)}
                className=" btn btn-primary text-center"> {element}       Details</button>
        </div>


    );
};

export default Movies;