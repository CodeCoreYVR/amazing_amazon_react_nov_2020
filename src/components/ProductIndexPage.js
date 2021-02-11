import React, { Component } from 'react';
import productList from '../data/productList';
import ProductForm from './ProductForm';

class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [...productList]
        };

        this.deleteProduct = this.deleteProduct.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    deleteProduct(productId) {
        this.setState({
            products: this.state.products.filter(p => p.id !== productId)
        })
    }

    createProduct(params) {
        this.setState(state => {
            return {
                products: [
                    //add new product object with its params as first element
                    {...params},
                    //then copy the array of current state of products as new array as second element 
                    ...state.products,
                ]
            }
        })
    }

    render() {
        return (
            <div className="ProductIndexPage">
               <ProductForm createProduct={this.createProduct}/>
               <h1>Products</h1> 
               <ul>
                   {this.state.products.map(product => (
                       <li key={product.id}>
                           <small>
                               <em>{product.id}</em>
                           </small>{' '}
                            <a href="#">{product.title}</a>
                            <button style={{ borderColor: 'red', margin: '5px 6px' }} onClick={() => this.deleteProduct(product.id)}>
                                Delete
                            </button>
                       </li>
                   ))}
               </ul>
            </div>
        )
    }
}

export default ProductIndexPage;