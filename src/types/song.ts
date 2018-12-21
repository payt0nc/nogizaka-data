import { FukujinType, SongType } from "../common/types";

export interface ISongPerformers {
  center: string[];
  fukujin: FukujinType | string[];
  solo: string;
  unit: string;
}

export interface ISongFormations {
  firstRow: string[];
  secondRow: string[];
  thirdRow: string[];
}

export interface ISong {
  title: string;
  artwork: string;
  single: string;
  albums: string[];
  type: SongType;
  performers: ISongPerformers;
  formations: ISongFormations;
}
