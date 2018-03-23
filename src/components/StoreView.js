import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class StoreView extends Component {
    render() {
        return (
            <div>
                <h1>Store View</h1>
                <h2>Products</h2>
                <ProductList productList={this.props.productList} view="store" />
            </div>
        );
    }
}

export default StoreView;