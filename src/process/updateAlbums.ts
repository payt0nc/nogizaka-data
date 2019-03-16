import { FocusPerformersType, SongType } from "../common/constants";
import { IAlbum } from "../types/IAlbum";
import { ICdSong, ICdArtwork } from "../types/ICd";
import { ISong } from "../types/ISong";

export const updateAlbums = (albumsList: IAlbum[], songsList: ISong[]) => {
  recordAlbumArtworks(albumsList);
  recordAlbumSongType(albumsList, songsList);
  recordAlbumFocusPerformers(albumsList, songsList);
};

const recordAlbumArtworks = (albumsList: IAlbum[]) => {
  const artworkBasename =
    "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/artworks/albums/";
  albumsList.forEach(album => {
    const albumNumber = album.number;
    album.artworks.forEach(artwork => {
      artwork.urls.large =
        artworkBasename +
        albumNumber.toString() +
        "/" +
        artwork.type +
        "_450.jpg";
      artwork.urls.medium =
        artworkBasename +
        albumNumber.toString() +
        "/" +
        artwork.type +
        "_150.jpg";
      artwork.urls.small =
        artworkBasename +
        albumNumber.toString() +
        "/" +
        artwork.type +
        "_100.jpg";
    });
  });
};

const recordAlbumSongType = (albumsList: IAlbum[], songsList: ISong[]) => {
  albumsList.forEach(album => {
    album.songs.forEach(albumSong => {
      // Reset albumSong type.
      // albumSong.type = undefined;

      songsList.forEach(song => {
        if (song.title === albumSong.title) {
          albumSong.type = song.type;
        }
      });

      // console.log(albumSong.title, albumSong.type);
    });
  });
};

const recordAlbumFocusPerformers = (
  albumsList: IAlbum[],
  songsList: ISong[]
) => {
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
              name: song.performers.center
            };
          } else if (song.type === SongType.Solo) {
            albumSong.focusPerformers = {
              type: FocusPerformersType.Solo,
              name: song.formations.firstRow
            };
          } else if (song.type === SongType.Unit) {
            albumSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: song.formations.firstRow
            };
          } else if (song.type === SongType.None) {
            albumSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: song.performers.center
            };
          }
        }
      });

      // console.log(albumSong.title, albumSong.focusPerformers);
    });
  });
};
