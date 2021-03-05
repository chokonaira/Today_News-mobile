import { ObjectExist } from "./objectExist";

export const formatter = (favorites, articles) => {
  const newArticles = articles || [];
  return new Promise(function (resolve, reject) {
    const updatedArticle = newArticles.map((article) => {
      if (ObjectExist(favorites, article)) {
        return { ...article, favorited: true };
      } else {
        return { ...article, favorited: false };
      }
    });
    return resolve(updatedArticle);
  });
};
