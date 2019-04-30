import { ResultAlbums } from "../models/IAlbum";
import { ISingles } from "../models/ISingle";
import { ISongs } from "../models/ISong";

export const recordSongSingle = (songs: ISongs, singles: ISingles) => {
  for (const song of Object.values(songs)) {
    song.single.title = "";

    for (const single of Object.values(singles)) {
      for (const singleSong of single.songs) {
        if (singleSong.title === song.title) {
          song.single.title = single.title;
          song.single.number = single.number;
          break;
        }
      }

      if (song.single.title !== "") {
        break;
      }
    }
  }
};

export const recordSongAlbums = (songs: ISongs, albums: ResultAlbums) => {
  for (const song of Object.values(songs)) {
    song.albums = [];

    for (const album of Object.values(albums)) {
      for (const albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.albums.push({
            title: album.title,
            number: album.number,
          });
        }
      }
    }

    song.albums.sort(
      (albumA, albumB) =>
        new Date(albums[albumA.title].release).getTime() -
        new Date(albums[albumB.title].release).getTime(),
    );
  }
};

export const recordArtworks = (
  songs: ISongs,
  singles: ISingles,
  albums: ResultAlbums,
) => {
  for (const song of Object.values(songs)) {
    if (song.single.title !== "") {
      const single = singles[song.single.title];
      for (const singleSong of single.songs) {
        if (singleSong.title === song.title) {
          song.artwork = single.artworks[singleSong.inCdType[0]];
          break;
        }
      }
    } else if (song.albums.length > 0) {
      const album = albums[song.albums[0].title];
      for (const albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.artwork = album.artworks[albumSong.inCdType[0]];
        }
      }
    }
  }
};
