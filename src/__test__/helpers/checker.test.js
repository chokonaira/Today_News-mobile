import { Checker } from "../../helpers/checker";

describe("Checker", () => {
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
      expect(Checker.objectExist(favorites, favoritedArticle)).toEqual(true);
    });

    it("checks that an article has not been favorited", () => {
      expect(Checker.objectExist(favorites, unFavoritedArticle)).toEqual(false);
    });
  });

  describe("Object filter", () => {
    const newFavorites = [];

    it("checks that a favorited is deleted", () => {
      expect(Checker.deleteFavorite(favorites, favoritedArticle)).toEqual(
        newFavorites
      );
    });

    it("checks that an unfavorited is not deleted", () => {
      expect(Checker.deleteFavorite(favorites, unFavoritedArticle)).toEqual(
        favorites
      );
    });
  });
});
