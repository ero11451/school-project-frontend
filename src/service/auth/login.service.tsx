
import { Iuser } from "../../interface/Iuser";
import api from "../interseptor";

export function LoginService(data:Iuser):Promise<{data:{
   accessToken:string, user:Iuser}}>{
   return api.post('login', data);
}


export function RegisterService(data:Iuser){
   return api.post('register', data);
}