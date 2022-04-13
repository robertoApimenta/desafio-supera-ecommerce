import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCarrinho } from '../redux/action';
import Skeleton from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';

const Produto = () => {

    const { id } = useParams();
    const [produto, setProduto] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduto = (produto) => {
        dispatch(addCarrinho(produto));
    };

    useEffect(() => {
        const getProdutos = async () => {
            setLoading(true);
            const response = await fetch('../products.json', {
                headers: {
                    Accept: 'application/json'
                }
            });
            const data = await response.json();
            var cont = 0;
            while (cont < data.length) {
                if (data[cont].id.toString() === id) {
                    setProduto(data[cont]);
                }
                cont++;
            }
            setLoading(false);
        }
        getProdutos();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
            </>
        )
    }

    const ShowProduto = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={`../assets/${produto.image}`} alt={produto.image} width="300" height="300" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {produto.name}
                    </h4>
                    <p className="lead fw-bolder">
                        Score {produto.score}
                        <i className="fa fa-star"></i>
                    </p>
                    <h1 className="display-5">R${produto.price}</h1>
                    <button onClick={() => addProduto(produto)} className="btn btn-outline-dark px-4 py-2" >
                        Adicionar ao carrinho
                    </button>
                    <Link to="/carrinho" className="btn btn-outline-dark ms-2 px-3 py-2" >
                        Ir para o carrinho
                    </Link>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduto />}
                </div>
            </div>
        </div>
    )
}

export default Produto;
