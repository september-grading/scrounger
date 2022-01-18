import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session();
}

export async function registerUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logOut() {
  const response = await client.auth.signOut();
  return checkError(response);
}