import { client } from './client';

export async function signUp(signUpEmail, signUpPassword) {
  const { user, error } = await client.auth.signUp({ email: signUpEmail, password: signUpPassword });
  if (error) {
    console.error(error);
    throw error;
  } else {
    return user;
  }
}

export async function signIn(signInEmail, signInPassword) {
  const { user, error } = await client.auth.signIn({ email: signInEmail, password: signInPassword });
  if (error) {
    console.error(error);
    throw error;
  } else {
    return user;
  }
}

export async function logout() {
  const { error } = await client.auth.signOut();
  if (error) {
    console.error(error);
    throw error;
  }
}

export async function createBook(book) {
  const { data, error } = await client.from('Books').insert(book).single();

  return data;
}

export async function getBooks() {
  const { data, error } = await client.from('Books').select('*');
  return data;
}