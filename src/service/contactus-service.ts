import { IContact } from "../interface/IContact";
import api from "./interseptor";


export function createContact(data:IContact): Promise<{data:string}>{
    return api.post('api/ContactUs', data);
}
