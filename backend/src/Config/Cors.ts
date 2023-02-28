import { Request } from "express"
import { Config } from "../Config"


export const CorsConfig = (request: Request, callback: (...params: any) => void) => {

    let options = { origin: 'http://localhost:5173' ,credentials: true,}

    callback(null, options) 

}