export const Controllers = {
  objectExist(arr, article) {
    const found = arr.some((favorite) => {
      return (
        favorite.url === article.url &&
        favorite.publishedAt === article.publishedAt
      );
    });
    if (found) return true;
    return false;
  },
  
  filterFavorites(arr, article) {
    const favorites = arr.filter((favorite) => {
      return (
        favorite.url !== article.url &&
        favorite.publishedAt !== article.publishedAt
      );
    });
    return favorites;
  },

  commentsByArticle(arr, articleUrl) {
    const array = [];
    arr.forEach((object) => {
      if (object.articleUrl === articleUrl) array.push(object);
    });
    return array;
  },
};
