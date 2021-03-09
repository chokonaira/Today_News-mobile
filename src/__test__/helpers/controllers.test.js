import { Controllers } from "../../helpers/controllers";

describe("Controllers", () => {
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
      expect(Controllers.objectExist(favorites, favoritedArticle)).toEqual(
        true
      );
    });

    it("checks that an article has not been favorited", () => {
      expect(Controllers.objectExist(favorites, unFavoritedArticle)).toEqual(
        false
      );
    });
  });

  describe("Object filter", () => {
    const newFavorites = [];

    it("checks that a favorited is deleted", () => {
      expect(Controllers.deleteFavorites(favorites, favoritedArticle)).toEqual(
        newFavorites
      );
    });

    it("checks that an unfavorited is not deleted", () => {
      expect(
        Controllers.deleteFavorites(favorites, unFavoritedArticle)
      ).toEqual(favorites);
    });
  });

  describe("Comments by article", () => {
    const comentedArticle = [
      {
        articleUrl: "url.com",
      },
    ];
    const comments = [
      {
        articleUrl: "url.com",
      },
    ];
    it("checks that it returns the comments for an aricle", () => {
      expect(Controllers.commentsByArticle(comentedArticle, "url.com")).toEqual(
        comments
      );
    });

    it("checks that it does not returns any comments for an aricle", () => {
      expect(
        Controllers.commentsByArticle(comentedArticle, "https.com")
      ).toEqual([]);
    });
  });
});
