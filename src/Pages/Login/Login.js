import React from 'react';
import { useForm } from 'react-hook-form';
import './login.css';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="login-container d-flex justify-content-center">
           
           <div className="login-card">
                <h2>Login</h2>
                <div className="form-style">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <input  type="text" placeholder="Your Email" {...register("email", { required: true })} />
                            {errors.email && <span  className="text-danger">This field is required</span>} 
                        </div>
                        <div className="mb-4">
                            <input  type="password" placeholder="Password"  {...register("password",{required:true})} />
                            {errors.password && <span className="text-danger">This field is required</span>} 
                        </div>
                        
                        <button className="btn-login"  type="submit">Login</button>
                    </form>
                </div>
                <hr />
                    <button className="btn-login">Login with Google</button>
           </div>
          
        </div>
    );
};

export default Login;