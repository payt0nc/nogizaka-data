import { BloodType, PhotoAlbumType, UnitType, MemberNames } from "../utils/constants";
import { ISite } from "./ISite";

type IMemberNameNotations = {
  firstName: string;
  lastName: string;
  firstNameFurigana: string;
  lastNameFurigana: string;
  firstNameEn: string;
  lastNameEn: string;
};

type IMemberProfileImage = {
  large: string;
  small: string;
};

type IMemberSingleImages = {
  [singleNumber: string]: IMemberProfileImage;
};

type IMemberPhotoAlbum = {
  title: string;
  release: string;
  type: PhotoAlbumType;
  shopping: ISite[];
};

export enum JoinedGeneration {
  First = "first",
  Second = "second",
  Third = "third",
  Fourth = "fourth",
  Exchange = "exchange",
}

export enum PositionType {
  Center = "center",
  Fukujin = "fukujin",
  Selected = "selected",
  Under = "under",
  Trainee = "trainee",
  Skip = "skip",
  None = "none",
}

export type IMemberPositionHistory = {
  [singleNumber: string]: PositionType;
};

type IMemberPositionsCounter = {
  center: number;
  fukujin: number;
  selected: number;
  under: number;
};

type IMemberGraduation = {
  isGraduated: boolean;
  graduatedDate: string;
};

export type IMemberUnit = {
  name: string;
  type: UnitType;
};

export type IMember = {
  name: MemberNames;
  nameNotations: IMemberNameNotations;
  profileImage: IMemberProfileImage;
  singleImages: IMemberSingleImages;
  join: JoinedGeneration;
  birthday: string;
  height: number;
  bloodType: BloodType;
  sites: ISite[];
  photoAlbums: IMemberPhotoAlbum[];
  units: IMemberUnit[];
  positionsHistory: IMemberPositionHistory;
  positionsCounter: IMemberPositionsCounter;
  graduation: IMemberGraduation;
};
