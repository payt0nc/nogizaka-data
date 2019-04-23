import { IAlbum } from "../models/IAlbum";
import { ISong } from "../models/ISong";
import { FocusPerformersType, GITHUB_CONTENTS_PATH, SongType } from "../utils/constants";

const recordAlbumArtworks = (albumsList: IAlbum[]) => {
  const ARTWORK_BASE_NAME = GITHUB_CONTENTS_PATH + "src/images/artworks/albums/";
  albumsList.forEach(album => {
    const artworks = album.artworks;

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
  });
};

const recordAlbumSongType = (albumsList: IAlbum[], songsList: ISong[]) => {
  albumsList.forEach(album => {
    album.songs.forEach(albumSong => {
      songsList.forEach(song => {
        if (song.title === albumSong.title) {
          albumSong.type = song.type;
        }
      });
    });
  });
};

const recordAlbumFocusPerformers = (albumsList: IAlbum[], songsList: ISong[]) => {
  albumsList.forEach(album => {
    album.songs.forEach(albumSong => {
      songsList.forEach(song => {
        if (song.title === albumSong.title) {
          if (
            song.type === SongType.Title ||
            song.type === SongType.Under ||
            song.type === SongType.Coupling ||
            song.type === SongType.FirstGeneration ||
            song.type === SongType.SecondGeneration ||
            song.type === SongType.ThirdGeneration
          ) {
            albumSong.focusPerformers = {
              type: FocusPerformersType.Center,
              name: song.performers.center,
            };
          } else if (song.type === SongType.Solo) {
            albumSong.focusPerformers = {
              type: FocusPerformersType.Solo,
              name: song.formations.firstRow,
            };
          } else if (song.type === SongType.Unit) {
            albumSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: song.formations.firstRow,
            };
          } else if (song.type === SongType.None) {
            albumSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: song.performers.center,
            };
          }
        }
      });
    });
  });
};

export const updateAlbums = (albumsList: IAlbum[], songsList: ISong[]) => {
  recordAlbumArtworks(albumsList);
  recordAlbumSongType(albumsList, songsList);
  recordAlbumFocusPerformers(albumsList, songsList);
};
