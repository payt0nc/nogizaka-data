import { ISingle } from "../models/ISingle";
import { ISong } from "../models/ISong";
import { members } from "../raw/members";
import { FocusPerformersType, SongType, MemberNames } from "../utils/constants";

const recordSingleArtworks = (singlesList: ISingle[]) => {
  const artworkBasename = "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/artworks/";
  singlesList.forEach(single => {
    if (single.hasArtworks) {
      single.artworks.forEach(artwork => {
        artwork.urls.large =
          artworkBasename + "singles/" + single.number.toString() + "/" + artwork.type + "_large.jpg";
        artwork.urls.medium =
          artworkBasename + "singles/" + single.number.toString() + "/" + artwork.type + "_medium.jpg";
        artwork.urls.small =
          artworkBasename + "singles/" + single.number.toString() + "/" + artwork.type + "_small.jpg";
      });
    } else {
      single.artworks.forEach(artwork => {
        artwork.urls.large = artworkBasename + "artwork_no_image_large.png";
        artwork.urls.medium = artworkBasename + "artwork_no_image_medium.png";
        artwork.urls.small = artworkBasename + "artwork_no_image_small.png";
      });
    }
  });
};

const recordSingleSongType = (singlesList: ISingle[], songsList: ISong[]) => {
  singlesList.forEach(single => {
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

const recordSingleFocusPerformers = (singlesList: ISingle[], songsList: ISong[]) => {
  singlesList.forEach(single => {
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
                type: FocusPerformersType.Unit,
                name: convertPerformerNames(song.performers.center),
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

export const updateSingles = (singlesList: ISingle[], songsList: ISong[]) => {
  recordSingleArtworks(singlesList);
  recordSingleSongType(singlesList, songsList);
  recordSingleFocusPerformers(singlesList, songsList);
};
