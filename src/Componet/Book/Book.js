import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const {bedType} = useParams();
    return (
        <div>
            <h1>lets go book {bedType}</h1>
            <Link to='/home'>what a defarent ?</Link>
        </div>
    );
};

export default Book;