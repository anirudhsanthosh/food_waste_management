import { CookieOptions, NextFunction, Request, Response } from 'express';
import { Exceptions } from '../../Exceptions';
import { getUserByEmail } from '../../Repositories/User';
import { Jwt } from '../../Services/jwt';

export async function login(request: Mutate<Request, { body: User.login }>, response: Response, next: NextFunction) {

    const { email, password } = request.body;

    try {

        const existingUser = await getUserByEmail(email);

        if (existingUser === null) throw Exceptions.invalidRequest(`Invalid Email / Password, please try again.`);

        const { name, uuid } = existingUser;

        const authToken = Jwt.create({ email, name, uuid })

        const loginResponse =  { authToken } as User.loginResponse

        const options = {
            maxAge: 1000 * 60 * 60 * 48, // would expire after 2 days
            httpOnly: true, // The cookie only accessible by the web server
            // signed: true, // Indicates if the cookie should be signed
            path: '/',
            secure : true,
            sameSite : 'none'
        } as CookieOptions

        response.cookie('access_token', authToken,options)

        return response.json(loginResponse);

    } catch (error) {
        return next(error)
    }

    response.json({ email, name, password })
}
