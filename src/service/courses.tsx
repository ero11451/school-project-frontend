import { Ipost } from "../interface/Ipost";
import api from "./interseptor";

export  function getCourses(query:{page:number, pageSize:number, categoryId ?:number | null})
    { return api.get('api/Courses', { params: query  } );}

export const getCoursesById = function (id:number){
    console.log(id);
    return api.get('api/Courses/' + id);
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createCourses(data:Ipost): Promise<any>{
     return api.post('api/Courses', data);
}



export function deleteCourses(id:number){
    return api.delete('api/Courses/' + id);
}