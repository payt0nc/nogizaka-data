import { FukujinType, MemberNames, SongType } from "../common/types";
import { ISong } from "../types/song";

const songKaerimichi: ISong = {
  title: "帰り道は遠回りしたくなる",
  artwork: "path",
  single: "帰り道は遠回りしたくなる",
  albums: [],
  type: SongType.Title,
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.UmezawaMinami,
      MemberNames.YamashitaMizuki,
      MemberNames.SaitouAsuka,
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.IkutaErika,
      MemberNames.YodaYuuki
    ],
    secondRow: [
      MemberNames.EtouMisa,
      MemberNames.AkimotoManatsu,
      MemberNames.HoriMiona,
      MemberNames.WakatsukiYumi,
      MemberNames.HoshinoMinami,
      MemberNames.SakuraiReika,
      MemberNames.MatsumuraSayuri
    ],
    thirdRow: [
      MemberNames.SaitouYuuri,
      MemberNames.InoueSayuri,
      MemberNames.SatouKaede,
      MemberNames.OozonoMomoko,
      MemberNames.ItouRiria,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi
    ]
  }
};

const songNichijo: ISong = {
  title: "日常",
  artwork: "path",
  single: "帰り道は遠回りしたくなる",
  albums: [],
  type: SongType.Under,
  performers: {
    center: [MemberNames.KitanoHinako],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.SuzukiAyane,
      MemberNames.HiguchiHina,
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.IwamotoRenka
    ],
    secondRow: [
      MemberNames.SakaguchiTamami,
      MemberNames.YamazakiRena,
      MemberNames.KuboShiori,
      MemberNames.NakadaKana,
      MemberNames.WatanabeMiria,
      MemberNames.MukaiHazuki
    ],
    thirdRow: [
      MemberNames.ItouJunna,
      MemberNames.WadaMaaya,
      MemberNames.NakamuraReno,
      MemberNames.KawagoHina,
      MemberNames.ItouKarin,
      MemberNames.SasakiKotoko,
      MemberNames.YoshidaAyanoChristie
    ]
  }
};

const songJikochu: ISong = {
  title: "ジコチューで行こう！",
  artwork: "path",
  single: "ジコチューで行こう！",
  albums: [],
  type: SongType.Title,
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.YodaYuuki,
      MemberNames.NishinoNanase,
      MemberNames.SaitouAsuka,
      MemberNames.ShiraishiMai,
      MemberNames.HoriMiona,
      MemberNames.YamashitaMizuki
    ],
    secondRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.EtouMisa,
      MemberNames.OozonoMomoko,
      MemberNames.UmezawaMinami,
      MemberNames.IwamotoRenka,
      MemberNames.MatsumuraSayuri,
      MemberNames.SakuraiReika
    ],
    thirdRow: [
      MemberNames.TakayamaKazumi,
      MemberNames.SaitouYuuri,
      MemberNames.WakatsukiYumi,
      MemberNames.SuzukiAyane,
      MemberNames.HoshinoMinami,
      MemberNames.ShinuchiMai,
      MemberNames.InoueSayuri
    ]
  }
};

const songSankaku: ISong = {
  title: "三角の空き地",
  artwork: "path",
  single: "ジコチューで行こう！",
  albums: [],
  type: SongType.Under,
  performers: {
    center: [MemberNames.NakadaKana],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.HiguchiHina,
      MemberNames.NakadaKana,
      MemberNames.ItouRiria
    ],
    secondRow: [
      MemberNames.YamazakiRena,
      MemberNames.SakaguchiTamami,
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.WatanabeMiria,
      MemberNames.SatouKaede
    ],
    thirdRow: [
      MemberNames.YoshidaAyanoChristie,
      MemberNames.WadaMaaya,
      MemberNames.KawagoHina,
      MemberNames.NoujouAmi,
      MemberNames.NakamuraReno,
      MemberNames.ItouKarin,
      MemberNames.SasakiKotoko,
      MemberNames.MukaiHazuki,
      MemberNames.ItouJunna
    ]
  }
};

export const songs = {
  "帰り道は遠回りしたくなる": songKaerimichi,
  "日常": songNichijo,
  "ジコチューで行こう！": songJikochu,
  "三角の空き地": songSankaku
};
