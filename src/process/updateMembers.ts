import * as fs from "fs";
import { ICdSong } from "../models/ICd";
import { IMember, IMemberPositionHistory, PositionType } from "../models/IMember";
import { ISingle } from "../models/ISingle";
import { ISong } from "../models/ISong";
import { IUnit } from "../models/IUnit";
import { FukujinType, SongType, GITHUB_CONTENTS_PATH } from "../utils/constants";

const PROFILE_IMAGES_PATH = "src/images/members/";

const recordUnits = (memberList: IMember[], unitsList: IUnit[]) => {
  memberList.forEach(member => {
    member.units = [];

    unitsList.forEach(unit => {
      if (unit.members.includes(member.name)) {
        member.units.push({
          name: unit.name,
          type: unit.type,
        });
      }
    });
  });
};

const recordPositions = (memberList: IMember[], singlesList: ISingle[], songsList: ISong[]) => {
  memberList.forEach(member => {
    member.positionsCounter = {
      center: 0,
      fukujin: 0,
      selected: 0,
      under: 0,
    };

    singlesList.forEach(single => {
      // Check trainee and skip.
      if (single.behindPerformers.trainees.includes(member.name)) {
        Object.assign(member.positionsHistory, {
          [single.number]: PositionType.Trainee,
        });
      } else if (single.behindPerformers.skips.includes(member.name)) {
        Object.assign(member.positionsHistory, {
          [single.number]: PositionType.Skip,
        });
      } else {
        let singlePosition = PositionType.None;

        single.songs.forEach((singleSong: ICdSong) => {
          songsList.forEach(song => {
            // Calculate center, fukujin, selected.
            if (singleSong.type === SongType.Title) {
              if (song.title === singleSong.title) {
                // Check order: Center -> Fukujin -> Selected
                if (song.performers.center.includes(member.name)) {
                  // Check Center
                  singlePosition = PositionType.Center;
                  member.positionsCounter.center += 1;
                  member.positionsCounter.fukujin += 1;
                  member.positionsCounter.selected += 1;
                } else if (
                  song.performers.fukujin === FukujinType.RowOne &&
                  song.formations.firstRow.includes(member.name)
                ) {
                  // Check Fukujin (first row case)
                  singlePosition = PositionType.Fukujin;
                  member.positionsCounter.fukujin += 1;
                  member.positionsCounter.selected += 1;
                } else if (
                  song.performers.fukujin === FukujinType.RowOneTwo &&
                  (song.formations.firstRow.includes(member.name) || song.formations.secondRow.includes(member.name))
                ) {
                  // Check Fukujin (first & second row case)
                  singlePosition = PositionType.Fukujin;
                  member.positionsCounter.fukujin += 1;
                  member.positionsCounter.selected += 1;
                } else if (song.performers.fukujin instanceof Array && song.performers.fukujin.includes(member.name)) {
                  // Check Fukujin (irregular case)
                  singlePosition = PositionType.Fukujin;
                  member.positionsCounter.fukujin += 1;
                  member.positionsCounter.selected += 1;
                } else if (
                  song.formations.firstRow.includes(member.name) ||
                  song.formations.secondRow.includes(member.name) ||
                  song.formations.thirdRow.includes(member.name)
                ) {
                  // Check Selected
                  singlePosition = PositionType.Selected;
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
                  singlePosition = PositionType.Under;
                  member.positionsCounter.under += 1;
                }
              }
            }
          });
        });

        Object.assign(member.positionsHistory, {
          [single.number]: singlePosition,
        });
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
        large: "",
        small: "",
      };

      if (fs.existsSync(profileImageLargePath)) {
        singleImage.large = GITHUB_CONTENTS_PATH + profileImageLargePath;
      } else if (i > 1) {
        singleImage.large = member.singleImages[(i - 1).toString()].large;
      }

      if (fs.existsSync(profileImageSmallPath)) {
        singleImage.small = GITHUB_CONTENTS_PATH + profileImageSmallPath;
      } else if (i > 1) {
        singleImage.small = member.singleImages[(i - 1).toString()].small;
      }

      Object.assign(member.singleImages, {
        [i.toString()]: singleImage,
      });
    }

    if (member.singleImages[singleCount].large === "" && member.singleImages[singleCount].small === "") {
      member.profileImage = {
        large: GITHUB_CONTENTS_PATH + PROFILE_IMAGES_PATH + "member_no_image_large.png",
        small: GITHUB_CONTENTS_PATH + PROFILE_IMAGES_PATH + "member_no_image_medium.png",
      };
    } else {
      member.profileImage = {
        large:
          member.singleImages[singleCount].large !== ""
            ? member.singleImages[singleCount].large
            : member.singleImages[singleCount].large,
        small:
          member.singleImages[singleCount].small !== ""
            ? member.singleImages[singleCount].small
            : member.singleImages[singleCount].large,
      };
    }
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
