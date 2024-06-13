import { PayloadLogin } from "./Auth.types";

export interface IAuthStore {
  isAuthenticated: boolean;
  OnMakeLogin: (payload: PayloadLogin) => void;
  OnGetInfo: () => void;
  OnLogout: () => void;
}
