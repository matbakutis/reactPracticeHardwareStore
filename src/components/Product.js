import React, { Component } from 'react';

class Product extends Component {
    render() {
        const productName = this.props.productName;
        const description = this.props.description;
        const price = this.props.price;
        const index = this.props.index;
        const view = this.props.view;

        return (
            <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>
                { view === "admin" ? <button id={index} onClick={this.props.deleteProduct}>Delete</button> : null }
                { view === "store" ? <button id={index}>Add to Cart</button> : null }
            </div>
        );
    }
}

export default Product;