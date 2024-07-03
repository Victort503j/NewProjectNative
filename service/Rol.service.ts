import axios from "axios";
import {
  ICreateRoles,
  IGetRoles,
  IGetRolesPaginated,
  IResponseRoles,
  IUpdateRoles,
} from "../types/Rol.types";
import { API_URL } from "../utils/Constant";
import { getToken } from "../utils/SecureStore";

const getAuthHeader = async () => {
  const token = await getToken();
  return token ? `Bearer ${token}` : "";
};

export const get_roles = async (page: number, limit: number, name: string) => {
  const authHeader = await getAuthHeader();
  return axios.get<IGetRolesPaginated>(
    API_URL + `/roles/rolePaginated?page=${page}&limit=${limit}&name=${name}`,
    {
      headers: {
        Authorization: authHeader,
      },
    }
  );
};

export const get_all_roles = async () => {
  const authHeader = await getAuthHeader();
  return axios.get<IResponseRoles>(API_URL + `/roles`, {
    headers: {
      Authorization: authHeader,
    },
  });
};

export const delete_rol = async (id: number) => {
  const authHeader = await getAuthHeader();
  return axios.delete<IResponseRoles>(API_URL + `/roles/${id}`, {
    headers: {
      Authorization: authHeader,
    },
  });
};

export const create_rol = async (payload: ICreateRoles) => {
  const authHeader = await getAuthHeader();
  return axios.post<IResponseRoles>(API_URL + `/roles`, payload, {
    headers: {
      Authorization: authHeader,
    },
  });
};

export const update_rol = async (id: number, payload: IUpdateRoles) => {
  const authHeader = await getAuthHeader();
  return axios.patch<IResponseRoles>(API_URL + `/roles/${id}`, payload, {
    headers: {
      Authorization: authHeader,
    },
  });
};
