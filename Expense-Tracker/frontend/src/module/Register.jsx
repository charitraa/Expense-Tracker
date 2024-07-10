import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { NavLink } from 'react-router-dom';
import { register as registerUser } from './auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Validation schema using zod
const schema = z.object({
  email: z.string().min(5, 'Email must be at least 5 characters long').email('Invalid email address'),
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const handleRegister = async (data) => {
    try {
      console.log('Registration data:', data);
      toast.success('Login Successful');
      await registerUser(data.email, data.username, data.password , data.repassword);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      
      <form onSubmit={handleSubmit(handleRegister)} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
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
        
        <div className="mb-4">
          <input 
            type="text" 
            {...register('username')} 
            placeholder="Username" 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.username && <em className="text-red-500 text-sm">{errors.username.message}</em>}
        </div>
        
        <div className="mb-4">
          <input 
            type="password" 
            {...register('password')} 
            placeholder="Password" 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && <em className="text-red-500 text-sm">{errors.password.message}</em>}
        </div>
        <div className="mb-4">
          <input 
            type="password" 
            {...register('password')} 
            placeholder="repassword" 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && <em className="text-red-500 text-sm">{errors.password.message}</em>}
        </div>
        
        <button 
          type="submit" 
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
        <NavLink to='/' className="mt-4">
        <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600">Login</button>
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

export default Register;
