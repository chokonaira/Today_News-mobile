import { ObjectExist } from "./objectExist";

export const formatter = (favorites, articles) => (dispatch) => {
  const newArticles = articles || [];
  return new Promise(function (resolve, reject) {
    const updatedArticle = newArticles.map((article) => {
      if (ObjectExist(favorites, article)) {
        return { ...article, favorited: true };
      } else {
        return { ...article, favorited: false };
      }
    });
    dispatch(resolve(updatedArticle || []))
  });
};


