import axios from "axios";
import { ARTICLE_URI } from "./_URI";

export const postArticle = async (data, token) => {
  try {
    const response = await axios.post(`${ARTICLE_URI}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const getArticle = async (cate, pg) => {
  try {
    const response = await axios.get(`${ARTICLE_URI}/${cate}/${pg}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
