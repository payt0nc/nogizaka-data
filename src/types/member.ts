import { ISite } from "../common/types";

export enum JoinedGeneration {
  First = "1st",
  Second = "2nd",
  Third = "3rd",
  Fourth = "4th",
  Exchange = "exchange"
}

export enum PhotoAlbumType {
  PhotoAlbum = "photo album",
  PhotoBook = "photo book"
}

export enum PositionType {
  Center = "center",
  Fukujin = "fukujin",
  Selected = "selected",
  Under = "under"
}

interface IMemberProfileImage {
  large: string;
  small: string;
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

interface IMemberPositionHistory {
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

export interface IMember {
  name: string;
  nameNotations: IMemberNameNotations;
  profileImage: IMemberProfileImage;
  join: JoinedGeneration;
  birthday: string;
  height: number;
  bloodType: string;
  sites: ISite[];
  photoAlbums: IMemberPhotoAlbum[];
  units: string[];
  corps: string[];
  positionsHistory: IMemberPositionHistory[];
  positionsCounter: IMemberPositionsCounter;
  graduation: IMemberGraduation;
}
