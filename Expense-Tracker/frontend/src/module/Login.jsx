import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from './auth';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const schema = z.object({
  email: z.string().min(5, 'Email must be at least 5 characters long').email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (data) => {
    try {
      console.log('Login data:', data);
      await login(data.email, data.password); // Calling login function from auth.js
      toast.success('Login Successful');
      navigate('/app');
    } catch (error) {
      console.error('Login failed', error);
      toast.error('Login Failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      
      <form onSubmit={handleSubmit(handleLogin)} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="mb-4">
          <input 
            type="email" 
            {...register('email')} 
            placeholder="Email" 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <em className="text-red-500 text-sm">{errors.email.message}</em>}
        </div>
        
        <div className="mb-4 relative">
          <label htmlFor='password' className="block text-gray-700">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            id='password'
            placeholder='Enter your password'
            className="w-full p-2 border border-gray-300 rounded"
          />
          {showPassword ? (
            <FaEye 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)} 
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            />
          )}
          {errors.password && <em className="text-red-500 text-sm">{errors.password.message}</em>}
        </div>
        
        <button 
          type="submit" 
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <NavLink to='/register' className="mt-4">
        <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600">Register</button>
      </NavLink>

      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </div>
  );
};

export default Login;
