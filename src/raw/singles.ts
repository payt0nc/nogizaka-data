import { SongType } from "../common/types";
import { CdType, ISingle } from "../types/single";

const single1: ISingle = {
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
      inType: CdType.A,
      type: SongType.Title
    },
    {
      number: 1,
      title: "title",
      inType: CdType.A,
      type: SongType.Title
    }
  ]
};

const single2: ISingle = {
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
      inType: CdType.A,
      type: SongType.Title
    },
    {
      number: 1,
      title: "title",
      inType: CdType.A,
      type: SongType.Title
    }
  ]
};

export const singles = {
  "single-title-1": single1,
  "single-title-2": single2
};
