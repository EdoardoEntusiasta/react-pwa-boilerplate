import axios, {
  AxiosError,
  AxiosResponse,
} from "axios";
import { LOCAL_STORAGE_KEYS } from '@utils/constants';


const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  if (error.response) {
    if (error.response.status === 401) {
      try {
        // Remove user auth from localStorage
        localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
        // Force redirect 
        window.location.href = '/login';
        return Promise.reject();
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    /*
    if (
      error.response.status === 402 &&
    ) {
      const storedToken = JSON.parse(localStorage.getItem("token"));

      try {
        const rs = await axios.post(`${API_URL}/auth/refresh`, {
          refresh_token: storedToken.refresh_token,
        });

        const { token, user } = rs.data;

        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));

        return;
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    */
  }
  return Promise.reject(error);
};


export const setupInterceptors = () => {
  axios.interceptors.response.use(onResponse, onResponseError);
}