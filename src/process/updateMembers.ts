import * as fs from "fs";
import { ICdSong } from "../models/ICd";
import { IMember, IMemberPositionHistory, PositionType } from "../models/IMember";
import { ISingle } from "../models/ISingle";
import { ISong } from "../models/ISong";
import { IUnit } from "../models/IUnit";
import { FukujinType, SongType, GITHUB_CONTENTS_PATH } from "../utils/constants";

const PROFILE_IMAGES_PATH = "src/images/members/";
    member.units = [];

    // Loop for units.
    unitsList.forEach(unit => {
      if (unit.members.includes(member.name)) {
        member.units.push({
          name: unit.name,
          type: unit.type,
        });
      }
    });

    // console.log(member.name, member.units);
  });
};

const recordPositions = (membersList: IMember[], singlesList: ISingle[], songsList: ISong[]) => {
  // Loop for members.
  membersList.forEach(member => {
    member.positionsHistory = [];
    member.positionsCounter = {
      center: 0,
      fukujin: 0,
      selected: 0,
      under: 0,
    };

    // Loop for singles.
    singlesList.forEach(single => {
      // Check trainee and skip.
      if (single.behindPerformers.trainees.includes(member.name)) {
        member.positionsHistory.push({
          singleNumber: single.number,
          position: PositionType.Trainee,
        });
      } else if (single.behindPerformers.skips.includes(member.name)) {
        member.positionsHistory.push({
          singleNumber: single.number,
          position: PositionType.Skip,
        });
      } else {
        let singlePosition: IMemberPositionHistory = {
          singleNumber: single.number,
          position: PositionType.None,
        };

        // Loop for songs in this single.
        single.songs.forEach((singleSong: ICdSong) => {
          // Loop for the song to pair title song.
          songsList.forEach(song => {
            // Calculate center, fukujin, selected.
            if (singleSong.type === SongType.Title) {
              if (song.title === singleSong.title) {
                // Check order: Center -> Fukujin -> Selected
                if (song.performers.center.includes(member.name)) {
                  // Check Center
                  singlePosition = {
                    singleNumber: single.number,
                    position: PositionType.Center,
                  };
                  member.positionsCounter.center += 1;
                  member.positionsCounter.fukujin += 1;
                  member.positionsCounter.selected += 1;
                } else if (
                  song.performers.fukujin === FukujinType.RowOne &&
                  song.formations.firstRow.includes(member.name)
                ) {
                  // Check Fukujin (first row case)
                  singlePosition = {
                    singleNumber: single.number,
                    position: PositionType.Fukujin,
                  };
                  member.positionsCounter.fukujin += 1;
                  member.positionsCounter.selected += 1;
                } else if (
                  song.performers.fukujin === FukujinType.RowOneTwo &&
                  (song.formations.firstRow.includes(member.name) || song.formations.secondRow.includes(member.name))
                ) {
                  // Check Fukujin (first & second row case)
                  singlePosition = {
                    singleNumber: single.number,
                    position: PositionType.Fukujin,
                  };
                  member.positionsCounter.fukujin += 1;
                  member.positionsCounter.selected += 1;
                } else if (song.performers.fukujin instanceof Array && song.performers.fukujin.includes(member.name)) {
                  // Check Fukujin (irregular case)
                  singlePosition = {
                    singleNumber: single.number,
                    position: PositionType.Fukujin,
                  };
                  member.positionsCounter.fukujin += 1;
                  member.positionsCounter.selected += 1;
                } else if (
                  song.formations.firstRow.includes(member.name) ||
                  song.formations.secondRow.includes(member.name) ||
                  song.formations.thirdRow.includes(member.name)
                ) {
                  // Check Selected
                  singlePosition = {
                    singleNumber: single.number,
                    position: PositionType.Selected,
                  };
                  member.positionsCounter.selected += 1;
                }
              }
            }

            // Calculate under.
            if (singleSong.type === SongType.Under) {
              if (song.title === singleSong.title) {
                if (
                  song.formations.firstRow.includes(member.name) ||
                  song.formations.secondRow.includes(member.name) ||
                  song.formations.thirdRow.includes(member.name) ||
                  song.formations.fourthRow.includes(member.name)
                ) {
                  singlePosition = {
                    singleNumber: single.number,
                    position: PositionType.Under,
                  };
                  member.positionsCounter.under += 1;
                }
              }
            }
          });
        });

        // Update positionsHitory.
        member.positionsHistory.push(singlePosition);
      }
    });
  });
};

const recordProfileImages = (memberList: IMember[], singleCount: number) => {
  for (const member of memberList) {
    for (let i = 1; i < singleCount + 1; i++) {
      const profileImageLargePath = `${PROFILE_IMAGES_PATH}${i}/${member.name}_large.jpg`;
      const profileImageSmallPath = `${PROFILE_IMAGES_PATH}${i}/${member.name}_small.jpg`;

      let singleImage = {
        singleNumber: i,
        large: "",
        small: "",
      };

      if (fs.existsSync(profileImageLargePath)) {
        singleImage.large = GITHUB_CONTENTS_PATH + profileImageLargePath;
      } else if (i > 1) {
        singleImage.large = member.singleImages[i - 2].large;
      }

      if (fs.existsSync(profileImageSmallPath)) {
        singleImage.small = GITHUB_CONTENTS_PATH + profileImageSmallPath;
      } else if (i > 1) {
        singleImage.small = member.singleImages[i - 2].small;
      }

      member.singleImages.push(singleImage);
    }

    member.profileImage = {
      large: member.singleImages[singleCount - 1].large,
      small: member.singleImages[singleCount - 1].small,
    };
  }
};

export const updateMembers = (
  memberList: IMember[],
  unitsList: IUnit[],
  singlesList: ISingle[],
  songsList: ISong[],
) => {
  recordUnits(memberList, unitsList);
  recordPositions(memberList, singlesList, songsList);
  recordProfileImages(memberList, singlesList.length);
};
