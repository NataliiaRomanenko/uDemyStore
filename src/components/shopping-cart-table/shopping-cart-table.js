import React from 'react';
import './shopping-cart-table.css';
import {connect} from "react-redux";
import {bookAddedToCart, bookDeleteFromCart, allBookSDeleteFromCart} from '../../actions';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    //console.log(total);
    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return(
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>$ {total}</td>
                <td>
                    <button className="btn btn-outline-danger btn-sm float-right"
                            onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o" />
                    </button>
                    <button className="btn btn-outline-success btn-sm float-right"
                            onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button className="btn btn-outline-warning btn-sm float-right"
                            onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        )
    };
    return(
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(renderRow)
                    }
                 </tbody>

            </table>
            { total > 0 ?
                <div className="total">
                    Total: ${total}
                </div>
            : ""}
        </div>
    )
};

const mapStateToProps = ({shoppingCart:{cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = {
        onIncrease: bookAddedToCart,
        onDecrease: bookDeleteFromCart,
        onDelete: allBookSDeleteFromCart
    }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
