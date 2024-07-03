import { create } from "zustand";
import { ImagePath } from "../types/Image.types";
import { get_images } from "../service/Image.service";

interface IImageStore {
  images: ImagePath[] | null;
  OnGetImages: () => Promise<void>;
}

export const useImageStore = create<IImageStore>((set, get) => ({
  images: null,
  async OnGetImages() {
    try {
      get_images().then(({ data }) => {
        console.log(data);
        set({
          images: data.imagePaths,
        });
      });
    } catch (error) {
      console.error(error);
    }
  },
}));
