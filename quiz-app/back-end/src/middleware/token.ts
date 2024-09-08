import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserSchema from '../model/UserSchema';
import { auth } from '../utils/auth';

class VerifyToken {
    constructor() {}

    // async getUserByToken(token: string, res: Response) {
    //     if (!token) {
    //         return res.status(401).json({ message: "Unauthorized - User not found" });
    //     }

    //     try {
    //         const decoded = jwt.verify(token, auth.secret) as { id: string };
    //         const userId = decoded.id;

    //         const user = await UserSchema.findOne({ _id: userId });

    //         if (!user) {
    //             return res.status(404).json({ message: "User not found" });
    //         }

    //         return user;
    //     } catch (err) {
    //         return res.status(401).json({ message: "Invalid token" });
    //     }
    // }

    // async verifyAdminToken(token: string, res: Response) {
    //     if (!token) {
    //         return res.status(401).json({ message: "Unauthorized - No token provided" });
    //     }

    //     try {
    //         const user = await this.getUserByToken(token, res);

    //         if (user && user.role !== 'admin') {
    //             return res.status(403).json({ message: "Unauthorized - Not an admin" });
    //         }

    //         return user;
    //     } catch (err) {
    //         return res.status(401).json({ message: "Invalid token" });
    //     }
    // }
}

export default VerifyToken;
