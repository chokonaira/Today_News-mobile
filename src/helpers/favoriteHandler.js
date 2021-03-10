import { state } from "../redux/actions/getState";


export const favoriteHandler = async (article, dispatch) => {
  const { user } = await state();
  if (article.favorited) {
    dispatch(removeFavorite(article, user.email));
  }
  dispatch(addFavorite(article, user.email));
};