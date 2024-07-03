import { IResponseImage } from "./Image.types";

export interface IImageStore {
  image: IResponseImage[];
  OnGetImages: () => void;
}
