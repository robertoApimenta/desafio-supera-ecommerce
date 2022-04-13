const carrinho = [];

const handleCarrinho = (state = carrinho, action) => {
    const produto = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if Product is Already Exist
            const exist = state.find((x) => x.id === produto.id);
            if (exist) {
                // Increase the Quantity
                return state.map((x) =>
                    x.id === produto.id ? { ...x, qtd: x.qtd + 1 } : x
                );
            } else {
                const produto = action.payload;
                return [
                    ...state,
                    {
                        ...produto,
                        qtd: 1,
                    }
                ]
            }

        case "DELITEM":
            const exist1 = state.find((x) => x.id === produto.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === produto.id ? { ...x, qtd: x.qtd - 1 } : x
                );
            }

            break;

        default:
            return state;
            break;
    }
}

export default handleCarrinho;