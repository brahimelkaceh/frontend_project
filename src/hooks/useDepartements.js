import { useQuery } from '@tanstack/react-query'
import { getDepartements } from '../services/teamDirectoryServices'

export const useDepartements = (params = {}) =>
  useQuery({
    queryKey: ['departements', params],
    queryFn: () => getDepartements(params),
  })