import MockAdapter from "axios-mock-adapter";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { axiosConfig } from "../../config/axios";
import { news } from "../../redux/actions/news";
import {
  NEWS_LOADING,
  NEWS_SUCCESS,
  NEWS_ERROR,
} from "../../redux/actions/types";

const mock = new MockAdapter(axiosConfig);
const mockStore = configureStore([thunk]);

const baseUrl = "https://newsapi.org/v2/top-headlines";
const API_KEY = "5a5316ec9d0e46f5bb7474eb91099727";

describe("Fetch News actions", () => {
  xit("succesfull action to fetch news", (done) => {
    console.log(news());

    const store = mockStore({});
    const newsData = {
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
    mock
      .onGet(`${baseUrl}?country=us&apiKey=${API_KEY}`)
      .reply(200, { data: newsData });

    const expectedActions = [
      {
        type: NEWS_LOADING,
      },
      {
        type: NEWS_SUCCESS,
        payload: newsData,
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
    const message = "Request failed with status code 404";

    mock
      .onGet(`${baseUrl}?country=us&from=2021-02-28&apiKey=${API_KEY}`)
      .reply(404, message);

    const expectedActions = [
      {
        type: NEWS_LOADING,
      },
      {
        type: NEWS_ERROR,
        payload: message,
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
