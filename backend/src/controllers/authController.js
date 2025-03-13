import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as userService from '../service/userService/userService.js';

export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const secretKey = process.env.JWT_SECRET;        

        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }

        const loggedUser = await userService.loginUser(email);

        if (!loggedUser) {
            return res.status(404).send("User not found");
        }

        const isPasswordValid = await bcrypt.compare(password, loggedUser.password);

        if (!isPasswordValid) {
            return res.status(401).send("Invalid password");
        }

        const token = jwt.sign({ email }, secretKey, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.status(200).json({ token, user: loggedUser });
        
    } catch (error) {
        console.error("Error in loginUserController function", error);
        return res.status(500).send(error);
    }
}

export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    const secretKey = process.env.JWT_SECRET;

    if (!token) return res.status(401).json({ message: 'Access Denied' });
  
    try {
      const verified = jwt.verify(token.split(' ')[1], secretKey);
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid Token' });
    }
  };