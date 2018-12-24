import { CdType, FocusPerformersType, SongType } from "../common/types";
import { ICd } from "./cd";

interface IFocusPerformers {
  type: FocusPerformersType;
  name: string[];
}

export interface ISingleSong {
  number: number;
  title: string;
  inType: CdType;
  type: SongType;
  focusPerformers: IFocusPerformers | undefined;
}

interface ISingleBehindPerformers {
  trainees: string[];
  skips: string[];
}

export interface ISingle extends ICd {
  songs: ISingleSong[];
  behindPerformers: ISingleBehindPerformers;
}
