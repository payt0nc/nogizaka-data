import { ISite } from "./ISite";
import { CdType, FocusPerformersType, SongType } from "../common/constants";

export type ICd = {
  title: string;
  number: number;
  release: string;
  artworks: ICdArtwork[];
  shopping: ISite[];
  songs: ICdSong[];
};

export type ICdArtwork = {
  type: CdType;
  urls: {
    450: string;
    150: string;
    100: string;
  }
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
