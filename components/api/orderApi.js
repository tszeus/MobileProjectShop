import axiosClient from "./axiosClient";

export const orderApi = {
  addOrder : (data) => {
    const url = '/orders/create';
    return axiosClient.post(url,data);
  }
}