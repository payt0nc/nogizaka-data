import { FukujinType, SongType } from "../common/types";
import { songs } from "../raw/songs";
import { IMember, PositionType } from "../types/member";
import { ISingle, ISingleSong } from "../types/single";
import { ISong } from "../types/song";
import { IUnit } from "../types/unit";

export const recordUnits = (
  membersList: Array<[string, IMember]>,
  unitsList: Array<[string, IUnit]>
) => {
  membersList.forEach((membersElement: [string, IMember]) => {
    const member = membersElement[1];

    // Reset member's units list to an empty array.
    member.units = [];

    // Check is member in a unit
    unitsList.forEach((unitsElement: [string, IUnit]) => {
      const unit = unitsElement[1];
      unit.members.forEach((memberName: string) => {
        if (memberName === member.name) {
          member.units.push({
            name: unit.name,
            type: unit.type
          });
        }
      });
    });

    if (member.units.length > 0) {
      console.log(member.name, member.units);
    }
  });
};

export const recordPositions = (
  membersList: Array<[string, IMember]>,
  singlesList: Array<[string, ISingle]>,
  songsList: Array<[string, ISong]>
) => {
  membersList.forEach((membersElement: [string, IMember]) => {
    const member = membersElement[1];

    // Reset member's position records.
    member.positionsHistory = [];
    member.positionsCounter = {
      center: 0,
      fukujin: 0,
      selected: 0,
      under: 0
    };

    singlesList.forEach((singlesElement: [string, ISingle]) => {
      const single = singlesElement[1];

      let memberPositionHistory = {
        singleNumber: single.number,
        position: PositionType.None
      };

      single.songs.forEach((singleSong: ISingleSong) => {
        // Check trainee and skip.
        if (single.behindPerformers.trainees.includes(member.name)) {
          memberPositionHistory.position = PositionType.Trainee;
        } else if (single.behindPerformers.skips.includes(member.name)) {
          memberPositionHistory.position = PositionType.Skip;
        } else {
          // Check selected and under.
          songsList.forEach((songsElement: [string, ISong]) => {
            const song = songsElement[1];

            // Check Center, Fukujin, Selected.
            if (
              singleSong.type === SongType.Title &&
              singleSong.title === song.title
            ) {
              // Check Selected.
              if (
                song.formations.firstRow.includes(member.name) ||
                song.formations.secondRow.includes(member.name) ||
                song.formations.thirdRow.includes(member.name)
              ) {
                memberPositionHistory.position = PositionType.Selected;

                // Check Fukujin.
                switch (song.performers.fukujin) {
                  case FukujinType.RowOne:
                    if (song.formations.firstRow.includes(member.name)) {
                      memberPositionHistory.position = PositionType.Fukujin;

                      // Check Center.
                      if (song.performers.center.includes(member.name)) {
                        memberPositionHistory.position = PositionType.Center;
                      }
                    }
                    break;
                  case FukujinType.RowOneTwo:
                    if (
                      song.formations.firstRow.includes(member.name) ||
                      song.formations.secondRow.includes(member.name)
                    ) {
                      memberPositionHistory.position = PositionType.Fukujin;

                      // Check Center.
                      if (song.performers.center.includes(member.name)) {
                        memberPositionHistory.position = PositionType.Center;
                      }
                    }
                    break;
                  default:
                    if (song.performers.fukujin.includes(member.name)) {
                      memberPositionHistory.position = PositionType.Fukujin;

                      // Check Center.
                      if (song.performers.center.includes(member.name)) {
                        memberPositionHistory.position = PositionType.Center;
                      }
                    }
                    break;
                }
              }
            }

            // Check Under.
            if (
              singleSong.type === SongType.Under &&
              singleSong.title === song.title
            ) {
              if (
                song.formations.firstRow.includes(member.name) ||
                song.formations.secondRow.includes(member.name) ||
                song.formations.thirdRow.includes(member.name)
              ) {
                memberPositionHistory.position = PositionType.Under;
              }
            }
          });
        }
      });

      // Update position history.
      member.positionsHistory.push(memberPositionHistory);

      // Update position counter.
      switch (memberPositionHistory.position) {
        case PositionType.Center:
          member.positionsCounter.center += 1;
          break;
        case PositionType.Fukujin:
          member.positionsCounter.fukujin += 1;
          break;
        case PositionType.Selected:
          member.positionsCounter.selected += 1;
          break;
        case PositionType.Under:
          member.positionsCounter.under += 1;
          break;
      }
    });

    console.log(member.name, member.positionsCounter, member.positionsHistory);
  });
};
