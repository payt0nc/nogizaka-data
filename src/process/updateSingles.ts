import { FocusPerformersType, SongType } from "../common/constants";
import { ISingle } from "../types/ISingle";
import { ISong } from "../types/ISong";

export const updateSingles = (singlesList: ISingle[], songsList: ISong[]) => {
  recordSingleArtworks(singlesList);
  recordSingleSongType(singlesList, songsList);
  recordSingleFocusPerformers(singlesList, songsList);
};

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
      // Reset singleSong type.
      // singleSong.type = undefined;

      songsList.forEach(song => {
        if (song.title === singleSong.title) {
          singleSong.type = song.type;
        }
      });

      // console.log(singleSong.title, singleSong.type);
    });
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
                name: song.performers.center,
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
              name: song.formations.firstRow,
            };
          } else if (song.type === SongType.Unit) {
            if (song.performers.unit !== null && song.performers.unit !== "" ) {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Unit,
                name: [song.performers.unit],
              };
            } else if (song.performers.center !== null) {
              singleSong.focusPerformers = {
                type: FocusPerformersType.Unit,
                name: song.performers.center,
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
                name: song.performers.center,
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

      // console.log(singleSong.title, singleSong.focusPerformers);
    });
  });
};
