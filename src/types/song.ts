import { SongType } from "../common/types";

export interface ISongPerformers {
  center: string[] | undefined;
  fukujin: string[] | undefined;
  selected: string[] | undefined;
  solo: string | undefined;
  unit: string | undefined;
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
  albums: string[] | undefined;
  type: SongType;
  performers: ISongPerformers;
  formations: ISongFormations;
}
