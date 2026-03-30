import { useQuery } from '@tanstack/react-query'
import { getDepartements } from '../services/departementService'

export const useDepartements = (params = {}) =>
  useQuery({
    queryKey: ['departements', params],
    queryFn: () => getDepartements(params),
  })