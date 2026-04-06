import { useQuery } from '@tanstack/react-query'
import { getDepartement } from '../services/teamDirectoryServices'

export const useDepartement = (params = {}) =>
  useQuery({
    queryKey: ['departements', params],
    queryFn: () => getDepartement(params),
  })