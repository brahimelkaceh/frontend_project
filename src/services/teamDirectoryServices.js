
import api from '../lib/axios'

export const getEmployees = (params) => api.get('/v1/team-directory/employees/', { params }).then(res => res.data)

export const getEmployeeById = (id) => api.get(`/v1/team-directory/employees/${id}`).then(res => res.data)

export const createEmployee= (data) => api.post('/v1/team-directory/employees/', data).then(res => res.data)

export const updateEmployee = (id, data) => api.put(`/v1/team-directory/employees/${id}`, data).then(res => res.data)

export const deleteEmployee = (id) => api.delete(`/v1/team-directory/employees/${id}`).then(res => res.data)

export const getDepartements= () => api.get('/v1/team-directory/departements/').then(res => res.data)

export const getLocations= () => api.get('/v1/team-directory/locations/').then(res => res.data)