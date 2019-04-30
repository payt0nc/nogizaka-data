import {
  BloodType,
  PhotoAlbumType,
  UnitType,
  MemberNames,
  PositionType,
  JoinedGeneration,
  GlowStickColorType,
} from "../utils/constants";
import { Site } from "./commons";

type NameNotations = {
  firstName: string;
  lastName: string;
  firstNameFurigana: string;
  lastNameFurigana: string;
  firstNameEn: string;
  lastNameEn: string;
};

type GlowStickColor = {
  left: GlowStickColorType;
  right: GlowStickColorType;
};

type PhotoAlbum = {
  title: string;
  release: string;
  type: PhotoAlbumType;
  shopping: Site[];
};

type MemberProfileImage = {
  large: string;
  small: string;
};

type Graduation = {
  isGraduated: boolean;
  graduatedDate: string;
};

export type RawMember = {
  name: MemberNames;
  nameNotations: NameNotations;
  glowStickColor: GlowStickColor;
  join: JoinedGeneration;
  birthday: string;
  height: number;
  bloodType: BloodType;
  sites: Site[];
  photoAlbums: PhotoAlbum[];
  graduation: Graduation;
};

export type ResultMember = {
  name: MemberNames;
  nameNotations: NameNotations;
  glowStickColor: GlowStickColor;
  profileImage: MemberProfileImage;
  singleImages: {
    [singleNumber: string]: MemberProfileImage;
  };
  join: JoinedGeneration;
  birthday: string;
  height: number;
  bloodType: BloodType;
  sites: Site[];
  photoAlbums: PhotoAlbum[];
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
  graduation: Graduation;
};

export type ResultMembers = {
  [name: string]: ResultMember;
};
