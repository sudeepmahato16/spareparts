import axios from "axios";

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "spareparts");

  const {
    data: { secure_url },
  } = await axios.post(
    `https://api.cloudinary.com/v1_1/dly5ayuvy/image/upload`,
    formData
  );

  return secure_url;
};