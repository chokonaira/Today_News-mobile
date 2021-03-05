export const ObjectExist = (favorites, article) => {
  const found = favorites.some((favorite) => {
    return (
      favorite.url === article.url &&
      favorite.publishedAt === article.publishedAt
    );
  });
  if (found) return true;
  return false;
};
