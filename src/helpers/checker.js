export const Checker = {
  objectExist(favorites, article) {
    const found = favorites.some((favorite) => {
      return (
        favorite.url === article.url &&
        favorite.publishedAt === article.publishedAt
      );
    });
    if (found) return true;
    return false;
  },

  deleteFavorites(favorites, article) {
    const newFavorites = favorites.filter((favorite) => {
      return (
        favorite.url !== article.url &&
        favorite.publishedAt !== article.publishedAt
      );
    });
    return newFavorites;
  },

  authArticleCheck(articles, authUid) {
    const authArticles = articles.map((article) => {
      return article.userId === authUid;
    });
    return authArticles;
  },
};
