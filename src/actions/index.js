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
}
export {
    fetchBooks
}
