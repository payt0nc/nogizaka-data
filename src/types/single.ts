import { ISite } from "../common/types";
import { SongType, ISongPerformers } from "./song";

export enum CdType {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  T = "T"
}

interface ISingleSong {
  number: number;
  title: string;
  inType: CdType;
  type: SongType;
}

export interface ISingle {
  title: string;
  number: number;
  release: string;
  shopping: ISite[];
  songs: ISingleSong[]
}
