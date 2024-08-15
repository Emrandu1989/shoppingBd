import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddProduct = () => {
    return (
        <div>
                 <>
              <Helmet>
                      <title> ShoppingBd |  AddProducts </title>
              </Helmet>
           
           <form>

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
          <input type="text" name="Price"  placeholder="Price" className="input input-bordered lg:w-[500px]" required />
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
          <input type="date"  name="expiredDate" placeholder="Expired Date" className="input input-bordered lg:w-[500px]" required />
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

        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Products</button>
        </div>
      </form>
   
        </> 
        </div>
    );
};

export default AddProduct;