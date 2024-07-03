export interface IGetRoles {
  id: number;
  name: string;
  isActive: boolean;
}
export interface IResponseRoles {
  roles: IGetRoles[];
}

export interface ICreateRoles {
  name: string;
}

export interface IUpdateRoles {
  name: string;
}

export interface IGetRolesPaginated {
  roles: IGetRoles[];
  total: number;
  totalPag: number;
  currentPag: number;
  nextPag: number;
  prevPag: number;
  status: number;
  ok: boolean;
}
