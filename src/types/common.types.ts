import { JwtPayload } from 'jwt-decode';

export type CustomJwtPayload = {
  email: string;
  role: string;
} & JwtPayload;

export type TLoginCredentials = {
  email: string;
  password: string;
};

export interface IGenericErrorMsg {
  path: string | number;
  message: string;
}

export interface ICurrentUser {
  email: string;
  role: string;
  name: string;
}
