import axios from "axios";

export const signUp = async ({ name, email, password }) => {
  try {
    console.log("hello");
    const { data } = await axios.post(
      "http://localhost:8001/api/v1/auth/signup",
      { name, email, password },
      {
        withCredentials: true,
      }
    );

    return data.data.user;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message)
  }
};


export const signIn = async ({ email, password }) => {
  try {

    const { data } = await axios.post(
      "http://localhost:8001/api/v1/auth/signin",
      {  email, password },
      {
        withCredentials: true,
      }
    );

    return data.data.user;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message)
  }
};


export const signOut = async () => {
  try{
  await axios.post(
    "http://localhost:8001/api/v1/auth/signout",
    {
      withCredentials: true,
    }
  );

} catch (error) {
  console.log(error.message);
  throw new Error(error.message)
}
}