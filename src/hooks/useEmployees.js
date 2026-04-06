import { useQuery } from '@tanstack/react-query'
import { getEmployees } from '../services/teamDirectoryServices'

export const useEmployees = (params = {}) =>
  useQuery({
    queryKey: ['employees',params],
    queryFn: () => getEmployees(params),
  })