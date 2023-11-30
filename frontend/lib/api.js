import axios, { AxiosRequestConfig } from 'axios';
const apiLink = process.env.NEXT_PUBLIC_API_URL;

export const makeRequest = async (
  method,
  endpoint,
  data = null,
  headers = null
) => {
  const axiosOptions = {
    baseURL: `${apiLink ?? ""}`,
    method,
    url: endpoint,
    data,
    timeout: 10000,
  };

  const getUserData = JSON.parse(localStorage.getItem("zura-store")) || null;
  const localToken = getUserData?.token || null;
  if (localToken)
    axiosOptions.headers = {
      token: `${localToken}`,
      ...headers,
    };

  const res = await axios.request({
    ...axiosOptions,
  });
  return res.data;
};