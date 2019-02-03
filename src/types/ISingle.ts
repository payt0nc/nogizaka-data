import { CdType, FocusPerformersType, SongType } from "../common/constants";
import { ICd } from "./ICd";

type IFocusPerformers = {
  type: FocusPerformersType;
  name: string[];
};

export type ISingleSong = {
  number: number;
  title: string;
  inType: CdType;
  type: SongType;
  focusPerformers: IFocusPerformers;
};

type ISingleBehindPerformers = {
  trainees: string[];
  skips: string[];
};

export type ISingle = ICd & {
  songs: ISingleSong[];
  behindPerformers: ISingleBehindPerformers;
};
