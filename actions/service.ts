import axios from 'axios';
export const allService = async (query?: String) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/service?${query}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
export const addService = async (service: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/service/add`,
      service
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
export const editService = async (id: string, service: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/service/${id}`,
      service
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
export const deleteService = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/service/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const singleService = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/service/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
export const serviceBySlug = async (slug: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/service/slug/${slug}`
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
export const allServiceByCategory = async (slug: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/service/category/${slug}`
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
