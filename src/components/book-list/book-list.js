import React, {Component} from 'react';
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {booksLoaded, bookRequested, bookError} from "../../actions";
import {compose} from '../../utils';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";



class BookList extends Component{

    componentDidMount() {
        const {
            bookstoreService,
            booksLoaded,
            bookRequested,
            bookError} = this.props;

        bookRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => bookError(err));
    }

    render() {
        const {books, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if(error) {
           return <ErrorIndicator/>
        }

    return(
     <ul className="book-list">
         {
             books.map((book) => {
                 return(
                        <li key={book.id}><BookListItem book={book}/></li>
                 )
             })
         }
     </ul>
    )};
}
const mapStateToProps = (state) => {

    return{
        books: state.books,
        loading: state.loading
    }
};

const mapDispatchToProps = {
    booksLoaded,
    bookRequested,
    bookError
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
