
import { IUser } from "../../interface/IUser";
import api from "../interseptor";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LoginService(data:any): any{
   return api.post('api/Auth/login', data);
}


export function RegisterService(data:IUser){
   return api.post('api/auth/register', {...data});
} 




