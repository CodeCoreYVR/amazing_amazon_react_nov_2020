import React from 'react';

function ProductForm ({ createProduct }) {  //instead of passing in props, we can destructure the argument createProduct this way
    //then we don't have to do the following:
    //const { createProduct } = props
    function handleSubmit (event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
        
        createProduct({
            id: Math.floor(Math.random()*100000),
            title: formData.get("title"),
            description: formData.get("description"),
            price: formData.get("price")
        })
    }
    return (
        <form onSubmit={ handleSubmit }>
            <div>
              <label htmlFor="title">Title</label>  
              <input id="title" type="text" name="title" />
            </div> 
            <div>
              <label htmlFor="description">Description</label>  
              <input id="description" type="text" name="description" />
            </div> 
            <div>
              <label htmlFor="price">Price</label>  
              <input id="price" type="text" name="price" />
            </div>   
            <input type="submit" value="Create Product"/> 
        </form>
    )
}

export default ProductForm;
