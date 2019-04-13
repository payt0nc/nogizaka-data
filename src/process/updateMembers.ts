import { ICdSong } from "../models/ICd";
import { IMember, IMemberPositionHistory, PositionType } from "../models/IMember";
import { ISingle } from "../models/ISingle";
import { ISong } from "../models/ISong";
import { IUnit } from "../models/IUnit";
import { FukujinType, SongType } from "../utils/constants";

export const updateMembers = (
  membersList: IMember[],
  unitsList: IUnit[],
  singlesList: ISingle[],
  songsList: ISong[],
) => {
  recordUnits(membersList, unitsList);
  recordPositions(membersList, singlesList, songsList);
};

const recordUnits = (membersList: IMember[], unitsList: IUnit[]) => {
  // Loop for members.
  membersList.forEach(member => {
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
