import * as uuid from "uuid";
import MockAdapter from "axios-mock-adapter";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { axiosInstance } from "../../config/axios";
import { addFavoritedColumn, news } from "../../redux/actions/news";
import { date } from "../../helpers/date";
import {
  NEWS_LOADING,
  NEWS_SUCCESS,
  NEWS_ERROR,
} from "../../redux/actions/types";
import { Controllers } from "../../helpers/controllers";

jest.mock("../../helpers/controllers");
// jest.mock("../../redux/actions/news");

jest.mock("uuid");
jest.spyOn(uuid, "v4").mockReturnValue("56778");

const mock = new MockAdapter(axiosInstance);
const mockStore = configureStore([thunk]);

describe("Fetch News actions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  xit("it adds a collumn to an article that has been favorited before", (done) => {
    const store = mockStore({});
    Controllers.objectExist.mockReturnValue(true);

    const { favorites, articles } = helper(true)

    const expectedActions = [
      {
        type: NEWS_SUCCESS,
        payload: articles,
      },
    ];

    store.dispatch(addFavoritedColumn(favorites, articles));
    try {
      const mockObjectExist = Controllers.objectExist;

      expect(mockObjectExist).toHaveBeenCalled();
      expect(store.getActions()).toEqual(expectedActions);
      done();
    } catch (error) {
      console.log(error.message);
    }
  });

  xit("it adds a collumn to an article that has not been favorited before", (done) => {
    const store = mockStore({});
    Controllers.objectExist.mockReturnValue(false);

    const { favorites, articles } = helper(false)
    
    const expectedActions = [
      {
        type: NEWS_SUCCESS,
        payload: articles,
      },
    ];
    store.dispatch(addFavoritedColumn(favorites, articles));
    try {
      const mockObjectExist = Controllers.objectExist;

      expect(mockObjectExist).toHaveBeenCalled();
      expect(store.getActions()).toEqual(expectedActions);
      done();
    } catch (error) {
      console.log(error.message);
    }
  });

  it("succesfull action to fetch news", (done) => {
    const store = mockStore({});
    const { favorites, articles } = helper(false)

    jest.fn().mockImplementationOnce(addFavoritedColumn);

    const payload = {
      articles: [
        {
          source: {
            id: "the-washington-post",
            name: "The Washington Post",
          },
          author: "Henry",
          title: "title 5",
          favorited: false,
          description: "Lorem Ipsum",
          url: "www.cnn.com",
          urlToImage: "www.cnn.com/image.jpg",
          publishedAt: "2021-02-28T08:20:00Z",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
      ],
    };
    mock.onGet(`?country=us&from=${date.currentDate}`).reply(200, payload);

    const expectedActions = [
      {
        type: NEWS_LOADING,
      },
      {
        type: NEWS_SUCCESS,
        payload
      }
    ];

    store.dispatch(news(favorites, addFavoritedColumn)).then(() => {
      try {
        expect(addFavoritedColumn).toHaveBeenCalledWith(favorites, articles);
        expect(store.getActions()).toEqual(expectedActions);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  xit("unsuccesfull action to fetch news", (done) => {
    const store = mockStore({});
    const payload = "Request failed with status code 404";

    mock.onGet(`?country=us&from=${date.currentDate}`).reply(404, payload);

    const expectedActions = [
      {
        type: NEWS_LOADING,
      },
      {
        type: NEWS_ERROR,
        payload,
      },
    ];

    store.dispatch(news()).then(() => {
      try {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

const helper = (isFavorited) => {
  const favorites = [
    {
      id: "56778",
      userEmail: "email@gmail.com",
      favorited: isFavorited,
      url: "url.com",
      publishedAt: "01-2021",
    },
  ];

  const articles = {
    articles: [
      {
        id: "56778",
        userEmail: "email@gmail.com",
        favorited: isFavorited,
        url: "url.com",
        publishedAt: "01-2021",
      },
    ],
  };
  return { favorites, articles };
};
