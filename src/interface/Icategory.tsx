export interface Icategory {
    // Define the properties of CategoryModel here
    id:  number | null | string ;
    imageUrl?:string;
    category:string;
    name?:string,
    content?:string,
    description?:string,
    imgUrl?:string,
    teacher?:{
      username?:string,
      email?:string
    }
  }