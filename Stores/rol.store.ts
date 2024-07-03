import { create } from "zustand";
import { IRolesStore } from "../types/Rol-store.types";
import {
  create_rol,
  delete_rol,
  get_all_roles,
  get_roles,
  update_rol,
} from "../service/Rol.service";
import { ICreateRoles, IUpdateRoles } from "../types/Rol.types";
import { IPagination } from "../types/Pagination.types";

export const useRolesStore = create<IRolesStore>((set, get) => ({
  roles: [],
  pagination_roles: {} as IPagination,
  async OnGetRoles(page: number, limit: number, name: string) {
    try {
      const { data } = await get_roles(page, limit, name);
      set({
        roles: data.roles,
        pagination_roles: {
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

  async OnGetAllRoles() {
    try {
      const {data} = await get_all_roles();
      set({ roles: data.roles });
    } catch (error) {
      console.error(error);
    }
  },

  OnDelete: (id: number) => {
    delete_rol(id).then(() => {
      get().OnGetRoles(1, 5, "");
    });
  },
  OnCreate: (payload: ICreateRoles) => {
    create_rol(payload).then(() => {
      get().OnGetRoles(1, 5, "");
    });
  },
  OnUpdate: (id: number, payload: IUpdateRoles) => {
    update_rol(id, payload).then(() => {
      get().OnGetRoles(1, 5, "");
    });
  },
}));
