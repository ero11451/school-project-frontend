import api from "./interseptor";

export  function getUsers(query:{page:number, pageSize:number })
    { return api.get('api/user', { params: query  } );}

export const getUserById = function (id:number){
    console.log(id);
    return api.get('api/user/' + id);
}

export const getUserProfileByEmail = function (email:string){
    return api.get('api/user/email/'+ email );
}



export const getUserProfile = function (){
    return api.get('api/user/profile' );
}


export function createUser(data:unknown){
    return api.post('api/user', data);
}



export function deleteUser(id:string){
    return api.delete('api/user/' + id);
}