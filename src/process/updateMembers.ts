import * as fs from "fs";
import { ResultMembers, RawMember, ResultMember } from "../models/IMember";
import { ResultSingles } from "../models/ISingle";
import { ResultSongs } from "../models/ISong";
import { ResultUnits } from "../models/IUnit";
import {
  FukujinType,
  GITHUB_CONTENTS_PATH,
  PositionType,
  SongType,
} from "../utils/constants";
import { arrayToObject } from "../utils/arrays";

const PROFILE_IMAGES_PATH = "src/images/members/";

export const initializeMembers = (rawMembers: RawMember[]): ResultMembers => {
  const initializedArray = rawMembers.map(
    (rawMember): ResultMember => ({
      name: rawMember.name,
      nameNotations: rawMember.nameNotations,
      glowStickColor: rawMember.glowStickColor,
      profileImage: {
        large: "",
        small: "",
      },
      singleImages: {},
      join: rawMember.join,
      birthday: rawMember.birthday,
      height: rawMember.height,
      bloodType: rawMember.bloodType,
      origin: rawMember.origin,
      sites: rawMember.sites,
      photoAlbums: rawMember.photoAlbums,
      units: [],
      positionsHistory: {},
      positionsCounter: {
        center: 0,
        fukujin: 0,
        selected: 0,
        under: 0,
      },
      graduation: rawMember.graduation,
    }),
  );

  return arrayToObject(initializedArray, "name");
};

export const recordUnits = (members: ResultMembers, units: ResultUnits) => {
  for (const member of Object.values(members)) {
    member.units = [];

    for (const unit of Object.values(units)) {
      if (unit.members.includes(member.name)) {
        member.units.push({
          name: unit.name,
          type: unit.type,
        });
      }
    }
  }
};

export const recordPositions = (
  members: ResultMembers,
  singles: ResultSingles,
  songs: ResultSongs,
) => {
  for (const member of Object.values(members)) {
    member.positionsCounter = {
      center: 0,
      fukujin: 0,
      selected: 0,
      under: 0,
    };

    for (const single of Object.values(singles)) {
      let singlePosition = PositionType.None;

      // Check trainee and skip.
      if (single.behindPerformers.trainees.includes(member.name)) {
        singlePosition = PositionType.Trainee;
      } else if (single.behindPerformers.skips.includes(member.name)) {
        singlePosition = PositionType.Skip;
      }

      for (const singleSong of single.songs) {
        const song = songs[singleSong.title];

        // Calculate center, fukujin, selected.
        if (singleSong.type === SongType.Title) {
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
            (song.formations.firstRow.includes(member.name) ||
              song.formations.secondRow.includes(member.name))
          ) {
            // Check Fukujin (first & second row case)
            singlePosition = PositionType.Fukujin;
            member.positionsCounter.fukujin += 1;
            member.positionsCounter.selected += 1;
          } else if (
            song.performers.fukujin instanceof Array &&
            song.performers.fukujin.includes(member.name)
          ) {
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

        Object.assign(member.positionsHistory, {
          [single.number]: singlePosition,
        });
      }
    }
  }
};

export const recordProfileImages = (
  members: ResultMembers,
  singleCount: number,
) => {
  for (const member of Object.values(members)) {
    for (let i = 1; i < singleCount + 1; i++) {
      const profileImageLargePath = `${PROFILE_IMAGES_PATH}${i}/${
        member.name
      }_large.jpg`;
      const profileImageSmallPath = `${PROFILE_IMAGES_PATH}${i}/${
        member.name
      }_small.jpg`;

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

    if (
      member.singleImages[singleCount].large === "" &&
      member.singleImages[singleCount].small === ""
    ) {
      member.profileImage = {
        large:
          GITHUB_CONTENTS_PATH +
          PROFILE_IMAGES_PATH +
          "member_no_image_large.png",
        small:
          GITHUB_CONTENTS_PATH +
          PROFILE_IMAGES_PATH +
          "member_no_image_medium.png",
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
