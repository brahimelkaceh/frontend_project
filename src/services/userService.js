/* eslint-disable no-unused-vars -- Day 4 starter: junior will use `api` and parameters in implementations */
// TODO: implement each function using the axios instance

import api from '../lib/axios'

/**
 * Fetches all users from the API (JSONPlaceholder: GET /users).
 * Should return the response data (array of users).
 */
export async function getUsers() {}

/**
 * Fetches a single user by id (GET /users/:id).
 * @param {string|number} id - User id from the route or UI.
 */
export async function getUserById(id) {}

/**
 * Creates a new user (POST /users).
 * @param {object} data - Payload matching the API (e.g. name, username, email).
 */
export async function createUser(data) {}

/**
 * Updates an existing user (PATCH or PUT /users/:id).
 * @param {string|number} id - User id.
 * @param {object} data - Fields to update.
 */
export async function updateUser(id, data) {}

/**
 * Deletes a user (DELETE /users/:id).
 * @param {string|number} id - User id.
 */
export async function deleteUser(id) {}
