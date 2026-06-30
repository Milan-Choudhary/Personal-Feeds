import { Router } from 'express';
import { getUser, updateUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.get('/me', authMiddleware, getUser);
router.put('/me', authMiddleware, updateUser);

export default router;
