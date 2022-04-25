import axiosClient from "./axiosClient";

const homeApi = {
  getProductsHome: (params) => {
    const url = "products/trending";
    return axiosClient.get(url, { params });
  },

  getCategoryId: (id) => {
    const url = `category/${id}`;
    return axiosClient.get(url);
  },
};

export default homeApi;