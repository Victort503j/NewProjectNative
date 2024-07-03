export interface IGetUsers {
  id: number;
  name: string;
  lastName: string;
  email: string;
  rolId: number;
  password: string;
  address: {
    id: number;
    department: string;
    municipality: string;
    complement: string;
  };
  rol: { id: number; name: string };
  isActive: boolean;
}
export interface IResponseUsers {
  user: IGetUsers[];
}

export interface ICreateUsers {
  department: string;
  municipality: string;
  complement: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  rolId: number;
}

export interface IUpdateUsers {
  name: string;
  lastName: string;
  email: string;
  password?: string;
  address?: {
    department: string;
    municipality: string;
    complement: string;
  };
  rolId: number;
}

export interface User {
  email: string;
  password: string;
}

export interface IGetUserPaginated {
  users: IGetUsers[];
  total: number;
  totalPag: number;
  currentPag: number;
  nextPag: number;
  prevPag: number;
  status: number;
  ok: boolean;
}
