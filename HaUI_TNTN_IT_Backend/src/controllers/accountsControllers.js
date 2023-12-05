import { accountModel } from '../models/accountModel.js';
import gennerateToken from '../config/generateToken.js';

export const authAccount = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const account = await accountModel.findOne({ email });
            if (account) {
                if (await account.matchPassword(password)) {
                    res.status(200).json({
                        _id: account._id,
                        fullName: account.fullName,
                        email: account.email,
                        isAdmin: account.isAdmin,
                        token: gennerateToken(account._id)
                    })
                }
                else {
                    res.status(401).json({
                        usermsg: 'Mật khẩu không chính xác.',
                        devmsg: 'Password invalid'
                    })
                }
            }
            else {
                res.status(401).json({
                    usermsg: 'Email không chính xác.',
                    devmsg: 'Email invalid'
                })
            }
        }
        else {
            res.status(400).json({
                usermsg: 'Vui lòng nhập email và mật khẩu',
                devmsg: 'Email invalid'
            })
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error });
    }
}

export const getAccounts = async (req, res) => {
    try {
        const account = await accountModel.find();
        res.status(200).json(account);
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error });
    }
}

export const insertAccount = async (req, res) => {
    try {
        const newAccount = req.body;
        if (newAccount) {
            const account = new accountModel(newAccount);
            await account.save();
            res.status(201).json(account);
        }
        else {
            res.status(400).json({
                devmsg: 'Bad request'
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error });
    }
}

export const deleteAccount = async (req, res) => {
    try {
        const id = req.query.id;
        const account = await accountModel.findById(id);
        if (account) {
            await accountModel.deleteOne(
                { _id: id },
            );
            res.status(200).json({
                devmsg: 'Delete Success!'
            });
        }
        else {
            res.status(404).json({
                devmsg: 'Account not found!'
            })
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}

export const updateAccount = async (req, res) => {
    try {
        const id = req.query.id;
        const account = await accountModel.findById(id);
        const newAccount = req.body;
        delete newAccount.id;

        if (account) {
            await accountModel.updateOne({ _id: id }, { $set: newAccount })
            res.status(200).json({
                account: account,
                devmsg: 'Update success.',
            });
        }
        else {
            res.status(404).json({
                devmsg: 'Post not found!'
            })
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}