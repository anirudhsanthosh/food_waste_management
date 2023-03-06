import { NextFunction, Request, Response } from 'express';


export async function getLoanTemplates(request: Request, response: Response, next: NextFunction) {

    const loans = [
        { name: 'HDFC' },
        { name: 'Federal Bank' },
        { name: 'SBI' },
        { name: 'ICICI' },
        { name: 'Kotak Mahindra' },

    ] as {
         name: string,
         description : string,
         interestRate : number,
         duration : number,
         installments : number,
     }[]


    response.json(loans);


}