
import { Iuser } from "../../interface/Iuser";
import api from "../interseptor";

export function LoginService(data:Iuser):Promise<{data:{token:string, user:Iuser}}>{
   return api.post('auth/login', data);
}


export function RegisterService(data:Iuser){
   return api.post('auth/register', data);
}