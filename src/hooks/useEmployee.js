import { useQuery } from '@tanstack/react-query'
import { getEmployeeById } from '../services/teamDirectoryServices'

export const useEmployee = (id) =>
  useQuery({
    queryKey: ['employee', id],
    queryFn: () => getEmployeeById(id),
    enabled: !!id,
  })