import { store } from "store/store";

export default (type, payload) =>
  store.dispatch({
    type,
    ...payload,
  });

