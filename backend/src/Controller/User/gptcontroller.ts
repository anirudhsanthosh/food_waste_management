import { NextFunction, Request, Response } from "express";
import { Config } from "../../Config";
import axios from "axios";

export async function gpt(request: Request, response: Response, next: NextFunction) {



    const prompt = request.body.message;


    console.log({ prompt })


    try {

        const aiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
            "model": "gpt-3.5-turbo",
            "messages": [ { "role": "user", "content": prompt } ],
            "temperature": 0.7
        }, {
            headers: { Authorization: `Bearer ${process.env.apikey}` }
        });

        const message = aiResponse.data.choices[ 0 ]?.message?.content;

        response.json({
            from: "assistant",
            message
        })

    } catch (err) {
        console.log(err)

        return next(err);
    }


}
