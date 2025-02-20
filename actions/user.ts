import axios from 'axios';
const getUsers = async (query?: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users?${query}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const addUser = async (User: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/add`,
      User
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const updateUser = async (id: string, User: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      User
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const getUser = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export { getUsers, addUser, updateUser, deleteUser, getUser };
