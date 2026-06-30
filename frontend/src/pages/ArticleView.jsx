import { useParams } from 'react-router-dom';

export default function ArticleView() {
  const { id } = useParams();

  return (
    <section>
      <h1>Article {id}</h1>
      <p>Article details and content will display here.</p>
    </section>
  );
}
