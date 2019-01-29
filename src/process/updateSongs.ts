import { IAlbum, IAlbumSong } from "../types/album";
import { ISingle, ISingleSong } from "../types/single";
import { ISong } from "../types/song";

export const recordSongAlbums = (
  songsList: [string, ISong][],
  albumsList: [string, IAlbum][]
) => {
  songsList.forEach((songElement: [string, ISong]) => {
    const song = songElement[1];

    // Reset song albums.
    song.albums = [];

    for (let albumElement of albumsList) {
      const album = albumElement[1];

      for (let albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.albums.push(album.title);
        }
      }
    }
  });
};

export const recordSongSingle = (
  songsList: [string, ISong][],
  singlesList: [string, ISingle][]
) => {
  songsList.forEach((songElement: [string, ISong]) => {
    const song = songElement[1];

    // Reset song single.
    song.single = "";

    for (let singleElement of singlesList) {
      const single = singleElement[1];

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
