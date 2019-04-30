import { ResultCd } from "./commons";

export type IAlbum = ResultCd;

export type IAlbums = {
  [title: string]: IAlbum;
};
