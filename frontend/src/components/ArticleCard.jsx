export default function ArticleCard({ article }) {
  return (
    <article>
      <h2>{article.title}</h2>
      <p>{article.excerpt}</p>
      <a href={`/articles/${article.id}`}>Read article</a>
    </article>
  );
}
