import { FukujinType, SongType, MemberNames } from "../utils/constants";

export type ISong = {
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
  creators: {
    lyrics: string[];
    compose: string[];
    arrange: string[];
    direct: string[];
  };
  performers: {
    center: MemberNames[];
    fukujin: FukujinType | MemberNames[];
    solo: string;
    unit: string;
  };
  formations: {
    firstRow: MemberNames[];
    secondRow: MemberNames[];
    thirdRow: MemberNames[];
    fourthRow: MemberNames[];
  };
};

export type ISongs = {
  [title: string]: ISong;
};
