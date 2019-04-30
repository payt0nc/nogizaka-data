import { RawSingle } from "../models/ISingle";
import { CdType, MemberNames, SONGS } from "../utils/constants";

const singout: RawSingle = {
  title: "Sing Out!",
  number: "23",
  release: "2019-05-29",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["Sing Out!"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["滑走路"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["のような存在"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["Am I Loving"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["平行線"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["4番目の光"].title,
      inCdType: [CdType.D],
    },
    {
      number: 7,
      title: SONGS["曖昧"].title,
      inCdType: [CdType.T],
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

const kaerimichi: RawSingle = {
  title: "帰り道は遠回りしたくなる",
  number: "22",
  release: "2018-11-14",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["帰り道は遠回りしたくなる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["キャラバンは眠らない"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["つづく"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["日常"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["告白の順番"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["ショパンの嘘つき"].title,
      inCdType: [CdType.D],
    },
    {
      number: 7,
      title: SONGS["知りたいこと"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const jikochu: RawSingle = {
  title: "ジコチューで行こう!",
  number: "21",
  release: "2018-08-08",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["ジコチューで行こう!"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["空扉"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["三角の空き地"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["自分じゃない感じ"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["心のモノローグ"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["地球が丸いなら"].title,
      inCdType: [CdType.D],
    },
    {
      number: 7,
      title: SONGS["あんなに好きだったのに・・・"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KuboShiori],
  },
};

const syncronicity: RawSingle = {
  title: "シンクロニシティ",
  number: "20",
  release: "2018-04-25",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["シンクロニシティ"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["Against"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["雲になればいい"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["新しい世界"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["スカウトマン"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["トキトキメキメキ"].title,
      inCdType: [CdType.D],
    },
    {
      number: 7,
      title: SONGS["言霊砲"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KitanoHinako],
  },
};

const itsukadekirukara: RawSingle = {
  title: "いつかできるから今日できる",
  number: "19",
  release: "2017-10-11",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["いつかできるから今日できる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["不眠症"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["まあいいか?"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["失恋お掃除人"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["My rule"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["僕の衝動"].title,
      inCdType: [CdType.D],
    },
    {
      number: 7,
      title: SONGS["新しい花粉 〜ミュージカル「見知らぬ世界」より〜"].title,
      inCdType: [CdType.T],
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

const nigemizu: RawSingle = {
  title: "逃げ水",
  number: "18",
  release: "2017-08-09",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["逃げ水"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["女は一人じゃ眠れない"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["ひと夏の長さより…"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["泣いたっていいじゃないか?"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["アンダー"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["ライブ神"].title,
      inCdType: [CdType.D],
    },
    {
      number: 7,
      title: SONGS["未来の答え"].title,
      inCdType: [CdType.T],
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

const influencer: RawSingle = {
  title: "インフルエンサー",
  number: "17",
  release: "2017-03-22",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["インフルエンサー"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["人生を考えたくなる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["意外BREAK"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["Another Ghost"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["風船は生きている"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["三番目の風"].title,
      inCdType: [CdType.D],
    },
    {
      number: 7,
      title: SONGS["当たり障りのない話"].title,
      inCdType: [CdType.T],
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

const sayonaranoimi: RawSingle = {
  title: "サヨナラの意味",
  number: "16",
  release: "2016-11-09",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["サヨナラの意味"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["孤独な青空"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["あの教室"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["ブランコ"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["2度目のキスから"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["君に贈る花がない"].title,
      inCdType: [CdType.D],
    },
    {
      number: 7,
      title: SONGS["ないものねだり"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const hadashidesummer: RawSingle = {
  title: "裸足でSummer",
  number: "15",
  release: "2016-07-27",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["裸足でSummer"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["僕だけの光"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["オフショアガール"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["命の真実 ミュージカル「林檎売りとカメムシ」"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["白米様"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["シークレットグラフィティー"].title,
      inCdType: [CdType.D],
    },
    {
      number: 7,
      title: SONGS["行くあてのない僕たち"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const harujion: RawSingle = {
  title: "ハルジオンが咲く頃",
  number: "14",
  release: "2016-03-23",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["ハルジオンが咲く頃"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["遥かなるブータン"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["強がる蕾"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["急斜面"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["釣り堀"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["不等号"].title,
      inCdType: [CdType.D],
    },
    {
      number: 7,
      title: SONGS["憂鬱と風船ガム"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const hanashitaidarekagairu: RawSingle = {
  title: "今、話したい誰かがいる",
  number: "13",
  release: "2015-10-28",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["今、話したい誰かがいる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["嫉妬の権利"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["ポピパッパパー"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["大人への近道"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["悲しみの忘れ方"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["隙間"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const taiyoknock: RawSingle = {
  title: "太陽ノック",
  number: "12",
  release: "2015-07-22",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["太陽ノック"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T, CdType.L],
    },
    {
      number: 2,
      title: SONGS["もう少しの夢"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T, CdType.L],
    },
    {
      number: 3,
      title: SONGS["魚たちのLOVE SONG"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["無表情"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["別れ際、もっと好きになる"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["羽根の記憶"].title,
      inCdType: [CdType.T],
    },
    {
      number: 7,
      title: SONGS["制服を脱いでサヨナラを…"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.YamazakiRena],
  },
};

const inochihautsukushii: RawSingle = {
  title: "命は美しい",
  number: "11",
  release: "2015-03-18",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["命は美しい"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["あらかじめ語られるロマンス"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["立ち直り中"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["ごめんね ずっと…"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["君は僕と会わない方がよかったのかな"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["ボーダー"].title,
      inCdType: [CdType.T],
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

const nandomenoaozoraka: RawSingle = {
  title: "何度目の青空か?",
  number: "10",
  release: "2014-10-08",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["何度目の青空か?"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["遠回りの愛情"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["転がった鐘を鳴らせ!"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["私、起きる。"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["Tender days"].title,
      inCdType: [CdType.T],
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

const natsunofreeandeasy: RawSingle = {
  title: "夏のFree&Easy",
  number: "9",
  release: "2014-07-09",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["夏のFree&Easy"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["何もできずにそばにいる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["その先の出口!"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["無口なライオン"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["ここにいる理由"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["僕が行かなきゃ誰が行くんだ?"].title,
      inCdType: [CdType.T],
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

const kizuitarakataomoi: RawSingle = {
  title: "気づいたら片想い",
  number: "8",
  release: "2014-04-02",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["気づいたら片想い"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["ロマンスのスタート"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["吐息のメソッド"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["孤独兄弟"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["生まれたままで"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["ダンケシェーン"].title,
      inCdType: [CdType.T],
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

const valletta: RawSingle = {
  title: "バレッタ",
  number: "7",
  release: "2013-11-27",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["バレッタ"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["月の大きさ"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["私のために 誰かのために"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["そんなバカな…"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["初恋の人を今でも"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["やさしさとは"].title,
      inCdType: [CdType.T],
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

const girlsrule: RawSingle = {
  title: "ガールズルール",
  number: "6",
  release: "2013-07-03",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["ガールズルール"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["世界で一番 孤独なLover"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["コウモリよ"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["扇風機"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["他の星から"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["人間という楽器"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const kiminonahakibo: RawSingle = {
  title: "君の名は希望",
  number: "5",
  release: "2013-03-31",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["君の名は希望"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["シャキイズム"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["ロマンティックいか焼き"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["13日の金曜日"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["でこぴん"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["サイコキネシスの可能性"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [],
  },
};

const seifukunomannequin: RawSingle = {
  title: "制服のマネキン",
  number: "4",
  release: "2012-12-19",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["制服のマネキン"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["指望遠鏡"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["やさしさなら間に合ってる"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["ここじゃないどこか"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["春のメロディー"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["渋谷ブルース"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KashiwaYukina],
  },
};

const hashirebicycle: RawSingle = {
  title: "走れ!Bicycle",
  number: "3",
  release: "2012-08-22",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["走れ!Bicycle"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["せっかちなかたつむり"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["涙がまだ悲しみだった頃"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["人はなぜ走るのか?"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["音が出ないギター"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["海流の島よ"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.AkimotoManatsu],
  },
};

const oideshampoo: RawSingle = {
  title: "おいでシャンプー",
  number: "2",
  release: "2012-05-02",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["おいでシャンプー"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["心の薬"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["偶然を言い訳にして"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["水玉模様"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["狼に口笛を"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["ハウス!"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.AkimotoManatsu],
  },
};

const gurugurucurtain: RawSingle = {
  title: "ぐるぐるカーテン",
  number: "1",
  release: "2012-02-22",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["ぐるぐるカーテン"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 2,
      title: SONGS["左胸の勇気"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      number: 3,
      title: SONGS["乃木坂の詩"].title,
      inCdType: [CdType.A],
    },
    {
      number: 4,
      title: SONGS["会いたかったかもしれない"].title,
      inCdType: [CdType.B],
    },
    {
      number: 5,
      title: SONGS["失いたくないから"].title,
      inCdType: [CdType.C],
    },
    {
      number: 6,
      title: SONGS["白い雲にのって"].title,
      inCdType: [CdType.T],
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.AkimotoManatsu],
  },
};

export const rawSingles: RawSingle[] = [
  singout,
  kaerimichi,
  jikochu,
  syncronicity,
  itsukadekirukara,
  nigemizu,
  influencer,
  sayonaranoimi,
  hadashidesummer,
  harujion,
  hanashitaidarekagairu,
  taiyoknock,
  inochihautsukushii,
  nandomenoaozoraka,
  natsunofreeandeasy,
  kizuitarakataomoi,
  valletta,
  girlsrule,
  kiminonahakibo,
  seifukunomannequin,
  hashirebicycle,
  oideshampoo,
  gurugurucurtain,
];
