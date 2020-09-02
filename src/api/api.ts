import {http} from "../libs/axios";

export const getItem = (id: number) => {
  try {
    return http.get(`/goods/lately/${id}`)
  } catch (e) {
    return e;
  }
}