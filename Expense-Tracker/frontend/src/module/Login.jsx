import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from './auth'; // Importing login function from auth.js
import { FaEye, FaRegEyeSlash } from 'react-icons/fa'; // Importing eye icons for password visibility

// Validation schema using zod
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
      // Replace with your login logic
      console.log('Login data:', data);
      await login(data.email, data.password); // Calling login function from auth.js
      // Redirect to app or do something on successful login
      navigate('/app');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input type="email" {...register('email')} placeholder="Email" required />
        {errors.email && <em>{errors.email.message}</em>}
        <div className='pw'>
          <label htmlFor='password'>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            id='password'
            placeholder='Enter your password'
          />
          {showPassword ? (
            <FaEye className='i-eyed' onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <FaRegEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className='i-eyed'
            />
          )}
          {errors.password && <em>{errors.password.message}</em>}
        </div>
        <button type="submit">Login</button>
      </form>
      <NavLink to='/register'>
        <button>Register</button>
      </NavLink>
    </>
  );
};

export default Login;
