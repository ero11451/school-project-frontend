import api from "./interseptor";

export function fileService(formData: unknown):Promise<{data:{filePath:string}}>{
   return api.post('FileUpload/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    } });
}
