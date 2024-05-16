import axios from "axios";

export const getCurrentUser = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:8001/api/v1/users/current-user",
      {
        withCredentials: true,
      }
    );

    return data.data.user;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
