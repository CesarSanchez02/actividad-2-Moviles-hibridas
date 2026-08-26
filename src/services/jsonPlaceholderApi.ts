import type { User } from '../interface/User';
import type { Photo } from '../interface/Photo';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error('Error al obtener los usuarios');
  }

  return response.json();
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await fetch(`${BASE_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error('Usuario no encontrado');
  }

  return response.json();
};

export const getPhotos = async (): Promise<Photo[]> => {
  const response = await fetch(`${BASE_URL}/photos`);

  if (!response.ok) {
    throw new Error('Error al obtener las fotos');
  }

  return response.json();
};