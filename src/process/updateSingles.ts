import { SongType } from "../common/types";
import { FocusPerformersType, ISingle, ISingleSong } from "../types/single";
import { ISong } from "../types/song";

export const recordSingleSongType = (
  singlesList: Array<[string, ISingle]>,
  songsList: Array<[string, ISong]>
) => {
  singlesList.forEach((singlesElement: [string, ISingle]) => {
    const single = singlesElement[1];

    single.songs.forEach((singleSong: ISingleSong) => {
      // Reset singleSong type.
      singleSong.type = undefined;

      songsList.forEach((songsElement: [string, ISong]) => {
        const song = songsElement[1];
        if (song.title === singleSong.title) {
          singleSong.type = song.type;
        }
      });

      console.log(singleSong.title, singleSong.type);
    });
  });
};

export const recordFocusPerformers = (
  singlesList: Array<[string, ISingle]>,
  songsList: Array<[string, ISong]>
) => {
  singlesList.forEach((singlesElement: [string, ISingle]) => {
    const single = singlesElement[1];

    single.songs.forEach((singleSong: ISingleSong) => {
      songsList.forEach((songsElement: [string, ISong]) => {
        const song = songsElement[1];
        if (song.title === singleSong.title) {
          if (
            song.type === SongType.Title ||
            song.type === SongType.Under ||
            song.type === SongType.Coupling ||
            song.type === SongType.FirstGeneration ||
            song.type === SongType.SecondGeneration ||
            song.type === SongType.ThirdGeneration
          ) {
            singleSong.focusPerformers = {
              type: FocusPerformersType.Center,
              name: song.performers.center
            };
          } else if (song.type === SongType.Solo) {
            singleSong.focusPerformers = {
              type: FocusPerformersType.Solo,
              name: song.formations.firstRow
            };
          } else if (song.type === SongType.Unit) {
            singleSong.focusPerformers = {
              type: FocusPerformersType.Unit,
              name: song.formations.firstRow
            };
          } else if (song.type === SongType.None) {
            singleSong.focusPerformers = {
              type: FocusPerformersType.None,
              name: song.performers.center
            };
          }
        }
      });

      console.log(singleSong.title, singleSong.focusPerformers);
    });
  });
};
