import axios from "axios";

export const addProduct = async ({ name, price, category, image }) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8001/api/v1/products",
      {
        name,
        price,
        category,
        image:
          "https://admin.helmetsnepal.com/front/uploads/product_image/img-2023-09-14-01-24-53-dunlop-gpr-300--73w--tl-road-rear-tire-removebg-preview.png",
      },
      {
        withCredentials: true,
      }
    );

    return data.data.product;
  } catch (error) {
    console.log(error.message);
  }
};

export const getProducts = async (query) => {
  try {
    let endpoint = "http://localhost:8001/api/v1/products";

    if (query.category) {
      endpoint = endpoint + `?category=${query.category}`;
    }

    const { data } = await axios.get(endpoint, {
      withCredentials: true,
    });

    return data.data.products;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:8001/api/v1/products/${id}`,
      {
        withCredentials: true,
      }
    );

    return data.status;
  } catch (error) {
    console.log(error.message);
  }
};
