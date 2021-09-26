import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className=" bg-success bg-gradient p-3">
            <h1 className="p-3 text-center mb-2 text-white  "> Bollywood Heroes </h1>
            <p className="text-center fs-2">List of Bollywood Actor</p>
            <h3 className="text-center text-white">Total BollyWood Person :100</h3>
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Search bollyWood star" />
                <button class="btn btn-outline-info text-danger" type="button">Search</button>

            </div>
        </div>
    );
};

export default Header;