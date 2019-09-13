
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [ ],
    orderTotal: 180
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_BOOK_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAIL':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const newItem  = {
                    id: book.id,
                    name: book.title,
                    count: 1,
                    total: book.price
                };
            return{
               ...state,
                cartItems:[
                    ...state.cartItems,
                    newItem
                ]
        }
        default:
            return state;
    }
};

export default reducer;
