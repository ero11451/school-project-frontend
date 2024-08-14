import { Icategory } from "../interface/Icategory";
import api from "./interseptor";

export function categoryCreate(data:Icategory){
    return api.post('api/category', data);
 }

 export function categoryGetAll(){
    return api.get('api/category');
 }