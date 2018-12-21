import { CdType, SongType } from "../common/types";
import { ICd } from "./cd";

export interface ISingleSong {
  number: number;
  title: string;
  inType: CdType;
  type: SongType;
}

interface ISingleBehindPerformers {
  trainees: string[];
  skips: string[];
}

export interface ISingle extends ICd {
  songs: ISingleSong[];
  behindPerformers: ISingleBehindPerformers;
}
