import axios from "axios";
// import { SignInStep } from "../Auth/signIn/SignInSlice";
import  {store}  from "../store/Store";

const EndPoint =  process.env.REACT_APP_BASEURL;

// const EndPoint = "http://192.168.1.64:5000/";
// const apiversion = "api/v1/";

const Api = axios.create({
  timeout: 1000000,
  baseURL: EndPoint 
});

Api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
Api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
Api.interceptors.request.use(
  (config) => {
    if (store.getState()?.login?.data?.token) {
      const token = `${store.getState()?.login?.data?.token}`;
      config.headers = {
        Authorization: token
      };
    }
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

// Add a response interceptor
Api.interceptors.response.use(
  (response) => {
    if (response.data.status === 401) {
      // store.dispatch(SignInStep(null));
    } else {
      return response;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default Api;

// const Api = axios.create({
//   timeout: 1000000,
//   baseURL: EndPoint 
// });

// Api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// Api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// Api.interceptors.request.use(
//   (config) => {
//     // if (store.getState()?.login?.data?.token) {
//       const token = tokens;
//       config.headers = {
//         Authorization: token
//       };
//     // }
//     return config;
//   },
//   (error) =>
//     // Do something with request error
//     Promise.reject(error)
// );

// // Add a response interceptor
// Api.interceptors.response.use(
//   (response) => {
//     if (response.data.status === 401) {
//       // store.dispatch(SignInStep(null));
//     } else {
//       return response;
//     }
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// export default Api;