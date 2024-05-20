import axios from 'axios'

export const addToCart = async ({
  productId, quantity
}) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8001/api/v1/cart",
      {
        productId, quantity
      },
      {
        withCredentials: true,
      }
    );

    return data.data.product;
  } catch (error) {
    console.log(error.message);
  }
}


export const removeFromCart = async (id) => {
  try {
    await axios.delete(
     ` http://localhost:8001/api/v1/cart/${id}`,
  
      {
        withCredentials: true,
      }
    );

    return true;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message)
  }
}

export const getAllCartProducts = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:8001/api/v1/cart",
      {
        withCredentials: true,
      }
    );

    return data.data.cartItems;
  } catch (error) {
    console.log(error.message);
  }
}