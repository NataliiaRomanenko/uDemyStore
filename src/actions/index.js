const booksLoaded = (newBooks) => {
    return{
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};
const bookRequested = () => {
    return{
        type:'FETCH_BOOK_REQUEST'
    }
};

const bookError = (error) => {
    return{
        type: 'FETCH_BOOKS_FAIL',
        payload: error
    }
};
const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(bookRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(bookError(err)));
};

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
};

const bookDeleteFromCart = (bookId) => {
    return{
        type: 'BOOK_DELETE_FROM_CART',
        payload: bookId
    }
};

const allBookSDeleteFromCart = (bookId) => {
    return{
        type: 'ALL_BOOKS_DELETE_FROM_CART',
        payload: bookId
    }
};
export {
    fetchBooks,
    bookAddedToCart,
    bookDeleteFromCart,
    allBookSDeleteFromCart
}
