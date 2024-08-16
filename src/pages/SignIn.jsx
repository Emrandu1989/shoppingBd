import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
     const {user, login} = useContext(AuthContext);
     console.log(user);
       
     const handleLogin = (e) =>{
      e.preventDefault();
      const form = e.target;
     
      const email = form.email.value;
      
      const password = form.password.value;
      const user = { email, password};
      console.log(user)
      login(email,password)
      .then(result=>{
         const loggedUser = result.user;
         console.log(loggedUser)
         Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        //   setTimeout(()=>{
        //     navigate(location?.state ? location.state : '/')
        // }, 2000)

      })
      .catch(error=>{
         console.log(error)
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: error,
            showConfirmButton: false,
            timer: 1500
          });
      })
   }

    return (
        <>
             <Helmet>
        <title> ShoppingBd | Login </title>
      </Helmet>

             <div className="hero min-h-screen bg-base-200 flex flex-col">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:w-1/2 lg:ml-16  mb-12">
          
         <span className="font-bold text-3xl lg:text-5xl text-gray-400">welcome to ShoppingBd</span>
    </div>
    <div className="card shrink-0 lg:w-1/2  shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}  className="card-body ">
         <h1 className="text-center font-bold text-4xl text-gray-400">Please Login</h1>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input  input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mb-5 lg:my-2">New to this site Please <Link to='/register' className="btn-link">Register</Link> </p>
    </div>
  </div>
         <div>
              <h2 className="font-bold text-3xl">Login with google and github</h2>
              <div className="space-x-5 my-2 flex justify-center items-center">
                   <button  className="btn btn-primary">Google</button>
                   <button   className="btn btn-outline">GitHub</button>
              </div>
         </div>
</div>
         
        </>
    );
};

export default SignIn;