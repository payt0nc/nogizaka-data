import { IAlbum, IAlbums } from "../models/IAlbum";
import { ISingle, ISingles } from "../models/ISingle";
import { ISong } from "../models/ISong";

const recordSongAlbums = (songsList: ISong[], albumsList: IAlbum[]) => {
  songsList.forEach(song => {
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

const recordArtworks = (songs: ISong[], singles: ISingles, albums: IAlbums) => {
  for (const song of songs) {
    if (song.single !== "") {
      // song.artworks = singles[song.single].artworks;
    } else if (song.albums.length > 0) {
      // song.artworks = albums[song.albums[0]].artworks;
    }
  }
};

export const updateSongs = (
  songsList: ISong[],
  singlesList: ISingle[],
  albumsList: IAlbum[],
  singles: ISingles,
  albums: IAlbums,
) => {
  recordSongSingle(songsList, singlesList);
  recordSongAlbums(songsList, albumsList);
  recordArtworks(songsList, singles, albums);
};
