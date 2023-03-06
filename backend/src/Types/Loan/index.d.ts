declare module Loan {

    interface createPayload {
        amount: number,
        duration: number,
        interestRate: number,
        installments: number,
        attachments: { file: string, title: string }[]
    }

    interface createBankPayload {
        name : string,
    }
}