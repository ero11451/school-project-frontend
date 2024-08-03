import api from "./interseptor";

export  function getPost(query:{page:number, pageSize:number, categoryId ?:number | null})
    { return api.get(`posts`, { params: query  } );}

export const getPostById = function (id:number){
    console.log(id);
    return api.get('posts/' + id);
}


export function createPost(data:unknown){
    return api.post('posts', data);
}



export function deletePost(id:number){
    return api.delete('posts/' + id);
}