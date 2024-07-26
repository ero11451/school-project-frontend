import { Icategory } from "../interface/Icategory";
import api from "./interseptor";

export function categoryCreate(data:Icategory){
    return api.post('category', data);
 }

 export function categoryGetAll():Promise<{data:Icategory[]}>{
    return api.get('category');
 }