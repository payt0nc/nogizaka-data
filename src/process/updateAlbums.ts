import { FocusPerformersType, SongType } from "../common/types";
import { IAlbum, IAlbumSong } from "../types/album";
import { ISong } from "../types/song";

export const recordAlbumSongType = (
  albumsList: Array<[string, IAlbum]>,
  songsList: Array<[string, ISong]>
) => {
  albumsList.forEach((albumElement: [string, IAlbum]) => {
    const album = albumElement[1];

    album.songs.forEach((albumSong: IAlbumSong) => {
      // Reset albumSong type.
      // albumSong.type = undefined;

      songsList.forEach((songElement: [string, ISong]) => {
        const song = songElement[1];
        if (song.title === albumSong.title) {
          albumSong.type = song.type;
        }
      });

      // console.log(albumSong.title, albumSong.type);
    });
  });
};

export const recordAlbumFocusPerformers = (
  albumsList: Array<[string, IAlbum]>,
  songsList: Array<[string, ISong]>
) => {
  albumsList.forEach((albumElement: [string, IAlbum]) => {
    const album = albumElement[1];

    album.songs.forEach((albumSong: IAlbumSong) => {
      songsList.forEach((songElement: [string, ISong]) => {
        const song = songElement[1];
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
