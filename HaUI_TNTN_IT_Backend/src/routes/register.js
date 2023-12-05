import express from 'express';
import { getRegister, insertRegister, updateRegister, deleteRegister, setIsPay } from '../controllers/registerControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getRegister);

router.post('/', insertRegister);

router.put('/', protect, updateRegister);

router.delete('/', protect, deleteRegister);

router.put('/payment', protect, setIsPay);

export default router;