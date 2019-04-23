import { CdType, FocusPerformersType, SongType } from "../utils/constants";
import { ISite } from "./ISite";

type IFocusPerformers = {
  type: FocusPerformersType;
  name: string[];
};

export type ICdSong = {
  number: number;
  title: string;
  inCdType: CdType[];
  type: SongType;
  artwork: string;
  focusPerformers: IFocusPerformers;
};

export type ICd = {
  title: string;
  number: string;
  release: string;
  hasArtworks: boolean;
  artworks: {
    [type: string]: {
      large: string;
      medium: string;
      small: string;
    };
  };
  shopping: ISite[];
  songs: ICdSong[];
};
