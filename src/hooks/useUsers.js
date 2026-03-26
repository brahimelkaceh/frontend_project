/* eslint-disable no-unused-vars -- Day 4 starter: junior will wire useQuery + getUsers */
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../services/userService'

/**
 * Fetches all users via React Query.
 * When you implement this hook, destructure from the return value, e.g.:
 * data, isLoading, isError, error, isFetching, refetch, status, etc.
 */

  // TODO: use useQuery to fetch all users
  export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    
  })
}

