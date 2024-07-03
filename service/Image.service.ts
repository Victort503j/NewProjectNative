// Image.service.ts
import axios from "axios";
import { IResponseImage } from "../types/Image.types";
import { API_URL } from "../utils/Constant";

export const get_images = async () => {
  return axios.get<IResponseImage>(API_URL + `/image/all`, {});
};
