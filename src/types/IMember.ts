import { BloodType, PhotoAlbumType, UnitType } from "../common/constants";
import { ISite } from "./ISite";

export type IMember = {
  name: string;
  nameNotations: IMemberNameNotations;
  profileImage: IMemberProfileImage;
  singleImages: IMemberSingleImage[];
  join: JoinedGeneration;
  birthday: string;
  height: number;
  bloodType: BloodType;
  sites: ISite[];
  photoAlbums: IMemberPhotoAlbum[];
  units: IMemberUnit[];
  positionsHistory: IMemberPositionHistory[];
  positionsCounter: IMemberPositionsCounter;
  graduation: IMemberGraduation;
};

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

type IMemberSingleImage = {
  singleNumber: number;
  image: string;
};

type IMemberPhotoAlbum = {
  title: string;
  release: string;
  type: PhotoAlbumType;
  shopping: ISite[];
};
export enum JoinedGeneration {
  First = "1st",
  Second = "2nd",
  Third = "3rd",
  Fourth = "4th",
  Exchange = "exchange"
}

export enum PositionType {
  Center = "center",
  Fukujin = "fukujin",
  Selected = "selected",
  Under = "under",
  Trainee = "trainee",
  Skip = "skip",
  None = "none"
}

export type IMemberPositionHistory = {
  singleNumber: number;
  position: PositionType;
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
