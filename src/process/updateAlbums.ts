import { FocusPerformersType, SongType } from "../common/constants";
import { IAlbum, IAlbumSong } from "../types/IAlbum";
import { ISong } from "../types/ISong";

export const recordAlbumSongType = (
  albumsList: IAlbum[],
  songsList: ISong[]
) => {
  albumsList.forEach((album: IAlbum) => {
    album.songs.forEach((albumSong: IAlbumSong) => {
      // Reset albumSong type.
      // albumSong.type = undefined;

      songsList.forEach((song: ISong) => {
        if (song.title === albumSong.title) {
          albumSong.type = song.type;
        }
      });

      // console.log(albumSong.title, albumSong.type);
    });
  });
};

export const recordAlbumFocusPerformers = (
  albumsList: IAlbum[],
  songsList: ISong[]
) => {
  albumsList.forEach((album: IAlbum) => {
    album.songs.forEach((albumSong: IAlbumSong) => {
      songsList.forEach((song: ISong) => {
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
