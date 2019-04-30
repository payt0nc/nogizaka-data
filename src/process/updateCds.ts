import { ResultSingles, RawSingle, ResultSingle } from "../models/ISingle";
import { ResultAlbums, RawAlbum, ResultAlbum } from "../models/IAlbum";
import {
  GITHUB_CONTENTS_PATH,
  OVERTURE,
  SongType,
  FocusPerformersType,
  CdType,
  SONGS,
} from "../utils/constants";
import { ISongs } from "../models/ISong";
import { convertPerformerNames } from "../utils/strings";
import {
  CdArtwork,
  RawCdSong,
  ResultCdSong,
  ResultCd,
} from "../models/commons";
import { arrayToObject } from "../utils/arrays";
import { ResultMembers } from "../models/IMember";

const SINGLE_ARTWORK_BASE_PATH =
  GITHUB_CONTENTS_PATH + "src/images/artworks/singles/";
const ALBUM_ARTWORK_BASE_PATH =
  GITHUB_CONTENTS_PATH + "src/images/artworks/albums/";

const convertArtworks = (
  rawCd: RawAlbum | RawSingle,
  basePath: string,
): {
  [type: string]: CdArtwork;
} => {
  const initialArtworks = Object.assign(
    {},
    ...rawCd.artworkTypes.map(artworkType => ({
      [artworkType]: {
        large: "",
        medium: "",
        small: "",
      },
    })),
  );

  if (rawCd.hasArtworks) {
    for (const key of Object.keys(initialArtworks)) {
      initialArtworks[key].large =
        basePath + rawCd.number.toString() + "/" + key + "_large.jpg";
      initialArtworks[key].medium =
        basePath + rawCd.number.toString() + "/" + key + "_medium.jpg";
      initialArtworks[key].small =
        basePath + rawCd.number.toString() + "/" + key + "_small.jpg";
    }
  } else {
    for (const key of Object.keys(initialArtworks)) {
      initialArtworks[key].large =
        GITHUB_CONTENTS_PATH + "src/images/artworks/artwork_no_image_large.png";
      initialArtworks[key].medium =
        GITHUB_CONTENTS_PATH +
        "src/images/artworks/artwork_no_image_medium.png";
      initialArtworks[key].small =
        GITHUB_CONTENTS_PATH + "src/images/artworks/artwork_no_image_small.png";
    }
  }

  return initialArtworks;
};

const convertCdSongs = (rawCdSongs: RawCdSong[]): ResultCdSong[] => {
  const initializedCdSongs = rawCdSongs.map(
    (rawCdSong): ResultCdSong => ({
      number: rawCdSong.number,
      title: rawCdSong.title,
      key: SONGS[rawCdSong.title].key,
      inCdType: rawCdSong.inCdType,
      type: SongType.None,
      artwork: {
        large: "",
        medium: "",
        small: "",
      },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    }),
  );

  return initializedCdSongs;
};

export const initializeAlbums = (rawAlbums: RawAlbum[]): ResultAlbums => {
  const initializedArray = rawAlbums.map(
    (rawAlbum): ResultAlbum => ({
      title: rawAlbum.title,
      number: rawAlbum.number,
      release: rawAlbum.release,
      artworks: convertArtworks(rawAlbum, ALBUM_ARTWORK_BASE_PATH),
      shopping: rawAlbum.shopping,
      songs: convertCdSongs(rawAlbum.songs),
    }),
  );

  return arrayToObject(initializedArray, "title");
};

export const initializeSingles = (rawSingles: RawSingle[]): ResultSingles => {
  const initializedArray: ResultSingle[] = rawSingles.map(
    (rawSingle): ResultSingle => {
      return {
        title: rawSingle.title,
        number: rawSingle.number,
        release: rawSingle.release,
        artworks: convertArtworks(rawSingle, SINGLE_ARTWORK_BASE_PATH),
        shopping: rawSingle.shopping,
        songs: convertCdSongs(rawSingle.songs),
        behindPerformers: rawSingle.behindPerformers,
      };
    },
  );

  return arrayToObject(initializedArray, "title");
};

export const recordCdSongArtworks = (
  cds: ResultSingles | ResultAlbums,
  songs: ISongs,
) => {
  for (const cd of Object.values(cds)) {
    for (const cdSong of cd.songs) {
      cdSong.artwork =
        cdSong.title !== OVERTURE
          ? songs[cdSong.title].artwork
          : cd.artworks[cdSong.inCdType[0]];
    }
  }
};

export const recordCdSongTypeFromSongs = (
  cds: ResultSingles | ResultAlbums,
  songs: ISongs,
) => {
  for (const cd of Object.values(cds)) {
    for (const cdSong of cd.songs) {
      if (cdSong.title !== OVERTURE) {
        cdSong.type = songs[cdSong.title].type;
      }
    }
  }
};

export const recordCdFocusPerformersFromSongs = (
  cds: ResultSingles | ResultAlbums,
  songs: ISongs,
  members: ResultMembers,
) => {
  for (const cd of Object.values(cds)) {
    for (const cdSong of cd.songs) {
      const song = songs[cdSong.title];

      if (cdSong.title !== OVERTURE) {
        if (
          song.type === SongType.Title ||
          song.type === SongType.Under ||
          song.type === SongType.Coupling ||
          song.type === SongType.Lead ||
          song.type === SongType.FirstGeneration ||
          song.type === SongType.SecondGeneration ||
          song.type === SongType.ThirdGeneration ||
          song.type === SongType.FourthGeneration
        ) {
          if (song.performers.center !== null) {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Center,
              name: convertPerformerNames(song.performers.center, members),
            };
          } else {
            cdSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: [],
            };
          }
        } else if (song.type === SongType.Solo) {
          cdSong.focusPerformers = {
            type: FocusPerformersType.Solo,
            name: convertPerformerNames(song.formations.firstRow, members),
          };
        } else if (song.type === SongType.Unit) {
          if (song.performers.unit !== "") {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: [song.performers.unit],
            };
          } else if (song.performers.center.length > 0) {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Center,
              name: convertPerformerNames(song.performers.center, members),
            };
          } else if (
            song.formations.firstRow.length +
              song.formations.secondRow.length +
              song.formations.thirdRow.length +
              song.formations.fourthRow.length <
            3
          ) {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: convertPerformerNames(
                [
                  ...song.formations.firstRow,
                  ...song.formations.secondRow,
                  ...song.formations.thirdRow,
                  ...song.formations.fourthRow,
                ],
                members,
              ),
            };
          } else {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: [],
            };
          }
        } else if (song.type === SongType.None) {
          if (song.performers.center.length > 0) {
            cdSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: convertPerformerNames(song.performers.center, members),
            };
          } else {
            cdSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: [],
            };
          }
        }
      }
    }
  }
};
