import axiosInstance from './axios';

export const register = async (email, username, password) => {
    const response = await axiosInstance.post('/auth/users/', { email, username, password });
    return response.data;
};

export const login = async (email, password) => {
    const response = await axiosInstance.post('/auth/jwt/create/', { email, password });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);

    const userResponse = await axiosInstance.get('/auth/users/me/');
    return userResponse.data;
};

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
};
