import React, { Component } from 'react'
import NewProductForm from '../NewProductForm';
import { Product } from '../../requests';

class ProductNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProductData: {
        title: '',
        description: '',
        price: '',
      }
    }
    this.createProduct = this.createProduct.bind(this)
    this.updateProductData = this.updateProductData.bind(this)
  }

  createProduct() {
    Product.create(this.state.newProductData)
      .then(({ id }) => {
        this.props.history.push(`/products/${id}`)
      })
  }

  updateProductData(props) { // props will be an object { title: 'new value' } | { body: 'new value for body' }
    this.setState((state) => {
      console.log(props);
      console.log(state);
      // return {
      //   newProductData: {
      //     ...state.newProductData,
      //     ...props
      //   }
      // }
      return {
        newProductData: Object.assign(Object.assign({}, state.newProductData), props)
      }
    })
  }

  render() {
    return(
      <main>
        <NewProductForm 
        createProduct={this.createProduct}
        newProductData={this.state.newProductData}
        updateProductData={this.updateProductData}
        />
      </main>
    )
  }
}

export default ProductNewPage