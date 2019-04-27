import { IAlbums } from "../models/IAlbum";
import { ISongs } from "../models/ISong";
import { FocusPerformersType, GITHUB_CONTENTS_PATH, SongType, OVERTURE } from "../utils/constants";
import { convertPerformerNames } from "../utils/strings";

const recordAlbumArtworks = (albums: IAlbums) => {
  const ARTWORK_BASE_NAME = GITHUB_CONTENTS_PATH + "src/images/artworks/albums/";
  for (const album of Object.values(albums)) {
    const artworks = album.artworks;
    const songs = album.songs;

    if (album.hasArtworks) {
      for (const key of Object.keys(artworks)) {
        artworks[key].large = ARTWORK_BASE_NAME + album.number.toString() + "/" + key + "_large.jpg";
        artworks[key].medium = ARTWORK_BASE_NAME + album.number.toString() + "/" + key + "_medium.jpg";
        artworks[key].small = ARTWORK_BASE_NAME + album.number.toString() + "/" + key + "_small.jpg";
      }
    } else {
      for (const key of Object.keys(artworks)) {
        artworks[key].large = ARTWORK_BASE_NAME + "artwork_no_image_large.png";
        artworks[key].medium = ARTWORK_BASE_NAME + "artwork_no_image_medium.png";
        artworks[key].small = ARTWORK_BASE_NAME + "artwork_no_image_small.png";
      }
    }

    for (const song of songs) {
      song.artwork = artworks[song.inCdType[0]];
    }
  }
};

const recordAlbumSongType = (albums: IAlbums, songs: ISongs) => {
  for (const album of Object.values(albums)) {
    for (const albumSong of album.songs) {
      if (albumSong.title !== OVERTURE) {
        albumSong.type = songs[albumSong.title].type;
      }
    }
  }
};

const recordAlbumFocusPerformers = (albums: IAlbums, songs: ISongs) => {
  for (const album of Object.values(albums)) {
    for (const albumSong of album.songs) {
      const song = songs[albumSong.title];
      if (albumSong.title !== OVERTURE) {
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
            albumSong.focusPerformers = {
              type: FocusPerformersType.Center,
              name: convertPerformerNames(song.performers.center),
            };
          } else {
            albumSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: [],
            };
          }
        } else if (song.type === SongType.Solo) {
          albumSong.focusPerformers = {
            type: FocusPerformersType.Solo,
            name: convertPerformerNames(song.formations.firstRow),
          };
        } else if (song.type === SongType.Unit) {
          if (song.performers.unit !== null && song.performers.unit !== "") {
            albumSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: [song.performers.unit],
            };
          } else if (song.performers.center !== null) {
            albumSong.focusPerformers = {
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
            albumSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: convertPerformerNames([
                ...song.formations.firstRow,
                ...song.formations.secondRow,
                ...song.formations.thirdRow,
                ...song.formations.fourthRow,
              ]),
            };
          } else {
            albumSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: [],
            };
          }
        } else if (song.type === SongType.None) {
          if (song.performers.center !== null) {
            albumSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: convertPerformerNames(song.performers.center),
            };
          } else {
            albumSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: [],
            };
          }
        }
      }
    }
  }
};

export const updateAlbums = (albums: IAlbums, songs: ISongs) => {
  recordAlbumArtworks(albums);
  recordAlbumSongType(albums, songs);
  recordAlbumFocusPerformers(albums, songs);
};
