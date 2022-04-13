// Para add item no carrinho
export const addCarrinho = (produto) => {
    return{
        type: 'ADDITEM',
        payload: produto
    }
}

// Para deletar item do carrinho
export const delCarrinho = (produto) => {
    return{
        type: 'DELITEM',
        payload: produto
    }
}