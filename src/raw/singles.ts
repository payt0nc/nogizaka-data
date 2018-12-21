import { CdType, MemberNames, SongType } from "../common/types";
import { ISingle } from "../types/single";

const kaerimichi: ISingle = {
  title: "帰り道は遠回りしたくなる",
  number: 22,
  release: "2018-11-14",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "帰り道は遠回りしたくなる",
      inType: CdType.A,
      type: SongType.Title
    },
    {
      number: 2,
      title: "キャラバンは眠らない",
      inType: CdType.A,
      type: SongType.Coupling
    },
    {
      number: 3,
      title: "つづく",
      inType: CdType.A,
      type: SongType.Solo
    },
    {
      number: 4,
      title: "日常",
      inType: CdType.B,
      type: SongType.Under
    },
    {
      number: 5,
      title: "告白の順番",
      inType: CdType.C,
      type: SongType.Unit
    },
    {
      number: 6,
      title: "ショパンの嘘つき",
      inType: CdType.D,
      type: SongType.Unit
    },
    {
      number: 7,
      title: "知りたいこと",
      inType: CdType.T,
      type: SongType.Unit
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: []
  }
};

const jikochu: ISingle = {
  title: "ジコチューで行こう！",
  number: 21,
  release: "2018-08-08",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "ジコチューで行こう！",
      inType: CdType.A,
      type: SongType.Title
    },
    {
      number: 2,
      title: "空扉",
      inType: CdType.A,
      type: SongType.Coupling
    },
    {
      number: 3,
      title: "三角の空き地",
      inType: CdType.A,
      type: SongType.Under
    },
    {
      number: 4,
      title: "自分じゃない感じ",
      inType: CdType.B,
      type: SongType.ThirdGeneration
    },
    {
      number: 5,
      title: "心のモノローグ",
      inType: CdType.C,
      type: SongType.Unit
    },
    {
      number: 6,
      title: "地球が丸いなら",
      inType: CdType.D,
      type: SongType.Unit
    },
    {
      number: 7,
      title: "あんなに好きだったのに・・・",
      inType: CdType.T,
      type: SongType.Coupling
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KuboShiori]
  }
};

export const singles = {
  "帰り道は遠回りしたくなる": kaerimichi,
  "ジコチューで行こう！": jikochu
};
