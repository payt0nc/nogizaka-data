import { IAlbum } from "../types/IAlbum";
import { ISingle } from "../types/ISingle";
import { ISong } from "../types/ISong";

export const updateSongs = (songsList: ISong[], singlesList: ISingle[], albumsList: IAlbum[]) => {
  recordSongSingle(songsList, singlesList);
  recordSongAlbums(songsList, albumsList);
};

const recordSongAlbums = (songsList: ISong[], albumsList: IAlbum[]) => {
  songsList.forEach(song => {
    // Reset song albums.
    song.albums = [];

    for (const album of albumsList) {
      for (const albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.albums.push(album.title);
        }
      }
    }
  });
};

const recordSongSingle = (songsList: ISong[], singlesList: ISingle[]) => {
  songsList.forEach(song => {
    // Reset song single.
    song.single = "";

    for (const single of singlesList) {
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
  });
};
