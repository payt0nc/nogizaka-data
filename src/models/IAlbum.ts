import { ResultCd, RawCd } from "./commons";

export type RawAlbum = RawCd;

export type ResultAlbum = ResultCd;

export type ResultAlbums = {
  [title: string]: ResultAlbum;
};
