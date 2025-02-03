import api from "./interseptor";

export function getAllClasses(params:{pageSize?:number, pageNumber?:number, courseId?:string })  {
    return api.get('api/Class', { params });
 }