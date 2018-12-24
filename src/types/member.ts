import { BloodType, ISite, PhotoAlbumType, UnitType } from "../common/types";

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

interface IMemberProfileImage {
  large: string;
  small: string;
}

interface IMemberSingleImage {
  singleNumber: number;
  image: string;
}

interface IMemberPhotoAlbum {
  title: string;
  release: string;
  type: PhotoAlbumType;
  shopping: ISite[];
}

interface IMemberNameNotations {
  firstName: string;
  lastName: string;
  firstNameFurigana: string;
  lastNameFurigana: string;
  firstNameEn: string;
  lastNameEn: string;
}

export interface IMemberPositionHistory {
  singleNumber: number;
  position: PositionType;
}

interface IMemberPositionsCounter {
  center: number;
  fukujin: number;
  selected: number;
  under: number;
}

interface IMemberGraduation {
  isGraduated: boolean;
  graduatedDate: string;
}

export interface IMemberUnit {
  name: string;
  type: UnitType;
}

export interface IMember {
  name: string;
  nameNotations: IMemberNameNotations;
  profileImage: IMemberProfileImage;
  singleImages: IMemberSingleImage[] | undefined;
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
}
