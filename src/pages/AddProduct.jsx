import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddProduct = () => {
      const handleAddProducts = async(e) =>{
         e.preventDefault();
         const form = e.target;
         const name = form.name.value;
         const photoUrl = form.photoUrl.value;
         const price = form.price.value;
         const category = form.category.value;
         const date = form.date.value;
         const ratings = form.ratings.value;
         const productDetails = {
              name, photoUrl, price, category, date, ratings }
              console.log(productDetails)

              // send data to the server
            //  fetch('http://localhost:5000/product',{
            //    method: 
            //  })
            //  .then(res => res.json())
            //  .then(data=> {
            //   console.log(data)
            //  })

      }
    return (
        <div className='mt-6'>
                 <>
              <Helmet>
                      <title> ShoppingBd |  AddProducts </title>
              </Helmet>
           
           <form
            onSubmit={handleAddProducts}>
              <h2 className='text-3xl font-bold text-orange-500'> Products details</h2>

            <div className="lg:flex gap-4 justify-between items-center lg:px-12">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" name="name"  placeholder="Product Name" className="input input-bordered lg:w-[500px]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered lg:w-[500px]" required />
      
        </div>
            </div>
            <div className="lg:flex gap-4  justify-between items-center lg:px-12">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price"  placeholder="Price" className="input input-bordered lg:w-[500px]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name="category" placeholder="Category" className="input input-bordered lg:w-[500px]" required />
      
        </div>
            </div>
            <div className="lg:flex gap-4  justify-between items-center lg:px-12">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Creation Date</span>
          </label>
          <input type="date"  name="date" placeholder="Creation Date" className="input input-bordered lg:w-[500px]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input type="text" name="ratings" placeholder="Ratings (out of 5)" className="input input-bordered lg:w-[500px]" required />
      
        </div>
            </div>
            <div className="lg:flex gap-4  justify-between items-center lg:px-12">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
            <textarea className="border-2 rounded-md" name="additionNotes" id="" cols="93" rows="5"></textarea>
        </div>
     
            </div>

        <div className="form-control w-[1000px] ml-16 my-12">
          <button className="btn btn-primary">Add Products</button>
        </div>
      </form>
   
        </> 
        </div>
    );
};

export default AddProduct;