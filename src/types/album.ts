import { FocusPerformersType, SongType } from "../common/types";
import { ICd } from "./cd";

interface IFocusPerformers {
  type: FocusPerformersType;
  name: string[];
}

interface IAlbumSong {
  number: number;
  title: string;
  type: SongType;
  focusPerformers: IFocusPerformers | undefined;
}

export interface IAlbum extends ICd {
  songs: IAlbumSong[];
}
