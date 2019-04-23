import { ISingle } from "../models/ISingle";
import { ISong } from "../models/ISong";
import { members } from "../raw/members";
import { FocusPerformersType, GITHUB_CONTENTS_PATH, MemberNames, SongType } from "../utils/constants";

const recordSingleArtworks = (singleList: ISingle[]) => {
  const ARTWORK_BASE_NAME = GITHUB_CONTENTS_PATH + "src/images/artworks/singles/";
  singleList.forEach(single => {
    const artworks = single.artworks;

    if (single.hasArtworks) {
      for (const key of Object.keys(artworks)) {
        artworks[key].large = ARTWORK_BASE_NAME + single.number.toString() + "/" + key + "_large.jpg";
        artworks[key].medium = ARTWORK_BASE_NAME + single.number.toString() + "/" + key + "_medium.jpg";
        artworks[key].small = ARTWORK_BASE_NAME + single.number.toString() + "/" + key + "_small.jpg";
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

const recordSingleSongType = (singleList: ISingle[], songsList: ISong[]) => {
  singleList.forEach(single => {
    single.songs.forEach(singleSong => {
      songsList.forEach(song => {
        if (song.title === singleSong.title) {
          singleSong.type = song.type;
        }
      });
    });
  });
};

const convertPerformerNames = (names: string[]): string[] => {
  return names.map((name: MemberNames) => {
    const { lastName, firstName } = members[name].nameNotations;
    return lastName + firstName;
  });
};

const recordSingleFocusPerformers = (singleList: ISingle[], songsList: ISong[]) => {
  singleList.forEach(single => {
    single.songs.forEach(singleSong => {
      songsList.forEach(song => {
        if (song.title === singleSong.title) {
          if (
            song.type === SongType.Title ||
            song.type === SongType.Under ||
            song.type === SongType.Coupling ||
            song.type === SongType.FirstGeneration ||
            song.type === SongType.SecondGeneration ||
            song.type === SongType.ThirdGeneration
          ) {
            if (song.performers.center !== null) {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Center,
                name: convertPerformerNames(song.performers.center),
              };
            } else {
              singleSong.focusPerformers = {
                type: FocusPerformersType.None,
                name: [],
              };
            }
          } else if (song.type === SongType.Solo) {
            singleSong.focusPerformers = {
              type: FocusPerformersType.Solo,
              name: convertPerformerNames(song.formations.firstRow),
            };
          } else if (song.type === SongType.Unit) {
            if (song.performers.unit !== null && song.performers.unit !== "") {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Unit,
                name: [song.performers.unit],
              };
            } else if (song.performers.center !== null) {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Center,
                name: convertPerformerNames(song.performers.center),
              };
            } else if (
              song.formations.firstRow.length +
                song.formations.secondRow.length +
                song.formations.thirdRow.length +
                song.formations.fourthRow.length <
              3
            ) {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Unit,
                name: convertPerformerNames([
                  ...song.formations.firstRow,
                  ...song.formations.secondRow,
                  ...song.formations.thirdRow,
                  ...song.formations.fourthRow,
                ]),
              };
            } else {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Unit,
                name: [],
              };
            }
          } else if (song.type === SongType.None) {
            if (song.performers.center !== null) {
              singleSong.focusPerformers = {
                type: FocusPerformersType.None,
                name: convertPerformerNames(song.performers.center),
              };
            } else {
              singleSong.focusPerformers = {
                type: FocusPerformersType.None,
                name: [],
              };
            }
          }
        }
      });
    });
  });
};

export const updateSingles = (singleList: ISingle[], songsList: ISong[]) => {
  recordSingleArtworks(singleList);
  recordSingleSongType(singleList, songsList);
  recordSingleFocusPerformers(singleList, songsList);
};
