import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCarrinho, delCarrinho } from '../redux/action';

const Carrinho = () => {

    const state = useSelector((state) => state.handleCarrinho);
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCarrinho(item));
    }
    const handleDel = (item) => {
        dispatch(delCarrinho(item));
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Carrinho vazio</h3>
                    </div>
                </div>
            </div>
        )
    }

    const cartItems = (product) => {
        return (
            <>
                <div className="px-4 my-5 bg-light rounded-3 py-5">
                    <div className="container py-4">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={`../assets/${product.image}`} alt={product.image} height="200px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3>{product.name}</h3>
                                <p className="lead fw-bold">
                                    {product.qtd} X R${product.price} = R${product.qtd * product.price}
                                </p>
                                <button className="btn btn-outline-dark me-4" onClick={() => handleDel(product)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button className="btn btn-outline-dark" onClick={() => handleAdd(product)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
        </div>
    )
}

export default Carrinho;