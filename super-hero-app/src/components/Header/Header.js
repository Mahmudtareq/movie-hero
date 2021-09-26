import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className=" bg-secondary p-3">
            <h1 className="p-3 text-center mb-2 text-white bg-gradient "> Bollywood Movie Star</h1>
            <h3 className="text-center text-primary">Total BollyWood Person :100</h3>
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Search bollyWood star" />

                <button class="btn btn-outline-info" type="button">Search</button>

            </div>
        </div>
    );
};

export default Header;