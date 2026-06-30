import Article from '../models/Article.js';

export function getArticles() {
  return Article.find().sort({ createdAt: -1 });
}

export function getArticleById(id) {
  return Article.findById(id);
}

export function createArticle(data) {
  return Article.create(data);
}
