import store from "../store";

export const state = async () => {
  const {
    auth: { user },
    favorites: { favorites },
  } = await store.getState();

  return { user, favorites };
};
