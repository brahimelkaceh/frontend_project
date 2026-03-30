import api from '../lib/axios'

export const getLocations= () => api.get(' /v1/team-directory/locations').then(res => res.data)