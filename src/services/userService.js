/* eslint-disable no-unused-vars -- Day 4 starter: junior will use `api` and parameters in implementations */
// TODO: implement each function using the axios instance

import api from '../lib/axios'

// Get all users
export const getUsers = () => api.get('/users').then(res => res.data)

// Get a single user by ID
export const getUserById = (id) => api.get(`/users/${id}`).then(res => res.data)

// Create a new user
export const createUser = (data) => api.post('/users', data).then(res => res.data)

// Update an existing user
export const updateUser = (id, data) => api.put(`/users/${id}`, data).then(res => res.data)

// Delete a user
export const deleteUser = (id) => api.delete(`/users/${id}`).then(res => res.data)