import axios from "axios";
const shopService = axios.create({
  baseURL: "/shops"
});

export const shopInfo = async data => {
  console.log("DATA ON SERVICE", data);
  try {
    const response = await shopService.post(`/shop-info`, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const loadAllShops = async data => {
  console.log("DATA ON SERVICE", data);
  try {
    const response = await shopService.get(`/`);
    return response.data.shops;
  } catch (error) {
    throw error;
  }
};

export const loadShopInfo = async id => {
  console.log("ID ON SERVICE", id);
  try {
    const response = await shopService.get(`/${id}`);
    return response.data.shops;
  } catch (error) {
    throw error;
  }
};

export const loadMyShop = async () => {
  try {
    const response = await shopService.get(`/my-shop`);
    console.log("RESPONSE", response.data);
    return response.data.shops;
  } catch (error) {
    throw error;
  }
};
