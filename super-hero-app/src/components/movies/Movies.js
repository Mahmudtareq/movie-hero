import React from 'react';
import './Movies.css';

const Movies = (props) => {
    // console.log(props)
    const { name, Occupation, age, bestMovie, img, salary } = props.movie;
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
                <p className="text-center">Salary : {salary}</p>

            </div>
            <button
                onClick={() => props.handleAddToStar(props.movie)}
                className=" btn btn-primary text-center"> Details</button>
        </div>


    );
};

export default Movies;