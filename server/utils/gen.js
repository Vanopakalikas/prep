import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const genToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
}

const validateToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

export { genToken, validateToken }