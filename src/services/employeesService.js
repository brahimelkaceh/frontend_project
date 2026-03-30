
import api from '../lib/axios'

export const getEmployees = () => api.get(' /v1/team-directory/employees').then(res => res.data)


export const getEmployeeById = (id) => api.get(` /v1/team-directory/employees/${id}`).then(res => res.data)

export const createEmployee= (data) => api.post('/v1/team-directory/employees/', data).then(res => res.data)


export const updateEmployee = (id, data) => api.put(`/ /v1/team-directory/employees/${id}`, data).then(res => res.data)


export const deleteEmployee = (id) => api.delete(`/ /v1/team-directory/employees/${id}`).then(res => res.data)