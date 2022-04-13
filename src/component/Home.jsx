import React from 'react'
import Produtos from './Produtos'

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NOVOS GAMES</h5>
                        <p className="card-text lead fs-2">TODAS AS NOVIDADES</p>
                    </div>
                </div>
            </div>
            <Produtos />
        </div>
    );
};

export default Home;