import { SongType } from "../common/types";
import { ICd } from "./cd";

interface IAlbumSong {
  number: number;
  title: string;
  type: SongType;
}

export interface IAlbum extends ICd {
  songs: IAlbumSong[];
}
