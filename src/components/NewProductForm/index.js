import React from 'react';

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
        <label htmlFor='title'>Title</label>
        <br />
        <input 
          name='title' 
          id='title' 
          value={newProductData.title} 
          onChange={handleProductInput} 
        />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <br />
        <textarea 
          name='description' 
          id='description' 
          value={newProductData.description} 
          onChange={handleProductInput} 
        />
      </div>
      <div>
        <label htmlFor='price'>Price</label>
        <br />
        <textarea 
          name='price' 
          id='price' 
          value={newProductData.price} 
          onChange={handleProductInput} 
        />
      </div>
      <div>
        <input type='submit' value='Submit' />
      </div>
    </form>
  )
}

export default NewProductForm