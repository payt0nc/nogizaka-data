import {
  IMember,
  JoinedGeneration,
  PhotoAlbumType,
  PositionType,
} from "../types/member";

const member1: IMember = {
  name: "member name",
  nameNotations: {
    firstName: "first name",
    lastName: "last name",
    lastNameEn: "english",
    firstNameFurigana: "furigana",
    firstNameEn: "english",
    lastNameFurigana: "furigana",
  },
  profileImage: {
    large: "path",
    small: "path",
  },
  join: JoinedGeneration.First,
  birthday: "yyyy-mm-dd",
  height: 160,
  bloodType: "blood type",
  sites: [
    {
      title: "Official",
      url: "url",
    },
    {
      title: "Instagram",
      url: "url",
    },
  ],
  photoAlbums: [
    {
      title: "title",
      release: "yyyy-mm-dd",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "url",
        },
      ],
    },
  ],
  units: ["unit 1", "unit 2"],
  corps: ["corp 1", "corp 2"],
  positionsHistory: [
    {
      singleNumber: 1,
      position: PositionType.Fukujin,
    },
    {
      singleNumber: 2,
      position: PositionType.Selected,
    },
  ],
  positionsCounter: {
    center: 0,
    fukujin: 1,
    selected: 1,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "yyyy-mm-dd",
  },
};

const member2: IMember = {
  name: "member name",
  nameNotations: {
    firstName: "first name",
    lastName: "last name",
    firstNameFurigana: "furigana",
    lastNameFurigana: "furigana",
    firstNameEn: "english",
    lastNameEn: "english",
  },
  profileImage: {
    large: "path",
    small: "path",
  },
  join: JoinedGeneration.First,
  birthday: "yyyy-mm-dd",
  height: 160,
  bloodType: "blood type",
  sites: [
    {
      title: "Official",
      url: "url",
    },
    {
      title: "Instagram",
      url: "url",
    },
  ],
  photoAlbums: [
    {
      title: "title",
      release: "yyyy-mm-dd",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "url",
        },
      ],
    },
  ],
  units: ["unit 1", "unit 2"],
  corps: ["corp 1", "corp 2"],
  positionsHistory: [
    {
      singleNumber: 1,
      position: PositionType.Fukujin,
    },
    {
      singleNumber: 2,
      position: PositionType.Selected,
    },
  ],
  positionsCounter: {
    center: 0,
    fukujin: 1,
    selected: 1,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "yyyy-mm-dd",
  },
};

export const members = {
  "member-name-1": member1,
  "member-name-2": member2,
};
