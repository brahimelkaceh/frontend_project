
import api from '../lib/axios'
//Employee Services
export const getEmployees = (params) => api.get('/v1/team-directory/employees/', { params }).then(res => res.data)

export const getEmployeeById = (id) => api.get(`/v1/team-directory/employees/${id}`).then(res => res.data)

export const createEmployee= (data) => api.post('/v1/team-directory/employees/', data).then(res => res.data)

export const updateEmployee = (id, data) => api.put(`/v1/team-directory/employees/${id}/`, data).then(res => res.data)

export const deleteEmployee = (id) => api.delete(`/v1/team-directory/employees/${id}/`).then(res => res.data)

//Departments Services

export const getDepartements = (params) => api.get('/v1/team-directory/departments/', { params }).then(res => res.data)

export const getDepartement = (id) => api.get(`/v1/team-directory/departments/${id}`).then(res => res.data)

export const createDepartement= (data) => api.post('/v1/team-directory/departments/', data).then(res => res.data)

export const updateDepartement = (id, data) => api.put(`/v1/team-directory/departments/${id}/`, data).then(res => res.data)

export const deleteDepartement = (id) => api.delete(`/v1/team-directory/departments/${id}/`).then(res => res.data)


//Location Services
export const getLocations= () => api.get('/v1/team-directory/locations/').then(res => res.data)