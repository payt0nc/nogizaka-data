import { SongType } from "../common/types";
import { IAlbum } from "../types/album";

const album1: IAlbum = {
  title: "title",
  number: 1,
  release: "yyyy-mm-dd",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "title",
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "title",
      type: SongType.Title,
      focusPerformers: undefined
    }
  ]
};

const album2: IAlbum = {
  title: "title",
  number: 1,
  release: "yyyy-mm-dd",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "title",
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "title",
      type: SongType.Title,
      focusPerformers: undefined
    }
  ]
};

export const albums = {
  "album-title-1": album1,
  "album-title-2": album2
};
