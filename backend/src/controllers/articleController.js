import * as articleService from '../services/articleService.js';

export async function getArticles(req, res, next) {
  try {
    const articles = await articleService.getArticles();
    res.json(articles);
  } catch (err) {
    next(err);
  }
}

export async function getArticleById(req, res, next) {
  try {
    const article = await articleService.getArticleById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    next(err);
  }
}

export async function createArticle(req, res, next) {
  try {
    const article = await articleService.createArticle(req.body);
    res.status(201).json(article);
  } catch (err) {
    next(err);
  }
}
