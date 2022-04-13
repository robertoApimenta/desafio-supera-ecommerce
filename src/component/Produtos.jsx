import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Produtos = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componenteMontado = true;

    useEffect(() => {
        const getProdutos = async () => {
            setLoading(true);
            const response = await fetch('./products.json', {
                headers: {
                    Accept: 'application/json'
                }
            });
            if (componenteMontado) {
                setData(await response.json());
                setLoading(false);
            }


            return () => {
                componenteMontado = false;
            }

        }

        getProdutos();

    }, []);

    console.log(data)

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const ShowProdutos = () => {
        return (
            <>
                {data.map((produto) => {
                    return (
                        <>
                            <div className="col-md-2 mb-4">
                                <div className="card h-100 text-center p-4" key={produto.id}>
                                    <img src={`/assets/${produto.image}`}  className="card-img-top" alt={produto.image} />
                                    <div className="card-body">
                                        <h5 className="card-title">{produto.name.substring(0, 20)}...</h5>
                                        <p className="card-text lead fw-bold">
                                            R${produto.price}
                                        </p>
                                        <Link to={`/produto/${produto.id}`} className="btn btn-outline-dark">Comprar</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )})};
            </>

        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 >Games</h1>
                        <hr></hr>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProdutos />}
                </div>
            </div>
        </div>
    )
}

export default Produtos;