
import { Iuser } from "../../interface/Iuser";
// import api from "../interseptor";

export function LoginService(data:Iuser):Promise<{data:{
   accessToken:string, user:Iuser}}>{
   // return api.post('login', data);

   return new Promise<{data:{
      accessToken:string, user:Iuser}}>((resolve, reject) => {
         setTimeout(() => {     
           if (data) {
             resolve({data: {accessToken: "axzh/PegUgO5r0l4bOhOt2z6O8cnrvGWTTMpzJQK/JQNOWsD93i3eXVMegobhZu+PRuZB+Ze4DRT+AStW5Og7w", user: data }}); // Resolve the promise with data
           } else {
             reject("Error fetching data!"); // Reject the promise with an error message
           }
         }, 2000); // Simulate a 2-second delay
       });
}


export function RegisterService(data:Iuser){
   // return api.post('register', data);

   return new Promise<{data:{
      accessToken:string, user:Iuser}}>((resolve, reject) => {
         setTimeout(() => {     
           if (data) {
             resolve({data: {accessToken: "axzh/PegUgO5r0l4bOhOt2z6O8cnrvGWTTMpzJQK/JQNOWsD93i3eXVMegobhZu+PRuZB+Ze4DRT+AStW5Og7w", user: data }}); // Resolve the promise with data
           } else {
             reject("Error fetching data!"); // Reject the promise with an error message
           }
         }, 2000); // Simulate a 2-second delay
       });
} 