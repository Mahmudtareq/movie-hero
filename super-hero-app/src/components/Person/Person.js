import React from 'react';
import './Person.css';

const Person = (props) => {
    const { name, img, age, rating } = props.detail;
    return (
        <div className="card p-3 m-2 shadow bg-secondary">
            <img className="img-fluid rounded-4 image1-class" src={img} alt="" />
            <h5 className="mt-2 text-info"> Name : {name}</h5>
            <p className="text-center "><small>  Age : {age}</small>       <small>Rating : {rating}</small></p>
            <button className="btn btn-success">Show Now</button>
        </div>
    );
};

export default Person;