import { IPagination } from "./Pagination.types";
import { ICreateRoles, IGetRoles, IUpdateRoles } from "./Rol.types";

export interface IRolesStore {
  roles: IGetRoles[];
  pagination_roles: IPagination;
  OnGetRoles: (page: number, limit: number, name: string) => void;
  OnGetAllRoles: () => void;
  OnDelete: (id: number) => void;
  OnCreate: (payload: ICreateRoles) => void;
  OnUpdate: (id: number, payload: IUpdateRoles) => void;
}
