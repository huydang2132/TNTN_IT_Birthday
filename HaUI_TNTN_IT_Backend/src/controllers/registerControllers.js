import { registerModel } from "../models/registerModel.js";

export const getRegister = async (req, res) => {
    try {
        const registers = await registerModel.find().sort([['createdAt', 'desc']]);
        res.status(200).json(registers);
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}

export const insertRegister = async (req, res) => {
    try {
        const newRegister = req.body;
        const registerExists = await registerModel.findOne(
            {
                fullName: newRegister.fullName,
                schoolYear: newRegister.schoolYear,
                className: newRegister.className,
                phoneNumber: newRegister.phoneNumber
            }
        );
        if (registerExists) {
            res.status(400).json({
                usermsg: 'Bạn đã xác nhận tham gia rồi!',
                devmsg: 'register exists'
            });
        }
        else {
            const phoneNumberExists = await registerModel.findOne(
                { phoneNumber: newRegister.phoneNumber }
            )
            if (phoneNumberExists) {
                res.status(400).json({
                    usermsg: 'Số điện thoại đã được sử dụng.',
                    devmsg: 'phoneNumber exists'
                })
            }
            else {
                if ((!newRegister.fullName || newRegister.fullName.trim() === '') ||
                    (!newRegister.phoneNumber || newRegister.phoneNumber.trim() === '')) {
                    res.status(400).json({
                        usermsg: 'Tên và số điện thoại không được để trống!',
                        devmsg: 'fullName and phoneNumber is not null'
                    })
                }
                else {
                    const register = new registerModel(newRegister);
                    await register.save();
                    res.status(201).json({
                        register: register,
                        usermsg: 'Đăng ký thành công!',
                        devmsg: 'Register success'
                    })
                }
            }
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}

export const updateRegister = async (req, res) => {
    try {
        const id = req.query.id;
        const newRegister = req.body;
        delete newRegister._id;
        if (id && newRegister) {
            const register = await registerModel.findById(id);

            if (register) {
                await registerModel.updateOne(
                    { _id: id },
                    {
                        $set: {
                            fullName: newRegister.fullName,
                            schoolYear: newRegister.schoolYear,
                            className: newRegister.className,
                            phoneNumber: newRegister.phoneNumber
                        }
                    }
                ),
                    res.status(200).json({
                        usermsg: 'Cập nhật thành công',
                        devmsg: 'Update success'
                    })
            }
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}

export const deleteRegister = async (req, res) => {
    try {
        const id = req.query.id;
        if (id) {
            const register = await registerModel.findById(id);

            if (register) {
                await registerModel.deleteOne(
                    { _id: id }
                )
                res.status(200).json({
                    usermsg: 'Xóa thành công!',
                    devmsg: 'Delete Success!'
                });
            }
            else {
                res.status(404).json({
                    usermsg: 'Không tìm thấy người đăng ký này!',
                    devmsg: 'register not found'
                })
            }
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}

export const setIsPay = async (req, res) => {
    try {
        const id = req.query.id;
        const register = await registerModel.findById(id);

        if (register) {
            await registerModel.updateOne({ _id: id }, { $set: { isPay: !register.isPay } })
            res.status(200).json({
                register: register,
                usermsg: register.isPay === true ? 'Chưa đóng tiền!' : 'Đã đóng tiền!',
                devmsg: register.isPay === true ? 'Not payment!' : 'Is payment!',
            });
        }
        else {
            res.status(404).json({
                usermsg: 'Không tìm thấy đơn đăng ký này!',
                devmsg: 'Post not found!',
            })
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}