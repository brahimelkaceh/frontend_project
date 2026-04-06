  import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getDepartements } from '../services/teamDirectoryServices'
import { createDepartement, updateDepartement,deleteDepartement } from '../services/teamDirectoryServices'

export const useDepartements = (id = {}) =>
  useQuery({
    queryKey: ['departements', id],
    queryFn: () => getDepartements(id),
  })



export const useCreateDepartement = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data) => createDepartement(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['departements'])
    },
  })
}

export const useUpdateDepartement = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }) => updateDepartement(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['departements'])
    },
  })
}


export const useDeleteDepartement = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id) => deleteDepartement(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['departements'])
    },
  })
}
