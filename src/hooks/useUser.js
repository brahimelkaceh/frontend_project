/* eslint-disable no-unused-vars -- Day 4 starter: junior will wire useQuery + getUserById */
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../services/userService";

/**
 * Fetches a single user by id.
 * When you implement this hook, destructure from the return value, e.g.:
 * data, isLoading, isError, error, refetch, etc.
 */
export function useUser(id) {
  // TODO: use useQuery to fetch a single user by id
  // HINT: use the enabled option to prevent the query from running if id is undefined
}
