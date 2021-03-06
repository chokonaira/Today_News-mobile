import { objectChecker } from "../../helpers/objectChecker";

describe("objectChecker", () => {
  const favorites = [
    {
      url: "url.com",
      publishedAt: "2021-3-6",
    },
  ];

  const favoritedArticle = {
    url: "url.com",
    publishedAt: "2021-3-6",
  };

  const unFavoritedArticle = {
    url: "http.com",
    publishedAt: "2021-3-1",
  };

  describe("Object exist", () => {
    it("checks that an article is already favorited", () => {
      expect(objectChecker.exist(favorites, favoritedArticle)).toEqual(true);
    });

    it("checks that an article has not been favorited", () => {
      expect(objectChecker.exist(favorites, unFavoritedArticle)).toEqual(false);
    });
  });

  describe("Object filter", () => {
    const newFavorites = [];

    it("checks that a favorited is deleted", () => {
      expect(objectChecker.filter(favorites, favoritedArticle)).toEqual(
        newFavorites
      );
    });

    it("checks that an unfavorited is not deleted", () => {
      expect(objectChecker.filter(favorites, unFavoritedArticle)).toEqual(
        favorites
      );
    });
  });
});
