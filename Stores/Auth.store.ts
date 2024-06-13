// authStore.ts
import { create } from "zustand";
import { login_user } from "../service/Auth.service";
import { saveToken, getToken, deleteToken } from "../utils/SecureStore";
import { PayloadLogin } from "../types/Auth.types";

interface IAuthStore {
  isAuthenticated: boolean;
  isAdmin: boolean;
  OnMakeLogin: (payload: PayloadLogin) => Promise<void>;
  OnGetInfo: () => Promise<void>;
  OnLogout: () => Promise<void>;
}

export const useAuthStore = create<IAuthStore>((set, get) => ({
  isAuthenticated: false,
  isAdmin: false,
  OnMakeLogin: async (payload) => {
    try {
      const { data } = await login_user(payload);
      if (data.ok) {
        await saveToken(data.token);
        set({
          isAuthenticated: true,
          isAdmin: data.user.rol.name === "Admin",
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
  OnGetInfo: async () => {
    try {
      const token = await getToken();
      if (token) {
        set({ isAuthenticated: true });
      }
    } catch (error) {
      console.error(error);
    }
  },
  OnLogout: async () => {
    try {
      await deleteToken();
      set({ isAuthenticated: false, isAdmin: false });
    } catch (error) {
      console.error(error);
    }
  },
}));
