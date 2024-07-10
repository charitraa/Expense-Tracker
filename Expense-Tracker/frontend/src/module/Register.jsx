import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { register } from './auth'; // Importing register function from auth.js

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
      // Replace with your registration logic
      console.log('Registration data:', data);
      await register(data.email, data.username, data.password); // Calling register function from auth.js
      // Redirect to login page or do something on successful registration
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input type="email" {...register('email')} placeholder="Email" required />
        {errors.email && <em>{errors.email.message}</em>}
        <input type="text" {...register('username')} placeholder="Username" required />
        {errors.username && <em>{errors.username.message}</em>}
        <input type="password" {...register('password')} placeholder="Password" required />
        {errors.password && <em>{errors.password.message}</em>}
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
