import ArticleCard from '../components/ArticleCard';
import useFetchArticles from '../hooks/useFetchArticles';

export default function Home() {
  const { articles, loading, error } = useFetchArticles();

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Latest Articles</h1>
      <div>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
