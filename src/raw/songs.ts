import { ISong, SongType } from "../types/song";

const songTitle1: ISong = {
  title: "song title",
  single: "single title",
  album: ["album title", "album title"],
  type: SongType.Title,
  performers: {
    center: ["center"], // or [],
    fukujin: ["member name", "member name"], // or []
    selected: ["member name", "member name"], // or []
    solo: "solo member", // or "",
    unit: "unit name" // or "",
  },
  formations: {
    firstRow: ["member name", "member name"],
    secondRow: ["member name", "member name"],
    thirdRow: ["member name", "member name"]
  }
};

const songTitle2: ISong = {
  title: "song title",
  single: "single title",
  album: ["album title", "album title"],
  type: SongType.None,
  performers: {
    center: ["center"], // or [],
    fukujin: ["member name", "member name"], // or []
    selected: ["member name", "member name"], // or []
    solo: "solo member", // or "",
    unit: "unit name" // or "",
  },
  formations: {
    firstRow: ["member name", "member name"],
    secondRow: ["member name", "member name"],
    thirdRow: ["member name", "member name"]
  }
};

export const songs = {
  "song-title-1": songTitle1,
  "song-title-2": songTitle2
};
