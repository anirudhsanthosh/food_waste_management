import dotenv from 'dotenv'
dotenv.config();

export class Config{
    
    static clientUrl = process.env.CLIENT_URL || `http://localhost:3000`;

    static passwordSalt = process.env.PASSWORD_SALT || 'afhsaifas323##$$%%^^'
}