'use server';
import axios from 'axios';
const allCareer = async (query?: String) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/career?${query}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const addCareer = async (category: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/career/add`,
      category
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const deleteCareer = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/career/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const singleCareer = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/career/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
export { allCareer, deleteCareer, addCareer, singleCareer };
