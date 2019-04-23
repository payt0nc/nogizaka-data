import { IAlbums } from "../models/IAlbum";
import { ISingles } from "../models/ISingle";
import { ISongs } from "../models/ISong";

const recordSongSingle = (songs: ISongs, singles: ISingles) => {
  for (const song of Object.values(songs)) {
    song.single = "";

    for (const single of Object.values(singles)) {
      for (const singleSong of single.songs) {
        if (singleSong.title === song.title) {
          song.single = single.title;
          break;
        }
      }

      if (song.single !== "") {
        break;
      }
    }
  }
};

const recordSongAlbums = (songs: ISongs, albums: IAlbums) => {
  for (const song of Object.values(songs)) {
    song.albums = [];

    for (const album of Object.values(albums)) {
      for (const albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.albums.push(album.title);
        }
      }
    }
  }
};

const recordArtworks = (songs: ISongs, singles: ISingles, albums: IAlbums) => {
  for (const song of Object.values(songs)) {
    if (song.single !== "") {
      const single = singles[song.single];
      for (const singleSong of single.songs) {
        if (singleSong.title === song.title) {
          song.artwork = single.artworks[singleSong.inCdType[0]];
          break;
        }
      }
    } else if (song.albums.length > 0) {
      const album = albums[song.albums[0]];
      for (const albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.artwork = album.artworks[albumSong.inCdType[0]];
        }
      }
    }
  }
};

export const updateSongs = (
  songs: ISongs,
  singles: ISingles,
  albums: IAlbums,
) => {
  recordSongSingle(songs, singles);
  recordSongAlbums(songs, albums);
  recordArtworks(songs, singles, albums);
};
