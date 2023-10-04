import React from "react";
import {useNavigate} from 'react-router-dom';
function Error () {
    const navigate = useNavigate();
    return (
        <>
        <div className="container text-center">
            <h1 className="display-4 text-danger text-center my-5">401 page not found</h1>
            <button className="btn btn-outline-primary" onClick={() => navigate('/')}> Back To Home </button>
        </div>
        </>
    )
};

export default Error;
