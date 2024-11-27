
import { Iuser } from "../../interface/Iuser";
import api from "../interseptor";

export function LoginService(data:Iuser): Promise<{data:{ accessToken: string, user: Iuser }}>{
   return api.post('login', data);
}


export function RegisterService(data:Iuser){
   return api.post('register', {...data});
} 


export const getUserProfile = function (email:string){
   return api.get('api/user/profile'+ email);
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function loginGetUserData(data:any):any{
  return  Promise.allSettled([LoginService(data)])
}