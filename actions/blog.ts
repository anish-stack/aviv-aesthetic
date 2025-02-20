import axios from 'axios';
const getBlogs = async (query?: String) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs?${query}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const addBlog = async (blog: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/add`,
      blog
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const updateBlog = async (id: string, blog: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`,
      blog
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const deleteBlog = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const getBlog = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const getBlogBySlug = async (slug: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${slug}`
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
const getAllBlogsByCategory = async (slug: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/category/${slug}`
    );

    return response.data;
  } catch (error) {
    return null;
  }
};

export {
  getBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getBlogBySlug,
  getAllBlogsByCategory,
};
