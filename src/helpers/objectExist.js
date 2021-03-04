export const ObjectExist = (favorites, favoriteArticle) => {
  const found = favorites.some((favorite) => {
    return (
      favorite.url === favoriteArticle.url &&
      favorite.publishedAt === favoriteArticle.publishedAt
    );
  });
  if (found) return true;
  return false;
};
