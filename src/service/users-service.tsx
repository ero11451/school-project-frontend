import { IUser } from "../interface/IUser";
import api from "./interseptor";

export  function getUsers(query:{page:number, pageSize:number })
   
    {    console.log(query);
         return api.get('api/user' )
    }

export const getUserById = function (id:number){
    console.log(id);
    return api.get('api/user/' + id);
}

export const getUserProfileByEmail = function (email:string){
    return api.get('api/user/email/'+ email );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateUserById = (data:IUser) :any => {
    return api.put('api/user/email/'+ data.id, data );
}


export const getUserProfile = function (){
    return api.get('api/profile' );
}


export function createUser(data:unknown){
    return api.post('api/user', data);
}



export function deleteUser(id:string){
    return api.delete('api/user/' + id);
}