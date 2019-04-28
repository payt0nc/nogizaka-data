import { ISingle, ISingles } from "../models/ISingle";
import { CdType, FocusPerformersType, MemberNames, SongType, SONGS } from "../utils/constants";

const singout: ISingle = {
  title: "Sing Out!",
  number: "23",
  release: "2019-05-29",
  hasArtworks: false,
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
      title: SONGS["Sing Out!"].title,
      key: SONGS["Sing Out!"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.None,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 2,
      title: SONGS["滑走路"].title,
      key: SONGS["滑走路"].key,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      type: SongType.None,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 3,
      title: SONGS["のような存在"].title,
      key: SONGS["のような存在"].key,
      inCdType: [CdType.A],
      type: SongType.None,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 4,
      title: SONGS["Am I Loving"].title,
      key: SONGS["Am I Loving"].key,
      inCdType: [CdType.B],
      type: SongType.None,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 5,
      title: SONGS["平行線"].title,
      key: SONGS["平行線"].key,
      inCdType: [CdType.C],
      type: SongType.None,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 6,
      title: SONGS["4番目の光"].title,
      key: SONGS["4番目の光"].key,
      inCdType: [CdType.D],
      type: SongType.None,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
    {
      number: 7,
      title: SONGS["曖昧"].title,
      key: SONGS["曖昧"].key,
      inCdType: [CdType.T],
      type: SongType.None,
      artwork: { large: "", medium: "", small: "" },
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    },
  ],
  behindPerformers: {
    trainees: [
      MemberNames.EndouSakura,
      MemberNames.KakiHaruka,
      MemberNames.KakehashiSayaka,
      MemberNames.KanagawaSaya,
      MemberNames.KitagawaYuri,
      MemberNames.ShibataYuna,
      MemberNames.SeimiyaRei,
      MemberNames.TamuraMayu,
      MemberNames.TsutsuiAyame,
      MemberNames.HayakawaSeira,
      MemberNames.YakuboMio,
    ],
    skips: [MemberNames.YamashitaMizuki],
  },
};

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
      title: SONGS["帰り道は遠回りしたくなる"].title,
      key: SONGS["帰り道は遠回りしたくなる"].key,
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
      title: SONGS["キャラバンは眠らない"].title,
      key: SONGS["キャラバンは眠らない"].key,
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
      title: SONGS["つづく"].title,
      key: SONGS["つづく"].key,
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
      title: SONGS["日常"].title,
      key: SONGS["日常"].key,
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
      title: SONGS["告白の順番"].title,
      key: SONGS["告白の順番"].key,
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
      title: SONGS["ショパンの嘘つき"].title,
      key: SONGS["ショパンの嘘つき"].key,
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
      title: SONGS["知りたいこと"].title,
      key: SONGS["知りたいこと"].key,
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
      title: SONGS["ジコチューで行こう!"].title,
      key: SONGS["ジコチューで行こう!"].key,
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
      title: SONGS["空扉"].title,
      key: SONGS["空扉"].key,
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
      title: SONGS["三角の空き地"].title,
      key: SONGS["三角の空き地"].key,
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
      title: SONGS["自分じゃない感じ"].title,
      key: SONGS["自分じゃない感じ"].key,
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
      title: SONGS["心のモノローグ"].title,
      key: SONGS["心のモノローグ"].key,
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
      title: SONGS["地球が丸いなら"].title,
      key: SONGS["地球が丸いなら"].key,
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
      title: SONGS["あんなに好きだったのに・・・"].title,
      key: SONGS["あんなに好きだったのに・・・"].key,
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
      title: SONGS["シンクロニシティ"].title,
      key: SONGS["シンクロニシティ"].key,
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
      title: SONGS["Against"].title,
      key: SONGS["Against"].key,
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
      title: SONGS["雲になればいい"].title,
      key: SONGS["雲になればいい"].key,
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
      title: SONGS["新しい世界"].title,
      key: SONGS["新しい世界"].key,
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
      title: SONGS["スカウトマン"].title,
      key: SONGS["スカウトマン"].key,
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
      title: SONGS["トキトキメキメキ"].title,
      key: SONGS["トキトキメキメキ"].key,
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
      title: SONGS["言霊砲"].title,
      key: SONGS["言霊砲"].key,
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
      title: SONGS["いつかできるから今日できる"].title,
      key: SONGS["いつかできるから今日できる"].key,
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
      title: SONGS["不眠症"].title,
      key: SONGS["不眠症"].key,
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
      title: SONGS["まあいいか?"].title,
      key: SONGS["まあいいか?"].key,
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
      title: SONGS["失恋お掃除人"].title,
      key: SONGS["失恋お掃除人"].key,
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
      title: SONGS["My rule"].title,
      key: SONGS["My rule"].key,
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
      title: SONGS["僕の衝動"].title,
      key: SONGS["僕の衝動"].key,
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
      title: SONGS["新しい花粉 〜ミュージカル「見知らぬ世界」より〜"].title,
      key: SONGS["新しい花粉 〜ミュージカル「見知らぬ世界」より〜"].key,
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
      title: SONGS["逃げ水"].title,
      key: SONGS["逃げ水"].key,
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
      title: SONGS["女は一人じゃ眠れない"].title,
      key: SONGS["女は一人じゃ眠れない"].key,
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
      title: SONGS["ひと夏の長さより…"].title,
      key: SONGS["ひと夏の長さより…"].key,
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
      title: SONGS["泣いたっていいじゃないか?"].title,
      key: SONGS["泣いたっていいじゃないか?"].key,
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
      title: SONGS["アンダー"].title,
      key: SONGS["アンダー"].key,
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
      title: SONGS["ライブ神"].title,
      key: SONGS["ライブ神"].key,
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
      title: SONGS["未来の答え"].title,
      key: SONGS["未来の答え"].key,
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
      title: SONGS["インフルエンサー"].title,
      key: SONGS["インフルエンサー"].key,
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
      title: SONGS["人生を考えたくなる"].title,
      key: SONGS["人生を考えたくなる"].key,
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
      title: SONGS["意外BREAK"].title,
      key: SONGS["意外BREAK"].key,
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
      title: SONGS["Another Ghost"].title,
      key: SONGS["Another Ghost"].key,
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
      title: SONGS["風船は生きている"].title,
      key: SONGS["風船は生きている"].key,
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
      title: SONGS["三番目の風"].title,
      key: SONGS["三番目の風"].key,
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
      title: SONGS["当たり障りのない話"].title,
      key: SONGS["当たり障りのない話"].key,
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
      title: SONGS["サヨナラの意味"].title,
      key: SONGS["サヨナラの意味"].key,
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
      title: SONGS["孤独な青空"].title,
      key: SONGS["孤独な青空"].key,
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
      title: SONGS["あの教室"].title,
      key: SONGS["あの教室"].key,
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
      title: SONGS["ブランコ"].title,
      key: SONGS["ブランコ"].key,
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
      title: SONGS["2度目のキスから"].title,
      key: SONGS["2度目のキスから"].key,
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
      title: SONGS["君に贈る花がない"].title,
      key: SONGS["君に贈る花がない"].key,
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
      title: SONGS["ないものねだり"].title,
      key: SONGS["ないものねだり"].key,
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
      title: SONGS["裸足でSummer"].title,
      key: SONGS["裸足でSummer"].key,
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
      title: SONGS["僕だけの光"].title,
      key: SONGS["僕だけの光"].key,
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
      title: SONGS["オフショアガール"].title,
      key: SONGS["オフショアガール"].key,
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
      title: SONGS["命の真実 ミュージカル「林檎売りとカメムシ」"].title,
      key: SONGS["命の真実 ミュージカル「林檎売りとカメムシ」"].key,
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
      title: SONGS["白米様"].title,
      key: SONGS["白米様"].key,
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
      title: SONGS["シークレットグラフィティー"].title,
      key: SONGS["シークレットグラフィティー"].key,
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
      title: SONGS["行くあてのない僕たち"].title,
      key: SONGS["行くあてのない僕たち"].key,
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
      title: SONGS["ハルジオンが咲く頃"].title,
      key: SONGS["ハルジオンが咲く頃"].key,
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
      title: SONGS["遥かなるブータン"].title,
      key: SONGS["遥かなるブータン"].key,
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
      title: SONGS["強がる蕾"].title,
      key: SONGS["強がる蕾"].key,
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
      title: SONGS["急斜面"].title,
      key: SONGS["急斜面"].key,
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
      title: SONGS["釣り堀"].title,
      key: SONGS["釣り堀"].key,
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
      title: SONGS["不等号"].title,
      key: SONGS["不等号"].key,
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
      title: SONGS["憂鬱と風船ガム"].title,
      key: SONGS["憂鬱と風船ガム"].key,
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
      title: SONGS["今、話したい誰かがいる"].title,
      key: SONGS["今、話したい誰かがいる"].key,
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
      title: SONGS["嫉妬の権利"].title,
      key: SONGS["嫉妬の権利"].key,
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
      title: SONGS["ポピパッパパー"].title,
      key: SONGS["ポピパッパパー"].key,
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
      title: SONGS["大人への近道"].title,
      key: SONGS["大人への近道"].key,
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
      title: SONGS["悲しみの忘れ方"].title,
      key: SONGS["悲しみの忘れ方"].key,
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
      title: SONGS["隙間"].title,
      key: SONGS["隙間"].key,
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
      title: SONGS["太陽ノック"].title,
      key: SONGS["太陽ノック"].key,
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
      title: SONGS["もう少しの夢"].title,
      key: SONGS["もう少しの夢"].key,
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
      title: SONGS["魚たちのLOVE SONG"].title,
      key: SONGS["魚たちのLOVE SONG"].key,
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
      title: SONGS["無表情"].title,
      key: SONGS["無表情"].key,
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
      title: SONGS["別れ際、もっと好きになる"].title,
      key: SONGS["別れ際、もっと好きになる"].key,
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
      title: SONGS["羽根の記憶"].title,
      key: SONGS["羽根の記憶"].key,
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
      title: SONGS["制服を脱いでサヨナラを…"].title,
      key: SONGS["制服を脱いでサヨナラを…"].key,
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
      title: SONGS["命は美しい"].title,
      key: SONGS["命は美しい"].key,
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
      title: SONGS["あらかじめ語られるロマンス"].title,
      key: SONGS["あらかじめ語られるロマンス"].key,
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
      title: SONGS["立ち直り中"].title,
      key: SONGS["立ち直り中"].key,
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
      title: SONGS["ごめんね ずっと…"].title,
      key: SONGS["ごめんね ずっと…"].key,
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
      title: SONGS["君は僕と会わない方がよかったのかな"].title,
      key: SONGS["君は僕と会わない方がよかったのかな"].key,
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
      title: SONGS["ボーダー"].title,
      key: SONGS["ボーダー"].key,
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
      title: SONGS["何度目の青空か?"].title,
      key: SONGS["何度目の青空か?"].key,
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
      title: SONGS["遠回りの愛情"].title,
      key: SONGS["遠回りの愛情"].key,
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
      title: SONGS["転がった鐘を鳴らせ!"].title,
      key: SONGS["転がった鐘を鳴らせ!"].key,
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
      title: SONGS["私、起きる。"].title,
      key: SONGS["私、起きる。"].key,
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
      title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
      key: SONGS["あの日 僕は咄嗟に嘘をついた"].key,
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
      title: SONGS["Tender days"].title,
      key: SONGS["Tender days"].key,
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
      title: SONGS["夏のFree&Easy"].title,
      key: SONGS["夏のFree&Easy"].key,
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
      title: SONGS["何もできずにそばにいる"].title,
      key: SONGS["何もできずにそばにいる"].key,
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
      title: SONGS["その先の出口!"].title,
      key: SONGS["その先の出口!"].key,
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
      title: SONGS["無口なライオン"].title,
      key: SONGS["無口なライオン"].key,
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
      title: SONGS["ここにいる理由"].title,
      key: SONGS["ここにいる理由"].key,
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
      title: SONGS["僕が行かなきゃ誰が行くんだ?"].title,
      key: SONGS["僕が行かなきゃ誰が行くんだ?"].key,
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
      title: SONGS["気づいたら片想い"].title,
      key: SONGS["気づいたら片想い"].key,
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
      title: SONGS["ロマンスのスタート"].title,
      key: SONGS["ロマンスのスタート"].key,
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
      title: SONGS["吐息のメソッド"].title,
      key: SONGS["吐息のメソッド"].key,
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
      title: SONGS["孤独兄弟"].title,
      key: SONGS["孤独兄弟"].key,
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
      title: SONGS["生まれたままで"].title,
      key: SONGS["生まれたままで"].key,
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
      title: SONGS["ダンケシェーン"].title,
      key: SONGS["ダンケシェーン"].key,
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
      title: SONGS["バレッタ"].title,
      key: SONGS["バレッタ"].key,
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
      title: SONGS["月の大きさ"].title,
      key: SONGS["月の大きさ"].key,
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
      title: SONGS["私のために 誰かのために"].title,
      key: SONGS["私のために 誰かのために"].key,
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
      title: SONGS["そんなバカな…"].title,
      key: SONGS["そんなバカな…"].key,
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
      title: SONGS["初恋の人を今でも"].title,
      key: SONGS["初恋の人を今でも"].key,
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
      title: SONGS["やさしさとは"].title,
      key: SONGS["やさしさとは"].key,
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
      title: SONGS["ガールズルール"].title,
      key: SONGS["ガールズルール"].key,
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
      title: SONGS["世界で一番 孤独なLover"].title,
      key: SONGS["世界で一番 孤独なLover"].key,
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
      title: SONGS["コウモリよ"].title,
      key: SONGS["コウモリよ"].key,
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
      title: SONGS["扇風機"].title,
      key: SONGS["扇風機"].key,
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
      title: SONGS["他の星から"].title,
      key: SONGS["他の星から"].key,
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
      title: SONGS["人間という楽器"].title,
      key: SONGS["人間という楽器"].key,
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
      title: SONGS["君の名は希望"].title,
      key: SONGS["君の名は希望"].key,
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
      title: SONGS["シャキイズム"].title,
      key: SONGS["シャキイズム"].key,
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
      title: SONGS["ロマンティックいか焼き"].title,
      key: SONGS["ロマンティックいか焼き"].key,
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
      title: SONGS["13日の金曜日"].title,
      key: SONGS["13日の金曜日"].key,
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
      title: SONGS["でこぴん"].title,
      key: SONGS["でこぴん"].key,
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
      title: SONGS["サイコキネシスの可能性"].title,
      key: SONGS["サイコキネシスの可能性"].key,
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
      title: SONGS["制服のマネキン"].title,
      key: SONGS["制服のマネキン"].key,
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
      title: SONGS["指望遠鏡"].title,
      key: SONGS["指望遠鏡"].key,
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
      title: SONGS["やさしさなら間に合ってる"].title,
      key: SONGS["やさしさなら間に合ってる"].key,
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
      title: SONGS["ここじゃないどこか"].title,
      key: SONGS["ここじゃないどこか"].key,
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
      title: SONGS["春のメロディー"].title,
      key: SONGS["春のメロディー"].key,
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
      title: SONGS["渋谷ブルース"].title,
      key: SONGS["渋谷ブルース"].key,
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
      title: SONGS["走れ!Bicycle"].title,
      key: SONGS["走れ!Bicycle"].key,
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
      title: SONGS["せっかちなかたつむり"].title,
      key: SONGS["せっかちなかたつむり"].key,
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
      title: SONGS["涙がまだ悲しみだった頃"].title,
      key: SONGS["涙がまだ悲しみだった頃"].key,
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
      title: SONGS["人はなぜ走るのか?"].title,
      key: SONGS["人はなぜ走るのか?"].key,
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
      title: SONGS["音が出ないギター"].title,
      key: SONGS["音が出ないギター"].key,
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
      title: SONGS["海流の島よ"].title,
      key: SONGS["海流の島よ"].key,
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
      title: SONGS["おいでシャンプー"].title,
      key: SONGS["おいでシャンプー"].key,
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
      title: SONGS["心の薬"].title,
      key: SONGS["心の薬"].key,
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
      title: SONGS["偶然を言い訳にして"].title,
      key: SONGS["偶然を言い訳にして"].key,
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
      title: SONGS["水玉模様"].title,
      key: SONGS["水玉模様"].key,
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
      title: SONGS["狼に口笛を"].title,
      key: SONGS["狼に口笛を"].key,
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
      title: SONGS["ハウス!"].title,
      key: SONGS["ハウス!"].key,
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
      title: SONGS["ぐるぐるカーテン"].title,
      key: SONGS["ぐるぐるカーテン"].key,
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
      title: SONGS["左胸の勇気"].title,
      key: SONGS["左胸の勇気"].key,
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
      title: SONGS["乃木坂の詩"].title,
      key: SONGS["乃木坂の詩"].key,
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
      title: SONGS["会いたかったかもしれない"].title,
      key: SONGS["会いたかったかもしれない"].key,
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
      title: SONGS["失いたくないから"].title,
      key: SONGS["失いたくないから"].key,
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
      title: SONGS["白い雲にのって"].title,
      key: SONGS["白い雲にのって"].key,
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
  [singout.title]: singout,
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
