import React from 'react';
import BlueInput from '../BlueInput';
import ColoredLabel from '../ColoredLabel';

const NewProductForm = ({ createProduct, newProductData, updateProductData }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // const params = {
    //   title: formData.get('title'),
    //   description: formData.get('description'),
    //   price: formData.get('price')
    // }
    // createProduct(params);
    createProduct();
  }

  function handleProductInput(event) {
    const { value, name } = event.currentTarget
    //same as:
    // const value = event.curretTarget.value
    // const name = event.curretTarget.name
    updateProductData({[name]: value})
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <ColoredLabel htmlFor='title' primary>Title</ColoredLabel>
        <br />
        <input 
          name='title' 
          id='title' 
          value={newProductData.title} 
          onChange={handleProductInput} 
        />
      </div>
      <div>
        <ColoredLabel htmlFor='description'>Description</ColoredLabel>
        <br />
        <textarea 
          name='description' 
          id='description' 
          value={newProductData.description} 
          onChange={handleProductInput} 
        />
      </div>
      <div>
      <ColoredLabel htmlFor='price'>Price</ColoredLabel>
        <br />
        <textarea 
          name='price' 
          id='price' 
          value={newProductData.price} 
          onChange={handleProductInput} 
        />
      </div>
      <div>
      <BlueInput type='submit' value='Submit' />
      </div>
    </form>
  )
}

export default NewProductForm