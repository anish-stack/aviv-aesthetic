import axios from 'axios';
const getCategories = async (query?: String) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/category?${query}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const addCategory = async (category: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/category/add`,
      category
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const updateCategory = async (id: string, category: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/category/${id}`,
      category
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const deleteCategory = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/category/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const getCategory = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/category/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
export {
  getCategories,
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
};
