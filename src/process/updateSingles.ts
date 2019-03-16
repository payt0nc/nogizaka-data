import { FocusPerformersType, SongType } from "../common/constants";
import { ISingle } from "../types/ISingle";
import { ICdSong, ICdArtwork } from "../types/ICd";
import { ISong } from "../types/ISong";
import { IAlbum } from "../types/IAlbum";

export const updateSingles = (singlesList: ISingle[], songsList: ISong[]) => {
  recordSingleArtworks(singlesList);
  recordSingleSongType(singlesList, songsList);
  recordSingleFocusPerformers(singlesList, songsList);
};

const recordSingleArtworks = (singlesList: ISingle[]) => {
  const artworkBasename =
    "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/artworks/singles/";
  singlesList.forEach(single => {
    const singleNumber = single.number;
    single.artworks.forEach(artwork => {
      artwork.urls.large =
        artworkBasename +
        singleNumber.toString() +
        "/" +
        artwork.type +
        "_450.jpg";
      artwork.urls.medium =
        artworkBasename +
        singleNumber.toString() +
        "/" +
        artwork.type +
        "_150.jpg";
      artwork.urls.small =
        artworkBasename +
        singleNumber.toString() +
        "/" +
        artwork.type +
        "_100.jpg";
    });
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

const recordSingleFocusPerformers = (
  singlesList: ISingle[],
  songsList: ISong[]
) => {
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
            if (
              song.performers.unit !== "" &&
              song.performers.unit !== undefined
            ) {
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
