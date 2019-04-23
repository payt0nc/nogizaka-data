import { FukujinType, SongType } from "../utils/constants";

type ISongCreators = {
  lyrics: string[];
  compose: string[];
  arrange: string[];
  direct: string[];
};

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

export type ISong = {
  title: string;
  single: string;
  artworks: {
    large: string;
    medium: string;
    small: string;
  };
  musicVideo: string;
  albums: string[];
  type: SongType;
  creators: ISongCreators;
  performers: ISongPerformers;
  formations: ISongFormations;
};
