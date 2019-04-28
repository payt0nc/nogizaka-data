import { ISingle, ISingles } from "../models/ISingle";
import { CdType, FocusPerformersType, MemberNames, SongType, SONG_TITLES } from "../utils/constants";

const kaerimichi: ISingle = {
  title: "帰り道は遠回りしたくなる",
  number: "22",
  release: "2018-11-14",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.D]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["帰り道は遠回りしたくなる"].title,
      key: SONG_TITLES["帰り道は遠回りしたくなる"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["キャラバンは眠らない"].title,
      key: SONG_TITLES["キャラバンは眠らない"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["つづく"].title,
      key: SONG_TITLES["つづく"].key,
      inCdType: [CdType.A],
      type: SongType.Solo,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["日常"].title,
      key: SONG_TITLES["日常"].key,
      inCdType: [CdType.B],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["告白の順番"].title,
      key: SONG_TITLES["告白の順番"].key,
      inCdType: [CdType.C],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["ショパンの嘘つき"].title,
      key: SONG_TITLES["ショパンの嘘つき"].key,
      inCdType: [CdType.D],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONG_TITLES["知りたいこと"].title,
      key: SONG_TITLES["知りたいこと"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const jikochu: ISingle = {
  title: "ジコチューで行こう!",
  number: "21",
  release: "2018-08-08",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.D]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["ジコチューで行こう!"].title,
      key: SONG_TITLES["ジコチューで行こう!"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["空扉"].title,
      key: SONG_TITLES["空扉"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["三角の空き地"].title,
      key: SONG_TITLES["三角の空き地"].key,
      inCdType: [CdType.A],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["自分じゃない感じ"].title,
      key: SONG_TITLES["自分じゃない感じ"].key,
      inCdType: [CdType.B],
      type: SongType.ThirdGeneration,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["心のモノローグ"].title,
      key: SONG_TITLES["心のモノローグ"].key,
      inCdType: [CdType.C],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["地球が丸いなら"].title,
      key: SONG_TITLES["地球が丸いなら"].key,
      inCdType: [CdType.D],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONG_TITLES["あんなに好きだったのに・・・"].title,
      key: SONG_TITLES["あんなに好きだったのに・・・"].key,
      inCdType: [CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KuboShiori],
  },
};

const syncronicity: ISingle = {
  title: "シンクロニシティ",
  number: "20",
  release: "2018-04-25",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.D]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["シンクロニシティ"].title,
      key: SONG_TITLES["シンクロニシティ"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["Against"].title,
      key: SONG_TITLES["Against"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.FirstGeneration,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["雲になればいい"].title,
      key: SONG_TITLES["雲になればいい"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["新しい世界"].title,
      key: SONG_TITLES["新しい世界"].key,
      inCdType: [CdType.B],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["スカウトマン"].title,
      key: SONG_TITLES["スカウトマン"].key,
      inCdType: [CdType.C],
      type: SongType.SecondGeneration,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["トキトキメキメキ"].title,
      key: SONG_TITLES["トキトキメキメキ"].key,
      inCdType: [CdType.D],
      type: SongType.ThirdGeneration,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONG_TITLES["言霊砲"].title,
      key: SONG_TITLES["言霊砲"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KitanoHinako],
  },
};

const itsukadekirukara: ISingle = {
  title: "いつかできるから今日できる",
  number: "19",
  release: "2017-10-11",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.D]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["いつかできるから今日できる"].title,
      key: SONG_TITLES["いつかできるから今日できる"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["不眠症"].title,
      key: SONG_TITLES["不眠症"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["まあいいか?"].title,
      key: SONG_TITLES["まあいいか?"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["失恋お掃除人"].title,
      key: SONG_TITLES["失恋お掃除人"].key,
      inCdType: [CdType.B],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["My rule"].title,
      key: SONG_TITLES["My rule"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["僕の衝動"].title,
      key: SONG_TITLES["僕の衝動"].key,
      inCdType: [CdType.D],
      type: SongType.ThirdGeneration,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONG_TITLES["新しい花粉 〜ミュージカル「見知らぬ世界」より〜"].title,
      key: SONG_TITLES["新しい花粉 〜ミュージカル「見知らぬ世界」より〜"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouRiria,
      MemberNames.IwamotoRenka,
      MemberNames.UmezawaMinami,
      MemberNames.OozonoMomoko,
      MemberNames.KuboShiori,
      MemberNames.SakaguchiTamami,
      MemberNames.SatouKaede,
      MemberNames.NakamuraReno,
      MemberNames.MukaiHazuki,
      MemberNames.YamashitaMizuki,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.YodaYuuki,
    ],
    skips: [],
  },
};

const nigemizu: ISingle = {
  title: "逃げ水",
  number: "18",
  release: "2017-08-09",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.D]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["逃げ水"].title,
      key: SONG_TITLES["逃げ水"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["女は一人じゃ眠れない"].title,
      key: SONG_TITLES["女は一人じゃ眠れない"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["ひと夏の長さより…"].title,
      key: SONG_TITLES["ひと夏の長さより…"].key,
      inCdType: [CdType.A],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["泣いたっていいじゃないか?"].title,
      key: SONG_TITLES["泣いたっていいじゃないか?"].key,
      inCdType: [CdType.B],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["アンダー"].title,
      key: SONG_TITLES["アンダー"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["ライブ神"].title,
      key: SONG_TITLES["ライブ神"].key,
      inCdType: [CdType.D],
      type: SongType.SecondGeneration,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONG_TITLES["未来の答え"].title,
      key: SONG_TITLES["未来の答え"].key,
      inCdType: [CdType.T],
      type: SongType.ThirdGeneration,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouRiria,
      MemberNames.IwamotoRenka,
      MemberNames.UmezawaMinami,
      MemberNames.OozonoMomoko,
      MemberNames.KuboShiori,
      MemberNames.SakaguchiTamami,
      MemberNames.SatouKaede,
      MemberNames.NakamuraReno,
      MemberNames.MukaiHazuki,
      MemberNames.YamashitaMizuki,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.YodaYuuki,
    ],
    skips: [],
  },
};

const influencer: ISingle = {
  title: "インフルエンサー",
  number: "17",
  release: "2017-03-22",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.D]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["インフルエンサー"].title,
      key: SONG_TITLES["インフルエンサー"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["人生を考えたくなる"].title,
      key: SONG_TITLES["人生を考えたくなる"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["意外BREAK"].title,
      key: SONG_TITLES["意外BREAK"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["Another Ghost"].title,
      key: SONG_TITLES["Another Ghost"].key,
      inCdType: [CdType.B],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["風船は生きている"].title,
      key: SONG_TITLES["風船は生きている"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["三番目の風"].title,
      key: SONG_TITLES["三番目の風"].key,
      inCdType: [CdType.D],
      type: SongType.ThirdGeneration,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONG_TITLES["当たり障りのない話"].title,
      key: SONG_TITLES["当たり障りのない話"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouRiria,
      MemberNames.IwamotoRenka,
      MemberNames.UmezawaMinami,
      MemberNames.OozonoMomoko,
      MemberNames.KuboShiori,
      MemberNames.SakaguchiTamami,
      MemberNames.SatouKaede,
      MemberNames.NakamuraReno,
      MemberNames.MukaiHazuki,
      MemberNames.YamashitaMizuki,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.YodaYuuki,
    ],
    skips: [MemberNames.NakamotoHimeka],
  },
};

const sayonaranoimi: ISingle = {
  title: "サヨナラの意味",
  number: "16",
  release: "2016-11-09",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.D]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["サヨナラの意味"].title,
      key: SONG_TITLES["サヨナラの意味"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["孤独な青空"].title,
      key: SONG_TITLES["孤独な青空"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["あの教室"].title,
      key: SONG_TITLES["あの教室"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["ブランコ"].title,
      key: SONG_TITLES["ブランコ"].key,
      inCdType: [CdType.B],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["2度目のキスから"].title,
      key: SONG_TITLES["2度目のキスから"].key,
      inCdType: [CdType.C],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["君に贈る花がない"].title,
      key: SONG_TITLES["君に贈る花がない"].key,
      inCdType: [CdType.D],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONG_TITLES["ないものねだり"].title,
      key: SONG_TITLES["ないものねだり"].key,
      inCdType: [CdType.T],
      type: SongType.Solo,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const hadashidesummer: ISingle = {
  title: "裸足でSummer",
  number: "15",
  release: "2016-07-27",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.D]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["裸足でSummer"].title,
      key: SONG_TITLES["裸足でSummer"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["僕だけの光"].title,
      key: SONG_TITLES["僕だけの光"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["オフショアガール"].title,
      key: SONG_TITLES["オフショアガール"].key,
      inCdType: [CdType.A],
      type: SongType.Solo,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["命の真実 ミュージカル「林檎売りとカメムシ」"].title,
      key: SONG_TITLES["命の真実 ミュージカル「林檎売りとカメムシ」"].key,
      inCdType: [CdType.B],
      type: SongType.Solo,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["白米様"].title,
      key: SONG_TITLES["白米様"].key,
      inCdType: [CdType.C],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["シークレットグラフィティー"].title,
      key: SONG_TITLES["シークレットグラフィティー"].key,
      inCdType: [CdType.D],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONG_TITLES["行くあてのない僕たち"].title,
      key: SONG_TITLES["行くあてのない僕たち"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const harujion: ISingle = {
  title: "ハルジオンが咲く頃",
  number: "14",
  release: "2016-03-23",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.D]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["ハルジオンが咲く頃"].title,
      key: SONG_TITLES["ハルジオンが咲く頃"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["遥かなるブータン"].title,
      key: SONG_TITLES["遥かなるブータン"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["強がる蕾"].title,
      key: SONG_TITLES["強がる蕾"].key,
      inCdType: [CdType.A],
      type: SongType.Solo,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["急斜面"].title,
      key: SONG_TITLES["急斜面"].key,
      inCdType: [CdType.B],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["釣り堀"].title,
      key: SONG_TITLES["釣り堀"].key,
      inCdType: [CdType.C],
      type: SongType.Solo,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["不等号"].title,
      key: SONG_TITLES["不等号"].key,
      inCdType: [CdType.D],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONG_TITLES["憂鬱と風船ガム"].title,
      key: SONG_TITLES["憂鬱と風船ガム"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const hanashitaidarekagairu: ISingle = {
  title: "今、話したい誰かがいる",
  number: "13",
  release: "2015-10-28",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["今、話したい誰かがいる"].title,
      key: SONG_TITLES["今、話したい誰かがいる"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["嫉妬の権利"].title,
      key: SONG_TITLES["嫉妬の権利"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["ポピパッパパー"].title,
      key: SONG_TITLES["ポピパッパパー"].key,
      inCdType: [CdType.A],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["大人への近道"].title,
      key: SONG_TITLES["大人への近道"].key,
      inCdType: [CdType.B],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["悲しみの忘れ方"].title,
      key: SONG_TITLES["悲しみの忘れ方"].key,
      inCdType: [CdType.C],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["隙間"].title,
      key: SONG_TITLES["隙間"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const taiyoknock: ISingle = {
  title: "太陽ノック",
  number: "12",
  release: "2015-07-22",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["太陽ノック"].title,
      key: SONG_TITLES["太陽ノック"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T, CdType.L],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["もう少しの夢"].title,
      key: SONG_TITLES["もう少しの夢"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T, CdType.L],
      type: SongType.Solo,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["魚たちのLOVE SONG"].title,
      key: SONG_TITLES["魚たちのLOVE SONG"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["無表情"].title,
      key: SONG_TITLES["無表情"].key,
      inCdType: [CdType.B],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["別れ際、もっと好きになる"].title,
      key: SONG_TITLES["別れ際、もっと好きになる"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["羽根の記憶"].title,
      key: SONG_TITLES["羽根の記憶"].key,
      inCdType: [CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONG_TITLES["制服を脱いでサヨナラを…"].title,
      key: SONG_TITLES["制服を脱いでサヨナラを…"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.YamazakiRena],
  },
};

const inochihautsukushii: ISingle = {
  title: "命は美しい",
  number: "11",
  release: "2015-03-18",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["命は美しい"].title,
      key: SONG_TITLES["命は美しい"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["あらかじめ語られるロマンス"].title,
      key: SONG_TITLES["あらかじめ語られるロマンス"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["立ち直り中"].title,
      key: SONG_TITLES["立ち直り中"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["ごめんね ずっと…"].title,
      key: SONG_TITLES["ごめんね ずっと…"].key,
      inCdType: [CdType.B],
      type: SongType.Solo,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["君は僕と会わない方がよかったのかな"].title,
      key: SONG_TITLES["君は僕と会わない方がよかったのかな"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["ボーダー"].title,
      key: SONG_TITLES["ボーダー"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouJunna,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
    ],
    skips: [],
  },
};

const nandomenoaozoraka: ISingle = {
  title: "何度目の青空か?",
  number: "10",
  release: "2014-10-08",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["何度目の青空か?"].title,
      key: SONG_TITLES["何度目の青空か?"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["遠回りの愛情"].title,
      key: SONG_TITLES["遠回りの愛情"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["転がった鐘を鳴らせ!"].title,
      key: SONG_TITLES["転がった鐘を鳴らせ!"].key,
      inCdType: [CdType.A],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["私、起きる。"].title,
      key: SONG_TITLES["私、起きる。"].key,
      inCdType: [CdType.B],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["あの日 僕は咄嗟に嘘をついた"].title,
      key: SONG_TITLES["あの日 僕は咄嗟に嘘をついた"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["Tender days"].title,
      key: SONG_TITLES["Tender days"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouJunna,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
    ],
    skips: [],
  },
};

const natsunofreeandeasy: ISingle = {
  title: "夏のFree&Easy",
  number: "9",
  release: "2014-07-09",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["夏のFree&Easy"].title,
      key: SONG_TITLES["夏のFree&Easy"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["何もできずにそばにいる"].title,
      key: SONG_TITLES["何もできずにそばにいる"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["その先の出口!"].title,
      key: SONG_TITLES["その先の出口!"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["無口なライオン"].title,
      key: SONG_TITLES["無口なライオン"].key,
      inCdType: [CdType.B],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["ここにいる理由"].title,
      key: SONG_TITLES["ここにいる理由"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["僕が行かなきゃ誰が行くんだ?"].title,
      key: SONG_TITLES["僕が行かなきゃ誰が行くんだ?"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.YonetokuKyouka,
      MemberNames.YadaRisako,
    ],
    skips: [MemberNames.IkutaErika],
  },
};

const kizuitarakataomoi: ISingle = {
  title: "気づいたら片想い",
  number: "8",
  release: "2014-04-02",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["気づいたら片想い"].title,
      key: SONG_TITLES["気づいたら片想い"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["ロマンスのスタート"].title,
      key: SONG_TITLES["ロマンスのスタート"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["吐息のメソッド"].title,
      key: SONG_TITLES["吐息のメソッド"].key,
      inCdType: [CdType.A],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["孤独兄弟"].title,
      key: SONG_TITLES["孤独兄弟"].key,
      inCdType: [CdType.B],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["生まれたままで"].title,
      key: SONG_TITLES["生まれたままで"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["ダンケシェーン"].title,
      key: SONG_TITLES["ダンケシェーン"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.YonetokuKyouka,
      MemberNames.YadaRisako,
    ],
    skips: [MemberNames.SagaraIori],
  },
};

const valletta: ISingle = {
  title: "バレッタ",
  number: "7",
  release: "2013-11-27",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["バレッタ"].title,
      key: SONG_TITLES["バレッタ"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["月の大きさ"].title,
      key: SONG_TITLES["月の大きさ"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["私のために 誰かのために"].title,
      key: SONG_TITLES["私のために 誰かのために"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["そんなバカな…"].title,
      key: SONG_TITLES["そんなバカな…"].key,
      inCdType: [CdType.B],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["初恋の人を今でも"].title,
      key: SONG_TITLES["初恋の人を今でも"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["やさしさとは"].title,
      key: SONG_TITLES["やさしさとは"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.KitanoHinako,
      MemberNames.SasakiKotoko,
      MemberNames.ShinuchiMai,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.YonetokuKyouka,
      MemberNames.YadaRisako,
      MemberNames.NishikawaNanami,
    ],
    skips: [MemberNames.IchikiRena, MemberNames.SagaraIori],
  },
};

const girlsrule: ISingle = {
  title: "ガールズルール",
  number: "6",
  release: "2013-07-03",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["ガールズルール"].title,
      key: SONG_TITLES["ガールズルール"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["世界で一番 孤独なLover"].title,
      key: SONG_TITLES["世界で一番 孤独なLover"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["コウモリよ"].title,
      key: SONG_TITLES["コウモリよ"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["扇風機"].title,
      key: SONG_TITLES["扇風機"].key,
      inCdType: [CdType.B],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["他の星から"].title,
      key: SONG_TITLES["他の星から"].key,
      inCdType: [CdType.C],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["人間という楽器"].title,
      key: SONG_TITLES["人間という楽器"].key,
      inCdType: [CdType.T],
      type: SongType.FirstGeneration,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.KitanoHinako,
      MemberNames.SasakiKotoko,
      MemberNames.ShinuchiMai,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.HoriMiona,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.YonetokuKyouka,
      MemberNames.YadaRisako,
      MemberNames.NishikawaNanami,
    ],
    skips: [MemberNames.SagaraIori],
  },
};

const kiminonahakibo: ISingle = {
  title: "君の名は希望",
  number: "5",
  release: "2013-03-31",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["君の名は希望"].title,
      key: SONG_TITLES["君の名は希望"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["シャキイズム"].title,
      key: SONG_TITLES["シャキイズム"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["ロマンティックいか焼き"].title,
      key: SONG_TITLES["ロマンティックいか焼き"].key,
      inCdType: [CdType.A],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["13日の金曜日"].title,
      key: SONG_TITLES["13日の金曜日"].key,
      inCdType: [CdType.B],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["でこぴん"].title,
      key: SONG_TITLES["でこぴん"].key,
      inCdType: [CdType.C],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["サイコキネシスの可能性"].title,
      key: SONG_TITLES["サイコキネシスの可能性"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const seifukunomannequin: ISingle = {
  title: "制服のマネキン",
  number: "4",
  release: "2012-12-19",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["制服のマネキン"].title,
      key: SONG_TITLES["制服のマネキン"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["指望遠鏡"].title,
      key: SONG_TITLES["指望遠鏡"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["やさしさなら間に合ってる"].title,
      key: SONG_TITLES["やさしさなら間に合ってる"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["ここじゃないどこか"].title,
      key: SONG_TITLES["ここじゃないどこか"].key,
      inCdType: [CdType.B],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["春のメロディー"].title,
      key: SONG_TITLES["春のメロディー"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["渋谷ブルース"].title,
      key: SONG_TITLES["渋谷ブルース"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KashiwaYukina],
  },
};

const hashirebicycle: ISingle = {
  title: "走れ!Bicycle",
  number: "3",
  release: "2012-08-22",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["走れ!Bicycle"].title,
      key: SONG_TITLES["走れ!Bicycle"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["せっかちなかたつむり"].title,
      key: SONG_TITLES["せっかちなかたつむり"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["涙がまだ悲しみだった頃"].title,
      key: SONG_TITLES["涙がまだ悲しみだった頃"].key,
      inCdType: [CdType.A],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["人はなぜ走るのか?"].title,
      key: SONG_TITLES["人はなぜ走るのか?"].key,
      inCdType: [CdType.B],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["音が出ないギター"].title,
      key: SONG_TITLES["音が出ないギター"].key,
      inCdType: [CdType.C],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["海流の島よ"].title,
      key: SONG_TITLES["海流の島よ"].key,
      inCdType: [CdType.T],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.AkimotoManatsu],
  },
};

const oideshampoo: ISingle = {
  title: "おいでシャンプー",
  number: "2",
  release: "2012-05-02",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["おいでシャンプー"].title,
      key: SONG_TITLES["おいでシャンプー"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["心の薬"].title,
      key: SONG_TITLES["心の薬"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["偶然を言い訳にして"].title,
      key: SONG_TITLES["偶然を言い訳にして"].key,
      inCdType: [CdType.A],
      type: SongType.Unit,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["水玉模様"].title,
      key: SONG_TITLES["水玉模様"].key,
      inCdType: [CdType.B],
      type: SongType.Solo,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["狼に口笛を"].title,
      key: SONG_TITLES["狼に口笛を"].key,
      inCdType: [CdType.C],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["ハウス!"].title,
      key: SONG_TITLES["ハウス!"].key,
      inCdType: [CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.AkimotoManatsu],
  },
};

const gurugurucurtain: ISingle = {
  title: "ぐるぐるカーテン",
  number: "1",
  release: "2012-02-22",
  hasArtworks: true,
  artworks: {
    [CdType.A]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.B]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.C]: {
      large: "",
      medium: "",
      small: "",
    },
    [CdType.T]: {
      large: "",
      medium: "",
      small: "",
    },
  },
  shopping: [
    {
      title: "iTunes",
      url: "",
    },
  ],
  songs: [
    {
      number: 1,
      title: SONG_TITLES["ぐるぐるカーテン"].title,
      key: SONG_TITLES["ぐるぐるカーテン"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Title,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONG_TITLES["左胸の勇気"].title,
      key: SONG_TITLES["左胸の勇気"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
      type: SongType.Under,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONG_TITLES["乃木坂の詩"].title,
      key: SONG_TITLES["乃木坂の詩"].key,
      inCdType: [CdType.A],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONG_TITLES["会いたかったかもしれない"].title,
      key: SONG_TITLES["会いたかったかもしれない"].key,
      inCdType: [CdType.B],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONG_TITLES["失いたくないから"].title,
      key: SONG_TITLES["失いたくないから"].key,
      inCdType: [CdType.C],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONG_TITLES["白い雲にのって"].title,
      key: SONG_TITLES["白い雲にのって"].key,
      inCdType: [CdType.T],
      type: SongType.Coupling,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.AkimotoManatsu],
  },
};

export const singles: ISingles = {
  [kaerimichi.title]: kaerimichi,
  [jikochu.title]: jikochu,
  [syncronicity.title]: syncronicity,
  [itsukadekirukara.title]: itsukadekirukara,
  [nigemizu.title]: nigemizu,
  [influencer.title]: influencer,
  [sayonaranoimi.title]: sayonaranoimi,
  [hadashidesummer.title]: hadashidesummer,
  [harujion.title]: harujion,
  [hanashitaidarekagairu.title]: hanashitaidarekagairu,
  [taiyoknock.title]: taiyoknock,
  [inochihautsukushii.title]: inochihautsukushii,
  [nandomenoaozoraka.title]: nandomenoaozoraka,
  [natsunofreeandeasy.title]: natsunofreeandeasy,
  [kizuitarakataomoi.title]: kizuitarakataomoi,
  [valletta.title]: valletta,
  [girlsrule.title]: girlsrule,
  [kiminonahakibo.title]: kiminonahakibo,
  [seifukunomannequin.title]: seifukunomannequin,
  [hashirebicycle.title]: hashirebicycle,
  [oideshampoo.title]: oideshampoo,
  [gurugurucurtain.title]: gurugurucurtain,
};
