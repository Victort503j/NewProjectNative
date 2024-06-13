import { create } from "zustand";
import { IUsersStore } from "../types/User-store.types";
import { ICreateUsers, IUpdateUsers } from "../types/User.types";
import {
  create_users,
  delete_users,
  get_users,
  update_users,
} from "../service/User.service";
import { IPagination } from "../types/pagination.types";

export const useUsersStore = create<IUsersStore>((set, get) => ({
  users: [],
  pagination_users: {} as IPagination,
  async OnGetUsers(page: number, limit: number, name: string) {
    try {
      const { data } = await get_users(page, limit, name);
      set({
        users: data.users,
        pagination_users: {
          total: data.total,
          totalPag: data.totalPag,
          currentPag: data.currentPag,
          nextPag: data.nextPag,
          prevPag: data.prevPag,
          status: data.status,
          ok: data.ok,
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
  OnDeleteUser: (id: number) => {
    delete_users(id).then(() => {
      get().OnGetUsers(1, 5, "");
    });
  },
  OnCreate: (payload: ICreateUsers) => {
    create_users(payload).then(() => {
      get().OnGetUsers(1, 5, "");
    });
  },
  OnUpdate: (id: number, payload: IUpdateUsers) => {
    update_users(id, payload).then(() => {
      get().OnGetUsers(1, 5, "");
    });
  },
}));
