import { ISite } from "./ISite";

export type ICd = {
  title: string;
  number: number;
  release: string;
  shopping: ISite[];
  songs: ICdSong[];
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
