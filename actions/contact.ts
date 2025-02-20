import axios from 'axios';
const allContacts = async (query?: String) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/contact?${query}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const addContact = async (category: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/contact/add`,
      category
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const deleteContact = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/contact/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

const singleContact = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/contact/${id}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
export { allContacts, deleteContact, addContact, singleContact };
