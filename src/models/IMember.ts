import {
  BloodType,
  PhotoAlbumType,
  UnitType,
  MemberNames,
  PositionType,
  JoinedGeneration,
} from "../utils/constants";
import { Site } from "./commons";

type MemberProfileImage = {
  large: string;
  small: string;
};

export type IMember = {
  name: MemberNames;
  nameNotations: {
    firstName: string;
    lastName: string;
    firstNameFurigana: string;
    lastNameFurigana: string;
    firstNameEn: string;
    lastNameEn: string;
  };
  profileImage: MemberProfileImage;
  singleImages: {
    [singleNumber: string]: MemberProfileImage;
  };
  join: JoinedGeneration;
  birthday: string;
  height: number;
  bloodType: BloodType;
  sites: Site[];
  photoAlbums: {
    title: string;
    release: string;
    type: PhotoAlbumType;
    shopping: Site[];
  }[];
  units: {
    name: string;
    type: UnitType;
  }[];
  positionsHistory: {
    [singleNumber: string]: PositionType;
  };
  positionsCounter: {
    center: number;
    fukujin: number;
    selected: number;
    under: number;
  };
  graduation: {
    isGraduated: boolean;
    graduatedDate: string;
  };
};

export type IMembers = {
  [name: string]: IMember;
};
