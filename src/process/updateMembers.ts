import { FukujinType, SongType } from "../common/types";
import { IMember, IMemberPositionHistory, PositionType } from "../types/member";
import { ISingle, ISingleSong } from "../types/single";
import { ISong } from "../types/song";
import { IUnit } from "../types/unit";

export const recordUnits = (
  membersList: IMember[],
  unitsList: IUnit[]
) => {
  // Loop for members.
  membersList.forEach((member: IMember) => {
    // Reset member's units.
    member.units = [];

    // Loop for units.
    unitsList.forEach((unit: IUnit) => {
      if (unit.members.includes(member.name)) {
        member.units.push({
          name: unit.name,
          type: unit.type
        });
      }
    });

    // console.log(member.name, member.units);
  });
};

export const recordPositions = (
  membersList: IMember[],
  singlesList: ISingle[],
  songsList: ISong[]
) => {
  // Loop for members.
  membersList.forEach((member: IMember) => {
    // Reset positionsHistory and positionsCounter.
    member.positionsHistory = [];
    member.positionsCounter = {
      center: 0,
      fukujin: 0,
      selected: 0,
      under: 0
    };

    // Loop for singles.
    singlesList.forEach((single: ISingle) => {
      // Check trainee and skip.
      if (single.behindPerformers.trainees.includes(member.name)) {
        member.positionsHistory.push({
          singleNumber: single.number,
          position: PositionType.Trainee
        });
      } else if (single.behindPerformers.skips.includes(member.name)) {
        member.positionsHistory.push({
          singleNumber: single.number,
          position: PositionType.Skip
        });
      } else {
        // Reset positionHistory for this single.
        let singlePosition: IMemberPositionHistory = {
          singleNumber: single.number,
          position: PositionType.None
        };

        // Loop for songs in this single.
        single.songs.forEach((singleSong: ISingleSong) => {
          // Loop for the song to pair title song.
          songsList.forEach((song: ISong) => {
            // Calculate center, fukujin, selected.
            if (singleSong.type === SongType.Title) {
              if (song.title === singleSong.title) {
                // Check center.
                if (song.performers.center.includes(member.name)) {
                  singlePosition = {
                    singleNumber: single.number,
                    position: PositionType.Center
                  };
                  member.positionsCounter.center += 1;
                  member.positionsCounter.fukujin += 1;
                  member.positionsCounter.selected += 1;
                } else {
                  // Check selected.
                  if (
                    song.formations.firstRow.includes(member.name) ||
                    song.formations.secondRow.includes(member.name) ||
                    song.formations.thirdRow.includes(member.name)
                  ) {
                    singlePosition = {
                      singleNumber: single.number,
                      position: PositionType.Selected
                    };
                    member.positionsCounter.selected += 1;
                  }
                  // Check fukujin.
                  if (song.performers.fukujin === FukujinType.RowOne) {
                    // Check for fukujin (row one case).
                    if (song.formations.firstRow.includes(member.name)) {
                      singlePosition = {
                        singleNumber: single.number,
                        position: PositionType.Fukujin
                      };
                      member.positionsCounter.fukujin += 1;
                      member.positionsCounter.selected += 1;
                    }
                  } else if (
                    song.performers.fukujin === FukujinType.RowOneTwo
                  ) {
                    // Check for fukujin (row one & two case).
                    if (
                      song.formations.firstRow.includes(member.name) ||
                      song.formations.secondRow.includes(member.name)
                    ) {
                      singlePosition = {
                        singleNumber: single.number,
                        position: PositionType.Fukujin
                      };
                      member.positionsCounter.fukujin += 1;
                      member.positionsCounter.selected += 1;
                    }
                  } else {
                    // Check for fukujin (irregular case).
                    if (song.performers.fukujin.includes(member.name)) {
                      singlePosition = {
                        singleNumber: single.number,
                        position: PositionType.Fukujin
                      };
                      member.positionsCounter.fukujin += 1;
                      member.positionsCounter.selected += 1;
                    }
                  }
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
                    position: PositionType.Under
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

    // console.log(member.name, member.positionsHistory);
  });
};
