// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000/api", // Điều chỉnh đường dẫn API của bạn
// });

// // Thêm interceptor để thêm token vào header của mỗi yêu cầu
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );


import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

// Hàm chung để thêm token vào header
export const addTokenToRequest = (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};

// Thêm interceptor cho mọi yêu cầu
api.interceptors.request.use(addTokenToRequest, (error) => {
  return Promise.reject(error);
});

export default api;
