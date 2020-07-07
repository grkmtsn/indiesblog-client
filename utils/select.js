const MOST_RECENT_SIZE = 4;

export const getMostRecentArticles = (articles) => {
  return articles
    .map((article) => article)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, MOST_RECENT_SIZE)
}

export const getPopularArticles = (articles) => {
  return articles.map(article => article).sort((a,b) => b.view_count - a.view_count);
}