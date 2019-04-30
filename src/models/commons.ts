import {
  CdType,
  FukujinType,
  FocusPerformersType,
  MemberNames,
  SongType,
} from "../utils/constants";

export type Site = {
  title: string;
  url: string;
};

type CdSong = {
  number: number;
  title: string;
  key: string;
  inCdType: CdType[];
  type: SongType;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  focusPerformers: {
    type: FocusPerformersType;
    name: string[];
  };
};

export type ResultCd = {
  title: string;
  number: string;
  release: string;
  hasArtworks: boolean;
  artworks: {
    [type: string]: {
      large: string;
      medium: string;
      small: string;
    };
  };
  shopping: Site[];
  songs: CdSong[];
};
