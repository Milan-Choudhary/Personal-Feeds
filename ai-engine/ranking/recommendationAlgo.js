export function rankArticles(articles, userPreferences) {
  return articles
    .map(article => ({
      ...article,
      score: userPreferences.topics.reduce(
        (sum, topic) => sum + (article.tags?.includes(topic) ? 1 : 0),
        0
      ),
    }))
    .sort((a, b) => b.score - a.score);
}
