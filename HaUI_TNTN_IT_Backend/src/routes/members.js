import express from 'express';
import { getMembers, insertMember, deleteMember, updateMember } from '../controllers/membersControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getMembers);

router.post('/', insertMember);

router.delete('/', protect, deleteMember);

router.put('/', protect, updateMember);

export default router;