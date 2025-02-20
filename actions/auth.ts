import axios from 'axios';
const login = async (user: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
    user
  );
  return response.data;
};
const signUp = async (user: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/users/signup`,
    user
  );
  return response.data;
};
const resendOtp = async (data: any) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/users/resendOtp`,
    data
  );
  return res.data;
};
const forgetPassword = async (data: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/forget-password`,

      data
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const resetPassword = async (data: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/reset-password`,

      data
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
const profileImage = async (data: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,

      data
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
export {
  login,
  signUp,
  resendOtp,
  forgetPassword,
  resetPassword,
  profileImage,
};
