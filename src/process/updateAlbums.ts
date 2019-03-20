import { FocusPerformersType, SongType } from "../common/constants";
import { IAlbum } from "../types/IAlbum";
import { ISong } from "../types/ISong";

const recordAlbumArtworks = (albumsList: IAlbum[]) => {
  const artworkBasename =
    "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/artworks/";
  albumsList.forEach(album => {
    if (album.hasArtworks) {
      album.artworks.forEach(artwork => {
        artwork.urls.large =
          artworkBasename +
          "albums/" +
          album.number.toString() +
          "/" +
          artwork.type +
          "_450.jpg";
        artwork.urls.medium =
          artworkBasename +
          "albums/" +
          album.number.toString() +
          "/" +
          artwork.type +
          "_150.jpg";
        artwork.urls.small =
          artworkBasename +
          "albums/" +
          album.number.toString() +
          "/" +
          artwork.type +
          "_100.jpg";
      });
    } else {
      album.artworks.forEach(artwork => {
        artwork.urls.large = artworkBasename + "artwork_no_image_large.png";
        artwork.urls.medium = artworkBasename + "artwork_no_image_medium.png";
        artwork.urls.small = artworkBasename + "artwork_no_image_small.png";
      });
    }
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

export const updateAlbums = (albumsList: IAlbum[], songsList: ISong[]) => {
  recordAlbumArtworks(albumsList);
  recordAlbumSongType(albumsList, songsList);
  recordAlbumFocusPerformers(albumsList, songsList);
};
