import axios from "axios";
import {
  ICreateUsers,
  IGetUserPaginated,
  IResponseUsers,
  IUpdateUsers,
} from "../types/User.types";
import { API_URL } from "../utils/Constant";
import { getToken } from "../utils/SecureStore";

const getAuthHeader = async () => {
  const token = await getToken();
  return token ? `Bearer ${token}` : "";
};

export const get_users = async (page: number, limit: number, name: string) => {
  const authHeader = await getAuthHeader();
  return axios.get<IGetUserPaginated>(
    API_URL + `/users?page=${page}&limit=${limit}&name=${name}`,
    {
      headers: {
        Authorization: authHeader,
      },
    }
  );
};

export const delete_users = async (id: number) => {
  const authHeader = await getAuthHeader();
  return axios.delete<IResponseUsers>(API_URL + `/users/${id}`, {
    headers: {
      Authorization: authHeader,
    },
  });
};

export const create_users = async (payload: ICreateUsers) => {
  const authHeader = await getAuthHeader();
  return axios.post<IResponseUsers>(API_URL + `/users`, payload, {
    headers: {
      Authorization: authHeader,
    },
  });
};

export const update_users = async (id: number, payload: IUpdateUsers) => {
  const authHeader = await getAuthHeader();
  return axios.patch<IResponseUsers>(API_URL + `/users/${id}`, payload, {
    headers: {
      Authorization: authHeader,
    },
  });
};
