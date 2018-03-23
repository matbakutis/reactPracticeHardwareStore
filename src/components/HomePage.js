import React, { Component } from 'react';
import AdminView from './AdminView'
import StoreView from './StoreView'

class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            currentViewAdmin: true,
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: false,
            productList: [
                {
                    productName: 'Hammer',
                    description: 'Itsa hammer',
                    price: 12.3,
                },
                {
                    productName: 'Nail',
                    description: 'Itsa nail',
                    price: 0.12,
                }
            ]
        };
    }

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({ editSaleItem });
    }

    toggleViewAdmin = () => {
        const currentViewAdmin = !this.state.currentViewAdmin;
        this.setState({ currentViewAdmin });
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({ itemCurrentlyOnSale });
    }

    addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({ productList });
    }

    deleteProduct = (e) => {
        const productList = [...this.state.productList];
        console.log(e.target, e.currentTarget);
        productList.splice(e.currentTarget.id, 1);
        this.setState({ productList });
    }

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    <span>
                        <button onClick={this.toggleEditSaleItem}>
                            {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                        </button>
                    </span>
                    <span>
                        <button onClick={this.toggleViewAdmin}>
                            {this.state.currentViewAdmin ? 'Store View' : 'Admin View'}
                        </button>
                    </span>
                    {
                        this.state.editSaleItem ?
                            <div>
                                <input
                                    onChange={this.handleItemCurrentlyOnSaleChange}
                                    value={this.state.itemCurrentlyOnSale}
                                    type="text" />
                            </div>
                            : null
                    }
                    {
                        this.state.currentViewAdmin ?
                            <AdminView
                                productList={this.state.productList}
                                addNewProductToProductList={this.addNewProductToProductList}
                                deleteProduct={this.deleteProduct} />
                            : null
                    }
                    {
                        this.state.currentViewAdmin ?
                            null
                            : 
                            <StoreView productList={this.state.productList} />
                    }

                </div>
            </div>
        );
    }
}

export default HomePage;