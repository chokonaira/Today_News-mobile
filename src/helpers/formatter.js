import { encypt } from "./crypto";

// export const formatter = (article, favorites, setFn) => {
//   // console.log(favorites)

//   let updatedArticle;
//   encypt(article.url).then((value) => {
//     updatedArticle = { ...article, articleId: value, favorited: false };
//     if (favorites.length > 0) {
//       favorites.forEach((favorite) => {
//         if (
//           updatedArticle.articleId === favorite.articleId &&
//           favorite.favorited
//         ) {
//           setFn("red");
//           updatedArticle = favorite;
//         } else {
//           console.log("nothing sup");
//           setFn("green");
//         }
//       });
//     }
//   });
//   return updatedArticle;
// };

export const formatter = async(isFetched, articles, favorites, setFn) => {
  let updatedArticle;
  isFetched && articles.articles.map( article=> {
  encypt(article.url).then((value) => {
    updatedArticle = { ...article, articleId: value, favorited: false };
    if (favorites.length > 0) {
      favorites.forEach((favorite) => {
        if (
          updatedArticle.articleId === favorite.articleId &&
          favorite.favorited
        ) {
          setFn("red");
          updatedArticle = favorite;
        } else {
          console.log("nothing sup");
          setFn("green");
        }
      });
    }
  });
});
  return updatedArticle;
};
