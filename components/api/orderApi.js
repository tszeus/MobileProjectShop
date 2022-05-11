import axiosClient from "./axiosClient";

const orderApi = {
  getOrderByUserId: (params) => {
    const url = "orders";
    return axiosClient.get(url, { params });
  },

  getOrderDetail: (params) => {
    const url = `orders/${params}`;
    return axiosClient.get(url);
  }, 
};

export default orderApi;
