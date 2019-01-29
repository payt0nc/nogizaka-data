import { IAlbum, IAlbumSong } from "../types/album";
import { ISingle, ISingleSong } from "../types/single";
import { ISong } from "../types/song";

export const recordSongAlbums = (
  songsList:  ISong[],
  albumsList:  IAlbum[]
) => {
  songsList.forEach((song:  ISong) => {
    // Reset song albums.
    song.albums = [];

    for (let album of albumsList) {
      for (let albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.albums.push(album.title);
        }
      }
    }
  });
};

export const recordSongSingle = (
  songsList:  ISong[],
  singlesList:  ISingle[]
) => {
  songsList.forEach((song:  ISong) => {
    // Reset song single.
    song.single = "";

    for (let single of singlesList) {
      for (let singleSong of single.songs) {
        if (singleSong.title === song.title) {
          song.single = single.title;
          break;
        }
      }

      if (song.single !== "") {
        break;
      }
    }
  });
};
