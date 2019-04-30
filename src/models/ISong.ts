import { FukujinType, SongType, MemberNames } from "../utils/constants";

type Creators = {
  lyrics: string[];
  compose: string[];
  arrange: string[];
  direct: string[];
};

type Performers = {
  center: MemberNames[];
  fukujin: FukujinType | MemberNames[];
  solo: string;
  unit: string;
};

type Formations = {
  firstRow: MemberNames[];
  secondRow: MemberNames[];
  thirdRow: MemberNames[];
  fourthRow: MemberNames[];
};

export type RawSong = {
  title: string;
  musicVideo: string;
  type: SongType;
  creators: Creators;
  performers: Performers;
  formations: Formations;
};

export type ResultSong = {
  title: string;
  key: string;
  single: {
    title: string;
    number: string;
  };
  albums: {
    title: string;
    number: string;
  }[];
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  musicVideo: string;
  type: SongType;
  creators: Creators;
  performers: Performers;
  performersTag: {
    name: string;
    singleNumber: string;
  };
  formations: Formations;
};

export type ResultSongs = {
  [title: string]: ResultSong;
};
