import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

axios.interceptors.response.use(
  (response) => {
    return { error: null, response: response.data, meta: response };
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      // toast.error("An unexpected error occurred.");
    }
    // console.log(error.response.data);
    return { error: error, response: null };
  }
);

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = `${jwt}`;
}

export function getJwt() {
  return localStorage.getItem("ufd-auth-token") || "";
}

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  setJwt,
  getJwt,
};

export default httpService;
