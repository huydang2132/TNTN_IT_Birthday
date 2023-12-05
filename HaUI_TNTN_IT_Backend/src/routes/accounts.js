import express from 'express';
import { getAccounts, insertAccount, deleteAccount, updateAccount, authAccount } from '../controllers/accountsControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authAccount);

router.get('/', protect, getAccounts);

router.post('/', insertAccount);

router.delete('/', deleteAccount);

router.put('/', protect, updateAccount);

export default router;