import updateBookList from "./book-list-reducer";
import updateShoppingCart from "./shoping-cart-reducer";

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    };
};

export default reducer;
