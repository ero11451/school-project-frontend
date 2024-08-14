import api from "./interseptor";

export function fileService(formData: unknown):Promise<{data:{fileUrl:string}}>{
   return api.post('api/FileUpload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    } });
}
