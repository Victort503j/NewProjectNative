// auth.service.ts
import axios, { AxiosError } from "axios";

import { IResponseLogin, PayloadLogin } from "../types/Auth.types";
import { API_URL } from "../utils/Constant";

export const login_user = async (payload: PayloadLogin) => {
  return axios.post<IResponseLogin>(API_URL + "/auth/login", payload);
};
