// import { IApiResponse } from "../interface/IApiRespons";
import { ICourse, ICourseURLParams } from "../interface/ICourse";
import api from "./interseptor";

export  function getCourses(query:ICourseURLParams)

    { return api.get('api/Course', { params: query  } ) }

export const getCoursesById = function (id:number){
    return api.get('api/Courses/' + id);
}

export function createCourses(data:ICourse){
     return api.post('api/Courses', data);
}

export function updateCourses(data:ICourse): Promise<{data:string}>{
    return api.post('api/Courses', data);
}

export function deleteCourses(id:number){
    return api.delete('api/Courses/' + id);
}