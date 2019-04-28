import { ISingles } from "../models/ISingle";
import { IAlbums } from "../models/IAlbum";
import { GITHUB_CONTENTS_PATH, OVERTURE, SongType, FocusPerformersType } from "../utils/constants";
import { ISongs } from "../models/ISong";
import { convertPerformerNames } from "../utils/strings";

export const recordCdArtworks = (cds: ISingles | IAlbums, basePath: string) => {
  for (const cd of Object.values(cds)) {
    const artworks = cd.artworks;
    const songs = cd.songs;

    if (cd.hasArtworks) {
      for (const key of Object.keys(artworks)) {
        artworks[key].large = basePath + cd.number.toString() + "/" + key + "_large.jpg";
        artworks[key].medium = basePath + cd.number.toString() + "/" + key + "_medium.jpg";
        artworks[key].small = basePath + cd.number.toString() + "/" + key + "_small.jpg";
      }
    } else {
      for (const key of Object.keys(artworks)) {
        artworks[key].large = basePath + "artwork_no_image_large.png";
        artworks[key].medium = basePath + "artwork_no_image_medium.png";
        artworks[key].small = basePath + "artwork_no_image_small.png";
      }
    }

    for (const song of songs) {
      song.artwork = artworks[song.inCdType[0]];
    }
  }
};

export const recordSingleArtworks = (singles: ISingles) => {
  const ARTWORK_BASE_PATH = GITHUB_CONTENTS_PATH + "src/images/artworks/singles/";
  recordCdArtworks(singles, ARTWORK_BASE_PATH);
};

export const recordAlbumArtworks = (albums: IAlbums) => {
  const ARTWORK_BASE_PATH = GITHUB_CONTENTS_PATH + "src/images/artworks/albums/";
  recordCdArtworks(albums, ARTWORK_BASE_PATH);
};

export const recordCdSongTypeFromSongs = (cds: ISingles | IAlbums, songs: ISongs) => {
  for (const cd of Object.values(cds)) {
    for (const cdSong of cd.songs) {
      if (cdSong.title !== OVERTURE) {
        // TODO: Should change the key when ISongs key type got changed.
        cdSong.type = songs[cdSong.title].type;
      }
    }
  }
};

export const recordCdFocusPerformersFromSongs = (cds: ISingles | IAlbums, songs: ISongs) => {
  for (const cd of Object.values(cds)) {
    for (const cdSong of cd.songs) {
      // TODO: Should change the key when ISongs key type got changed.
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
              name: convertPerformerNames(song.performers.center),
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
            name: convertPerformerNames(song.formations.firstRow),
          };
        } else if (song.type === SongType.Unit) {
          if (song.performers.unit !== null && song.performers.unit !== "") {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: [song.performers.unit],
            };
          } else if (song.performers.center !== null) {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Center,
              name: convertPerformerNames(song.performers.center),
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
              name: convertPerformerNames([
                ...song.formations.firstRow,
                ...song.formations.secondRow,
                ...song.formations.thirdRow,
                ...song.formations.fourthRow,
              ]),
            };
          } else {
            cdSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: [],
            };
          }
        } else if (song.type === SongType.None) {
          if (song.performers.center !== null) {
            cdSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: convertPerformerNames(song.performers.center),
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
