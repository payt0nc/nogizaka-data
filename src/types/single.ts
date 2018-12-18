import { SongType } from "../common/types";
import { ICd } from "./cd";

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

export interface ISingle extends ICd {
  songs: ISingleSong[];
}
