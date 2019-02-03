import { FocusPerformersType, SongType } from "../common/constants";
import { ISingle, ISingleSong } from "../types/ISingle";
import { ISong } from "../types/ISong";

export const recordSingleSongType = (
  singlesList: ISingle[],
  songsList: ISong[]
) => {
  singlesList.forEach((single: ISingle) => {
    single.songs.forEach((singleSong: ISingleSong) => {
      // Reset singleSong type.
      // singleSong.type = undefined;

      songsList.forEach((song: ISong) => {
        if (song.title === singleSong.title) {
          singleSong.type = song.type;
        }
      });

      // console.log(singleSong.title, singleSong.type);
    });
  });
};

export const recordSingleFocusPerformers = (
  singlesList: ISingle[],
  songsList: ISong[]
) => {
  singlesList.forEach((single: ISingle) => {
    single.songs.forEach((singleSong: ISingleSong) => {
      songsList.forEach((song: ISong) => {
        if (song.title === singleSong.title) {
          if (
            song.type === SongType.Title ||
            song.type === SongType.Under ||
            song.type === SongType.Coupling ||
            song.type === SongType.FirstGeneration ||
            song.type === SongType.SecondGeneration ||
            song.type === SongType.ThirdGeneration
          ) {
            if (song.performers.center !== undefined) {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Center,
                name: song.performers.center
              };
            } else {
              singleSong.focusPerformers = {
                type: FocusPerformersType.None,
                name: []
              };
            }
          } else if (song.type === SongType.Solo) {
            singleSong.focusPerformers = {
              type: FocusPerformersType.Solo,
              name: song.formations.firstRow
            };
          } else if (song.type === SongType.Unit) {
            if (song.performers.unit !== "" && song.performers.unit !== undefined) {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Unit,
                name: [song.performers.unit]
              };
            } else if (song.performers.center !== undefined) {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Unit,
                name: song.performers.center
              };
            } else {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Unit,
                name: []
              };
            }
          } else if (song.type === SongType.None) {
            if (song.performers.center !== undefined) {
              singleSong.focusPerformers = {
                type: FocusPerformersType.None,
                name: song.performers.center
              };
            } else {
              singleSong.focusPerformers = {
                type: FocusPerformersType.None,
                name: []
              };
            }
          }
        }
      });

      // console.log(singleSong.title, singleSong.focusPerformers);
    });
  });
};
