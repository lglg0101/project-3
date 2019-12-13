//services for Posts
import axios from "axios";

const apiService = axios.create({
  // Before proxying
  // baseURL: 'http://localhost:3020/api'
  // After proxying
  // baseURL: 'http://localhost:3000/api'
  baseURL: "/post"
});

export const create = async post => {
  console.log("POST on service", post);

  const data = new FormData();
  data.append("content", post.content);
  data.append("image", post.image);

  console.log("data on service", data);
  try {
    const response = await apiService.post(`/create`, data);
    console.log("RESPONSE", response);
    return response.data.note;
  } catch (error) {
    throw error;
  }
};

export const load = async id => {
  try {
    const response = await apiService.get(`/${id}`);
    console.log(response);
    const post = response.data.post;
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const list = async () => {
  try {
    const response = await apiService.get('/list');
    const posts = response.data.posts;
    return posts;
  } catch (error) {
    throw error;
  }
};

export const edit = async (id, post) => {
  try {
    await apiService.patch(`/${id}`, post);
  } catch (error) {
    throw error;
  }
};

export const remove = async id => {
  try {
    await apiService.delete(`/${id}`);
  } catch (error) {
    throw error;
  }
};
