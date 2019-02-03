import { FukujinType, SongType } from "../common/constants";

export type ISongPerformers = {
  center: string[];
  fukujin: FukujinType | string[];
  solo: string;
  unit: string;
};

export type ISongFormations = {
  firstRow: string[];
  secondRow: string[];
  thirdRow: string[];
  fourthRow: string[];
};

type ISongCreators = {
  lyrics: string[];
  compose: string[];
  arrange: string[];
  direct: string[];
};

export type ISong = {
  title: string;
  single: string;
  artwork: string;
  musicVideo: string;
  albums: string[];
  type: SongType;
  creators: ISongCreators;
  performers: ISongPerformers;
  formations: ISongFormations;
};
