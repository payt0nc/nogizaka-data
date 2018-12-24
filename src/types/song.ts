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
  fourthRow: string[];
}

interface ISongCreators {
  lyrics: string;
  compose: string;
  arrange: string;
  direct: string;
}

export interface ISong {
  title: string;
  artwork: string;
  single: string;
  albums: string[];
  type: SongType;
  creators: ISongCreators | undefined;
  performers: ISongPerformers;
  formations: ISongFormations;
}
