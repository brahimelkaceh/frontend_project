import { useQuery } from '@tanstack/react-query'
import { getEmployees } from '../services/employeesService'

export const useEmployees = (params = {}) =>
  useQuery({
    queryKey: ['employees', params],
    queryFn: () => getEmployees(params),
  })