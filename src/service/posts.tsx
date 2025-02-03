
import api from "./interseptor";

export  function getPost(query:{page:number, pageSize:number, categoryId ?:number | null})
    { return api.get('api/posts', { params: query  } );}

export const getPostById = function (id:number){
    return api.get('api/posts/' + id);
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createPost(data:any) {
     return api.post('api/posts', data);
}



export function deletePost(id:number){
    return api.delete('api/posts/' + id);
}