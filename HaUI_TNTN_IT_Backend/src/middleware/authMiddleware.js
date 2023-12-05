import jwt from 'jsonwebtoken';
import { accountModel } from '../models/accountModel.js';

export const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            //decodes token id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await accountModel.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            res.status(401).json({
                usermsg: 'Bạn không có quyền truy cập',
                devmsg: 'Authorized is valid'
            });
        }
    }

    if (!token) {
        res.status(401).json({
            usermsg: 'Bạn chưa xác thực',
            devmsg: 'Not authorized, no token'
        });
    }
}

