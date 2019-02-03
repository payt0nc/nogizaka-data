import { FocusPerformersType, SongType } from "../common/types";
import { ICd } from "./cd";

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
