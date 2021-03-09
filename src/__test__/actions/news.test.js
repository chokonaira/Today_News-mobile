import MockAdapter from "axios-mock-adapter";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { axiosInstance } from "../../config/axios";
import { news } from "../../redux/actions/news";
import { date } from "../../helpers/date";
import {
  NEWS_LOADING,
  NEWS_SUCCESS,
  NEWS_ERROR,
} from "../../redux/actions/types";

const mock = new MockAdapter(axiosInstance);
const mockStore = configureStore([thunk]);

describe("Fetch News actions", () => {
  beforeEach(() => {
    mock.resetHistory();
  });
  it("succesfull action to fetch news", (done) => {
    const store = mockStore({});
    const payload = {
      articles: [
        {
          source: {
            id: "the-washington-post",
            name: "The Washington Post",
          },
          author: "Henry",
          title: "title 5",
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

  it("unsuccesfull action to fetch news", (done) => {
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
