export const objectChecker = {
  exist(favorites, article) {
    const found = favorites.some((favorite) => {
      return (
        favorite.url === article.url &&
        favorite.publishedAt === article.publishedAt
      );
    });
    if (found) return true;
    return false;
  },

  filter(favorites, article) {
    const newFavorites = favorites.filter((favorite) => {
      return (
        favorite.url !== article.url &&
        favorite.publishedAt !== article.publishedAt
      );
    });
    return newFavorites;
  },
};
