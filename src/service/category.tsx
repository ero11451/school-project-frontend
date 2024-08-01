import { Icategory } from "../interface/Icategory";
import api from "./interseptor";

export function categoryCreate(data:Icategory){
    return api.post('category', data);
 }

 export function categoryGetAll(){
    return api.get('category');
 }