import React, {Component} from 'react';
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {booksLoaded, bookRequested} from "../../actions";
import {compose} from '../../utils';
import Spinner from "../spinner";



class BookList extends Component{

    componentDidMount() {
        const {bookstoreService,booksLoaded, bookRequested} = this.props;
        bookRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const {books, loading} = this.props;
        if (loading) {
            return <Spinner/>
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
    bookRequested
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
