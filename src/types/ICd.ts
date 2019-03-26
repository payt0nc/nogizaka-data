import { CdType, FocusPerformersType, SongType } from "../common/constants";
import { ISite } from "./ISite";

export type ICd = {
  title: string;
  number: string;
  release: string;
  hasArtworks: boolean;
  artworks: ICdArtwork[];
  shopping: ISite[];
  songs: ICdSong[];
};

export type ICdArtwork = {
  type: CdType;
  urls: {
    large: string;
    medium: string;
    small: string;
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
