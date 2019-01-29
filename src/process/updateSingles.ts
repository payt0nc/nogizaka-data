import { FocusPerformersType, SongType } from "../common/types";
import { ISingle, ISingleSong } from "../types/single";
import { ISong } from "../types/song";

export const recordSingleSongType = (
  singlesList: [string, ISingle][],
  songsList: [string, ISong][]
) => {
  singlesList.forEach((singleElement: [string, ISingle]) => {
    const single = singleElement[1];

    single.songs.forEach((singleSong: ISingleSong) => {
      // Reset singleSong type.
      // singleSong.type = undefined;

      songsList.forEach((songElement: [string, ISong]) => {
        const song = songElement[1];
        if (song.title === singleSong.title) {
          singleSong.type = song.type;
        }
      });

      // console.log(singleSong.title, singleSong.type);
    });
  });
};

export const recordSingleFocusPerformers = (
  singlesList: [string, ISingle][],
  songsList: [string, ISong][]
) => {
  singlesList.forEach((singleElement: [string, ISingle]) => {
    const single = singleElement[1];

    single.songs.forEach((singleSong: ISingleSong) => {
      songsList.forEach((songElement: [string, ISong]) => {
        const song = songElement[1];
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
