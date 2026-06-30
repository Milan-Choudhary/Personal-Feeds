export async function fetchArticles() {
  const response = await fetch('/api/articles');

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }

  return response.json();
}
