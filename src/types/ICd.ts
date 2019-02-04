import { ISite } from "./ISite";
import { CdType, FocusPerformersType, SongType } from "../common/constants";

export type ICd = {
  title: string;
  number: number;
  release: string;
  artworks: ICdArtworks[];
  shopping: ISite[];
  songs: ICdSong[];
};

export type ICdArtworks = {
  type: CdType;
  url: string;
};

export type ICdSong = {
  number: number;
  title: string;
  inCdType: CdType[];
  type: SongType;
  artwork: string;
  focusPerformers: IFocusPerformers;
}

type IFocusPerformers = {
  type: FocusPerformersType;
  name: string[];
};
