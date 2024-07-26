import api from "./interseptor";

export function getPost(){
    return api.get('posts');
}

export function createPost(data:unknown){
    return api.post('posts', data);
}