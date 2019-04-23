import { FukujinType, SongType, MemberNames } from "../utils/constants";

type ISongCreators = {
  lyrics: string[];
  compose: string[];
  arrange: string[];
  direct: string[];
};

export type ISongPerformers = {
  center: MemberNames[];
  fukujin: FukujinType | MemberNames[];
  solo: string;
  unit: string;
};

export type ISongFormations = {
  firstRow: MemberNames[];
  secondRow: MemberNames[];
  thirdRow: MemberNames[];
  fourthRow: MemberNames[];
};

export type ISong = {
  title: string;
  single: string;
  albums: string[];
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  musicVideo: string;
  type: SongType;
  creators: ISongCreators;
  performers: ISongPerformers;
  formations: ISongFormations;
};
