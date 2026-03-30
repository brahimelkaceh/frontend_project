import api from '../lib/axios'

export const getDepartements= () => api.get(' /v1/team-directory/departements').then(res => res.data)