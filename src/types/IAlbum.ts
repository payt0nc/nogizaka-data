import { FocusPerformersType, SongType } from "../common/constants";
import { ICd } from "./ICd";

type IFocusPerformers = {
  type: FocusPerformersType;
  name: string[];
};

export type IAlbumSong = {
  number: number;
  title: string;
  type: SongType;
  focusPerformers: IFocusPerformers;
};

export type IAlbum = ICd & {
  songs: IAlbumSong[];
};
