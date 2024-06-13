import { IPagination } from "./pagination.types";
import { ICreateUsers, IGetUsers, IUpdateUsers } from "./User.types";

export interface IUsersStore {
  users: IGetUsers[];
  pagination_users: IPagination;
  OnGetUsers: (page: number, limit: number, name: string) => void;
  OnDeleteUser: (id: number) => void;
  OnCreate: (payload: ICreateUsers) => void;
  OnUpdate: (id: number, payload: IUpdateUsers) => void;
}
