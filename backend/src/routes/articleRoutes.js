import { Router } from 'express';
import { getArticles, getArticleById, createArticle } from '../controllers/articleController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', getArticles);
router.get('/:id', getArticleById);
router.post('/', authMiddleware, createArticle);

export default router;
