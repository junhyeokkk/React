import axios from "axios";
import { PRODUCT_URI } from "./_URI";

export const postProduct = async (data, token) => {
  try {
    const response = await axios.post(`${PRODUCT_URI}`, data, {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = async (pg) => {
  try {
    const response = await axios.get(`${PRODUCT_URI}/${pg}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
