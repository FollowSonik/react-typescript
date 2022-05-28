export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IURL {
  baseUrl: string;
  page: string;
}

export interface IParams {
  id?: string;
}