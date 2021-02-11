import React, {Component} from 'react';
import { ProductDetails } from './ProductDetails'
import { ReviewDetails } from './ReviewDetails'
import { product } from '../data/product'
import { ReviewList } from './ReviewList'

class ProductShowPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
          product: {
              ...product
          },
      };
  }

  render() {
      const { product } = this.state;
      return (
          <div className="ProductShowPage">
              <ProductDetails {...product} />
              <ReviewList
              reviews={product.reviews} />  
          </div>
      );
  }
}

export default ProductShowPage;
