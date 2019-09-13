import React, {Component} from 'react';
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {fetchBooks} from "../../actions";
import {compose} from '../../utils';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BoorList = ({books}) => {
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
    )
};


class BookListContainer extends Component{
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const {books, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if(error) {
           return <ErrorIndicator/>
        }

        return <BoorList books={books}/>
    };
}


const mapStateToProps = (state) => {
    return{
        books: state.books,
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return{
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
