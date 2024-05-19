

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


export const removeFromCart = () => {

}