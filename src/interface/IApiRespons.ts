export interface IApiResponse<T> {
   data: T[],
   Page : number,
   PageSize : null,
   successful :true,
   TotalCount :number
 }