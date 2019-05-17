import { RawSong } from "../models/ISong";
import { FukujinType, MemberNames, SongType, SONGS } from "../utils/constants";

// SINGLE SONGS

// 23rd single

const singout: RawSong = {
  title: SONGS["Sing Out!"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Ryota Saito", "TETTA"],
    arrange: ["野中“まさ”雄一"],
    direct: ["池田一真"],
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.OozonoMomoko,
      MemberNames.HoriMiona,
      MemberNames.IkutaErika,
      MemberNames.SaitouAsuka,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.YodaYuuki,
    ],
    secondRow: [
      MemberNames.UmezawaMinami,
      MemberNames.KitanoHinako,
      MemberNames.AkimotoManatsu,
      MemberNames.KuboShiori,
      MemberNames.MatsumuraSayuri,
      MemberNames.HoshinoMinami,
      MemberNames.SakuraiReika,
    ],
    thirdRow: [
      MemberNames.InoueSayuri,
      MemberNames.SatouKaede,
      MemberNames.SuzukiAyane,
      MemberNames.IwamotoRenka,
      MemberNames.SakaguchiTamami,
      MemberNames.WatanabeMiria,
      MemberNames.ItouRiria,
      MemberNames.ShinuchiMai,
    ],
    fourthRow: [],
  },
};

const kassouro: RawSong = {
  title: SONGS["滑走路"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: [],
    arrange: [],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouJunna,
      MemberNames.SasakiKotoko,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NakamuraReno,
      MemberNames.HiguchiHina,
      MemberNames.MukaiHazuki,
      MemberNames.YamazakiRena,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const noyounasonzai: RawSong = {
  title: SONGS["のような存在"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: [],
    arrange: [],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.SaitouAsuka, MemberNames.ShiraishiMai],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const amiloving: RawSong = {
  title: SONGS["Am I Loving?"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: [],
    arrange: [],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.KitanoHinako,
      MemberNames.SuzukiAyane,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const heikousen: RawSong = {
  title: SONGS["平行線"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: [],
    arrange: [],
    direct: ["泉田岳"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IwamotoRenka,
      MemberNames.OozonoMomoko,
      MemberNames.KuboShiori,
      MemberNames.SakaguchiTamami,
      MemberNames.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const yonbanmenohikari: RawSong = {
  title: SONGS["4番目の光"].title,
  musicVideo: "",
  type: SongType.FourthGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: [],
    arrange: [],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const aimai: RawSong = {
  title: SONGS["曖昧"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: [],
    arrange: [],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "からあげ姉妹",
  },
  formations: {
    firstRow: [MemberNames.IkutaErika, MemberNames.MatsumuraSayuri],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 22nd single

const songKaerimichi: RawSong = {
  title: SONGS["帰り道は遠回りしたくなる"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["渡邉俊彦"],
    arrange: ["渡邉俊彦", "早川博隆"],
    direct: ["関和亮"],
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.UmezawaMinami,
      MemberNames.YamashitaMizuki,
      MemberNames.SaitouAsuka,
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.IkutaErika,
      MemberNames.YodaYuuki,
    ],
    secondRow: [
      MemberNames.EtouMisa,
      MemberNames.AkimotoManatsu,
      MemberNames.HoriMiona,
      MemberNames.WakatsukiYumi,
      MemberNames.HoshinoMinami,
      MemberNames.SakuraiReika,
      MemberNames.MatsumuraSayuri,
    ],
    thirdRow: [
      MemberNames.SaitouYuuri,
      MemberNames.InoueSayuri,
      MemberNames.SatouKaede,
      MemberNames.OozonoMomoko,
      MemberNames.ItouRiria,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songNichijo: RawSong = {
  title: SONGS["日常"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "野口大志"],
    arrange: ["Akira Sunset", "野口大志"],
    direct: ["今泉力哉"],
  },
  performers: {
    center: [MemberNames.KitanoHinako],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SuzukiAyane,
      MemberNames.HiguchiHina,
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.IwamotoRenka,
    ],
    secondRow: [
      MemberNames.SakaguchiTamami,
      MemberNames.YamazakiRena,
      MemberNames.KuboShiori,
      MemberNames.NakadaKana,
      MemberNames.WatanabeMiria,
      MemberNames.MukaiHazuki,
    ],
    thirdRow: [
      MemberNames.ItouJunna,
      MemberNames.WadaMaaya,
      MemberNames.NakamuraReno,
      MemberNames.KawagoHina,
      MemberNames.ItouKarin,
      MemberNames.SasakiKotoko,
      MemberNames.YoshidaAyanoChristie,
    ],
    fourthRow: [],
  },
};

const songKyaraban: RawSong = {
  title: SONGS["キャラバンは眠らない"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["CottON"],
    arrange: ["CottON"],
    direct: ["横堀光範"],
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouRiria,
      MemberNames.IwamotoRenka,
      MemberNames.UmezawaMinami,
      MemberNames.OozonoMomoko,
      MemberNames.KitanoHinako,
      MemberNames.KuboShiori,
      MemberNames.SaitouAsuka,
      MemberNames.SatouKaede,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.HiguchiHina,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.YamashitaMizuki,
      MemberNames.YodaYuuki,
      MemberNames.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTsuduku: RawSong = {
  title: SONGS["つづく"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["若田部誠"],
    arrange: ["若田部誠"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKokuhakunojunban: RawSong = {
  title: SONGS["告白の順番"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["安部純"],
    arrange: ["安部純"],
    direct: ["荒船泰廣"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "女子校カルテット",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songChopinnousotsuki: RawSong = {
  title: SONGS["ショパンの嘘つき"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山本加津彦"],
    arrange: ["山本加津彦"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.ShiraishiMai,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songShiritaikoto: RawSong = {
  title: SONGS["知りたいこと"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["佐々木裕"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.HoshinoMinami,
      MemberNames.YamashitaMizuki,
      MemberNames.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 21st single

const songJikochu: RawSong = {
  title: SONGS["ジコチューで行こう!"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ナスカ"],
    arrange: ['野中"まさ"雄一'],
    direct: ["中村太洸"],
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.YodaYuuki,
      MemberNames.NishinoNanase,
      MemberNames.SaitouAsuka,
      MemberNames.ShiraishiMai,
      MemberNames.HoriMiona,
      MemberNames.YamashitaMizuki,
    ],
    secondRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.EtouMisa,
      MemberNames.OozonoMomoko,
      MemberNames.UmezawaMinami,
      MemberNames.IwamotoRenka,
      MemberNames.MatsumuraSayuri,
      MemberNames.SakuraiReika,
    ],
    thirdRow: [
      MemberNames.TakayamaKazumi,
      MemberNames.SaitouYuuri,
      MemberNames.WakatsukiYumi,
      MemberNames.SuzukiAyane,
      MemberNames.HoshinoMinami,
      MemberNames.ShinuchiMai,
      MemberNames.InoueSayuri,
    ],
    fourthRow: [],
  },
};

const songSankakunoakichi: RawSong = {
  title: SONGS["三角の空き地"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiroki"],
    arrange: ["Yasutaka.Ishio"],
    direct: ["月田茂"],
  },
  performers: {
    center: [MemberNames.NakadaKana],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.HiguchiHina,
      MemberNames.NakadaKana,
      MemberNames.ItouRiria,
    ],
    secondRow: [
      MemberNames.YamazakiRena,
      MemberNames.SakaguchiTamami,
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.WatanabeMiria,
      MemberNames.SatouKaede,
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
      MemberNames.ItouJunna,
    ],
    fourthRow: [],
  },
};

const songSoratobira: RawSong = {
  title: SONGS["空扉"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["FURUTA", "Dr.Lilcom"],
    arrange: ["Dr.Lilcom"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [MemberNames.UmezawaMinami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.InoueSayuri,
      MemberNames.IwamotoRenka,
      MemberNames.UmezawaMinami,
      MemberNames.EtouMisa,
      MemberNames.OozonoMomoko,
      MemberNames.SaitouYuuri,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.SuzukiAyane,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.YamashitaMizuki,
      MemberNames.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songJibunjanaikanji: RawSong = {
  title: SONGS["自分じゃない感じ"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ツキダタダシ"],
    direct: [],
  },
  performers: {
    center: [MemberNames.YamashitaMizuki],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouRiria,
      MemberNames.IwamotoRenka,
      MemberNames.UmezawaMinami,
      MemberNames.OozonoMomoko,
      MemberNames.SakaguchiTamami,
      MemberNames.SatouKaede,
      MemberNames.NakamuraReno,
      MemberNames.MukaiHazuki,
      MemberNames.YamashitaMizuki,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKokoronomonologue: RawSong = {
  title: SONGS["心のモノローグ"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["シライシ紗トリ"],
    arrange: ["シライシ紗トリ"],
    direct: ["英勉"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.ShiraishiMai, MemberNames.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songChikyugamaruinara: RawSong = {
  title: SONGS["地球が丸いなら"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山下孝之"],
    arrange: ["山下孝之"],
    direct: ["沖田修一"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.OozonoMomoko,
      MemberNames.SaitouAsuka,
      MemberNames.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAnnanisukidattanoni: RawSong = {
  title: SONGS["あんなに好きだったのに・・・"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["木下めろん"],
    arrange: ["木下めろん"],
    direct: [],
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.InoueSayuri,
      MemberNames.IwamotoRenka,
      MemberNames.UmezawaMinami,
      MemberNames.EtouMisa,
      MemberNames.OozonoMomoko,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.SuzukiAyane,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.YamashitaMizuki,
      MemberNames.YodaYuuki,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 20th single

const songSyncronicity: RawSong = {
  title: SONGS["シンクロニシティ"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["シライシ紗トリ"],
    arrange: ["シライシ紗トリ"],
    direct: ["池田一真"],
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.YamashitaMizuki,
      MemberNames.HoriMiona,
      MemberNames.IkutaErika,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.SaitouAsuka,
      MemberNames.YodaYuuki,
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.MatsumuraSayuri,
      MemberNames.KuboShiori,
      MemberNames.IkomaRina,
      MemberNames.OozonoMomoko,
      MemberNames.EtouMisa,
      MemberNames.AkimotoManatsu,
    ],
    thirdRow: [
      MemberNames.InoueSayuri,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HoshinoMinami,
      MemberNames.WakatsukiYumi,
      MemberNames.HiguchiHina,
      MemberNames.TeradaRanze,
    ],
    fourthRow: [],
  },
};

const songAtarashiisekai: RawSong = {
  title: SONGS["新しい世界"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["横堀光範"],
  },
  performers: {
    center: [MemberNames.SuzukiAyane],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.UmezawaMinami,
      MemberNames.WatanabeMiria,
      MemberNames.NakadaKana,
      MemberNames.SuzukiAyane,
      MemberNames.SaitouYuuri,
      MemberNames.YamazakiRena,
      MemberNames.ItouRiria,
    ],
    secondRow: [
      MemberNames.MukaiHazuki,
      MemberNames.ItouKarin,
      MemberNames.IwamotoRenka,
      MemberNames.ItouJunna,
      MemberNames.SakaguchiTamami,
      MemberNames.SaitouChiharu,
      MemberNames.SatouKaede,
    ],
    thirdRow: [
      MemberNames.NoujouAmi,
      MemberNames.KawagoHina,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.SasakiKotoko,
      MemberNames.NakamuraReno,
      MemberNames.WadaMaaya,
      MemberNames.SagaraIori,
    ],
    fourthRow: [],
  },
};

const songAgainst: RawSong = {
  title: SONGS["Against"].title,
  musicVideo: "",
  type: SongType.FirstGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.KawagoHina,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouChiharu,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.HiguchiHina,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKumoninarebaii: RawSong = {
  title: SONGS["雲になればいい"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ["丸谷マナブ"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "藤桜梨",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.EtouMisa,
      MemberNames.SakuraiReika,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songScoutman: RawSong = {
  title: SONGS["スカウトマン"].title,
  musicVideo: "",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SaSA"],
    arrange: ["SaSA"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.ShinuchiMai,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.HoriMiona,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTokitokimekimeki: RawSong = {
  title: SONGS["トキトキメキメキ"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中山聡", "足立優"],
    arrange: ["中山聡", "足立優"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [MemberNames.IwamotoRenka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKotodamaho: RawSong = {
  title: SONGS["言霊砲"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Ryota Saito", "TomoLow"],
    arrange: ["Ryota Saito", "TomoLow"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "いもうと坂",
  },
  formations: {
    firstRow: [
      MemberNames.OozonoMomoko,
      MemberNames.KuboShiori,
      MemberNames.YamashitaMizuki,
      MemberNames.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 19th single

const songItsukadekirukara: RawSong = {
  title: SONGS["いつかできるから今日できる"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "京田誠一"],
    arrange: ["Akira Sunset", "京田誠一"],
    direct: ["高橋栄樹"],
  },
  performers: {
    center: [MemberNames.NishinoNanase, MemberNames.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.HoriMiona,
      MemberNames.NishinoNanase,
      MemberNames.SaitouAsuka,
      MemberNames.ShiraishiMai,
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.InoueSayuri,
      MemberNames.MatsumuraSayuri,
      MemberNames.IkutaErika,
      MemberNames.ItouMarika,
      MemberNames.SakuraiReika,
      MemberNames.EtouMisa,
    ],
    thirdRow: [
      MemberNames.ShinuchiMai,
      MemberNames.SaitouYuuri,
      MemberNames.HoshinoMinami,
      MemberNames.IkomaRina,
      MemberNames.AkimotoManatsu,
      MemberNames.KitanoHinako,
      MemberNames.NakadaKana,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songMyrule: RawSong = {
  title: SONGS["My rule"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["藤田卓也"],
    arrange: ["藤田卓也"],
    direct: ["林希", "古屋蔵人"],
  },
  performers: {
    center: [MemberNames.HiguchiHina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.WatanabeMiria,
      MemberNames.HiguchiHina,
      MemberNames.TeradaRanze,
    ],
    secondRow: [
      MemberNames.NoujouAmi,
      MemberNames.SuzukiAyane,
      MemberNames.YamazakiRena,
      MemberNames.SaitouChiharu,
    ],
    thirdRow: [
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.ItouKarin,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.WadaMaaya,
      MemberNames.ItouJunna,
    ],
    fourthRow: [],
  },
};

const songFumensho: RawSong = {
  title: SONGS["不眠症"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大貫和紀", "河原レオ", "高木龍一"],
    arrange: ["大貫和紀", "河原レオ", "高木龍一"],
    direct: [],
  },
  performers: {
    center: [MemberNames.KuboShiori, MemberNames.YamashitaMizuki],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.OozonoMomoko,
      MemberNames.KuboShiori,
      MemberNames.SaitouAsuka,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.YamashitaMizuki,
      MemberNames.YodaYuuki,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMaaiika: RawSong = {
  title: SONGS["まあいいか?"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["HRK"],
    arrange: ["原広明"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.AkimotoManatsu, MemberNames.ShiraishiMai],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songShitsurenosojinin: RawSong = {
  title: SONGS["失恋お掃除人"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["さいとうくにあき", "Akira Sunset", "京田誠一"],
    arrange: ["さいとうくにあき", "Akira Sunset", "京田誠一"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "若様軍団",
  },
  formations: {
    firstRow: [
      MemberNames.UmezawaMinami,
      MemberNames.SakaguchiTamami,
      MemberNames.YamashitaMizuki,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songBokunoshodo: RawSong = {
  title: SONGS["僕の衝動"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["石井伸昂"],
    arrange: ["石井伸昂"],
    direct: ["荒船泰廣"],
  },
  performers: {
    center: [MemberNames.ItouRiria],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouRiria,
      MemberNames.IwamotoRenka,
      MemberNames.UmezawaMinami,
      MemberNames.OozonoMomoko,
      MemberNames.KuboShiori,
      MemberNames.SakaguchiTamami,
      MemberNames.SatouKaede,
      MemberNames.NakamuraReno,
      MemberNames.YamashitaMizuki,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAtarashiikafun: RawSong = {
  title: SONGS["新しい花粉 〜ミュージカル「見知らぬ世界」より〜"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["新田目翔"],
    arrange: ["若田部誠"],
    direct: ["荒船泰廣"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.IkutaErika, MemberNames.KuboShiori],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 18th single

const songNigemizu: RawSong = {
  title: SONGS["逃げ水"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["谷村庸平"],
    arrange: ["谷村庸平"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [MemberNames.OozonoMomoko, MemberNames.YodaYuuki],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.ShiraishiMai,
      MemberNames.OozonoMomoko,
      MemberNames.YodaYuuki,
      MemberNames.NishinoNanase,
      MemberNames.HoriMiona,
    ],
    secondRow: [
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.IkutaErika,
      MemberNames.AkimotoManatsu,
      MemberNames.EtouMisa,
      MemberNames.TakayamaKazumi,
    ],
    thirdRow: [
      MemberNames.ItouMarika,
      MemberNames.ShinuchiMai,
      MemberNames.IkomaRina,
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.InoueSayuri,
    ],
    fourthRow: [],
  },
};

const songUnder: RawSong = {
  title: SONGS["アンダー"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["白土亨"],
    arrange: ["遠藤ナオキ"],
    direct: ["金森孝宏"],
  },
  performers: {
    center: [MemberNames.NakamotoHimeka, MemberNames.KitanoHinako],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.HiguchiHina,
      MemberNames.WatanabeMiria,
      MemberNames.NakamotoHimeka,
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.SaitouYuuri,
    ],
    secondRow: [
      MemberNames.NakadaKana,
      MemberNames.YamazakiRena,
      MemberNames.SuzukiAyane,
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.SaitouChiharu,
    ],
    thirdRow: [
      MemberNames.NoujouAmi,
      MemberNames.SagaraIori,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SasakiKotoko,
      MemberNames.WadaMaaya,
    ],
    fourthRow: [],
  },
};

const songOnnahahitorija: RawSong = {
  title: SONGS["女は一人じゃ眠れない"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小形誠"],
    arrange: ["高橋浩一郎"],
    direct: ["萩原健太郎"],
  },
  performers: {
    center: [MemberNames.OozonoMomoko, MemberNames.YodaYuuki],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.OozonoMomoko,
      MemberNames.SaitouAsuka,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.YodaYuuki,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHitonatsu: RawSong = {
  title: SONGS["ひと夏の長さより…"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["aokado"],
    arrange: ["aokado"],
    direct: [],
  },
  performers: {
    center: [MemberNames.AkimotoManatsu, MemberNames.MatsumuraSayuri],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.OozonoMomoko,
      MemberNames.SaitouAsuka,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.YodaYuuki,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songLiveshin: RawSong = {
  title: SONGS["ライブ神"].title,
  musicVideo: "",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SaSA"],
    arrange: ["SaSA"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.TeradaRanze,
      MemberNames.HoriMiona,
      MemberNames.KitanoHinako,
    ],
    secondRow: [
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.SuzukiAyane,
      MemberNames.ShinuchiMai,
    ],
    thirdRow: [
      MemberNames.ItouJunna,
      MemberNames.ItouKarin,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
    ],
    fourthRow: [],
  },
};

const songMirainokotae: RawSong = {
  title: SONGS["未来の答え"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["板垣祐介"],
    arrange: ["板垣祐介"],
    direct: ["福島真希"],
  },
  performers: {
    center: [MemberNames.KuboShiori, MemberNames.YamashitaMizuki],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.UmezawaMinami,
      MemberNames.YamashitaMizuki,
      MemberNames.KuboShiori,
      MemberNames.ItouRiria,
    ],
    secondRow: [
      MemberNames.IwamotoRenka,
      MemberNames.OozonoMomoko,
      MemberNames.YodaYuuki,
      MemberNames.SakaguchiTamami,
    ],
    thirdRow: [
      MemberNames.NakamuraReno,
      MemberNames.MukaiHazuki,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.SatouKaede,
    ],
    fourthRow: [],
  },
};

const songNaitatteii: RawSong = {
  title: SONGS["泣いたっていいじゃないか?"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["K-WONDER", "SAS3"],
    arrange: ["遠藤ナオキ"],
    direct: [],
  },
  performers: {
    center: [MemberNames.TakayamaKazumi],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.OozonoMomoko,
      MemberNames.SaitouAsuka,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.YodaYuuki,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 17th single

const songInfluencer: RawSong = {
  title: SONGS["インフルエンサー"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["すみだしんや"],
    arrange: ["APAZZI"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.NishinoNanase, MemberNames.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.HoriMiona,
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.SaitouAsuka,
      MemberNames.EtouMisa,
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.TakayamaKazumi,
      MemberNames.IkomaRina,
      MemberNames.IkutaErika,
      MemberNames.MatsumuraSayuri,
      MemberNames.SakuraiReika,
    ],
    thirdRow: [
      MemberNames.ShinuchiMai,
      MemberNames.InoueSayuri,
      MemberNames.TeradaRanze,
      MemberNames.KitanoHinako,
      MemberNames.ItouMarika,
      MemberNames.HoshinoMinami,
      MemberNames.SaitouYuuri,
      MemberNames.HiguchiHina,
      MemberNames.NakadaKana,
    ],
    fourthRow: [],
  },
};

const songFusenhaikiteiru: RawSong = {
  title: SONGS["風船は生きている"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["泉佳伸", "三好翔太"],
    arrange: ["早川博隆", "三好翔太"],
    direct: ["多田卓也"],
  },
  performers: {
    center: [MemberNames.WatanabeMiria],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.SuzukiAyane,
    ],
    secondRow: [
      MemberNames.SaitouChiharu,
      MemberNames.ItouKarin,
      MemberNames.NoujouAmi,
      MemberNames.SagaraIori,
    ],
    thirdRow: [
      MemberNames.KawagoHina,
      MemberNames.SasakiKotoko,
      MemberNames.WadaMaaya,
      MemberNames.ItouJunna,
      MemberNames.KawamuraMahiro,
    ],
    fourthRow: [],
  },
};

const songJinseiwokangae: RawSong = {
  title: SONGS["人生を考えたくなる"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["片桐周太郎"],
    arrange: ["片桐周太郎"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "女子校カルテット",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songIgaibreak: RawSong = {
  title: SONGS["意外BREAK"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["すみだしんや"],
    arrange: ["華原大輔"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "姉御坂",
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAnotherghost: RawSong = {
  title: SONGS["Another Ghost"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["前迫潤哉", "Yasutaka.Ishio"],
    arrange: ["Yasutaka.Ishio"],
    direct: ["井上強"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "ナスカ",
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.SaitouAsuka,
      MemberNames.NishinoNanase,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSanbanmenokaze: RawSong = {
  title: SONGS["三番目の風"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ["丸谷マナブ"],
    direct: ["岡川太郎"],
  },
  performers: {
    center: [MemberNames.OozonoMomoko],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.KuboShiori,
      MemberNames.OozonoMomoko,
      MemberNames.YamashitaMizuki,
    ],
    secondRow: [
      MemberNames.SakaguchiTamami,
      MemberNames.YodaYuuki,
      MemberNames.ItouRiria,
      MemberNames.IwamotoRenka,
    ],
    thirdRow: [
      MemberNames.UmezawaMinami,
      MemberNames.MukaiHazuki,
      MemberNames.NakamuraReno,
      MemberNames.SatouKaede,
      MemberNames.YoshidaAyanoChristie,
    ],
    fourthRow: [],
  },
};

const songAtarisawarinonai: RawSong = {
  title: SONGS["当たり障りのない話"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小網準"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "かすみ草",
  },
  formations: {
    firstRow: [
      MemberNames.IkomaRina,
      MemberNames.InoueSayuri,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 16th single

const songSayonaranoimi: RawSong = {
  title: SONGS["サヨナラの意味"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["若田部誠"],
    direct: ["柳沢翔"],
  },
  performers: {
    center: [MemberNames.HashimotoNanami],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.ShiraishiMai,
      MemberNames.IkutaErika,
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.MatsumuraSayuri,
      MemberNames.HoriMiona,
      MemberNames.SaitouAsuka,
      MemberNames.EtouMisa,
      MemberNames.AkimotoManatsu,
    ],
    thirdRow: [
      MemberNames.NakamotoHimeka,
      MemberNames.InoueSayuri,
      MemberNames.ShinuchiMai,
      MemberNames.SakuraiReika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
      MemberNames.KitanoHinako,
      MemberNames.ItouMarika,
    ],
    fourthRow: [],
  },
};

const songBulanko: RawSong = {
  title: SONGS["ブランコ"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiro Hoashi"],
    arrange: ["Hiro Hoashi"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [MemberNames.TeradaRanze],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.HiguchiHina,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NoujouAmi,
    ],
    secondRow: [
      MemberNames.SaitouYuuri,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.SuzukiAyane,
      MemberNames.SaitouChiharu,
    ],
    thirdRow: [
      MemberNames.ItouJunna,
      MemberNames.WadaMaaya,
      MemberNames.ItouKarin,
      MemberNames.KawagoHina,
      MemberNames.SasakiKotoko,
      MemberNames.SagaraIori,
    ],
    fourthRow: [],
  },
};

const songKodokunaaozora: RawSong = {
  title: SONGS["孤独な青空"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["aokado"],
    arrange: ["aokado"],
    direct: [],
  },
  performers: {
    center: [MemberNames.HashimotoNanami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.KitanoHinako,
      MemberNames.SaitouAsuka,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakamotoHimeka,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAnokyoshitsu: RawSong = {
  title: SONGS["あの教室"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["カワノミチオ"],
    arrange: ["カワノミチオ"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.SaitouAsuka, MemberNames.HoriMiona],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songNidomenokisukara: RawSong = {
  title: SONGS["2度目のキスから"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "APAZZI"],
    arrange: ["Akira Sunset", "APAZZI"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "真夏さんリスペクト軍団",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.SagaraIori,
      MemberNames.SuzukiAyane,
      MemberNames.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKiminiokuruhana: RawSong = {
  title: SONGS["君に贈る花がない"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Rizz"],
    arrange: ["山田竜平"],
    direct: ["東市篤憲"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "サンクエトワール",
  },
  formations: {
    firstRow: [
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NakamotoHimeka,
      MemberNames.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songNaimononetari: RawSong = {
  title: SONGS["ないものねだり"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ["丸谷マナブ", "福田貴史"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.HashimotoNanami,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.HashimotoNanami],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 15th single

const songHadashidesummer: RawSong = {
  title: SONGS["裸足でSummer"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["福森秀敏"],
    arrange: ["APAZZI"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.HashimotoNanami,
      MemberNames.NishinoNanase,
      MemberNames.SaitouAsuka,
      MemberNames.ShiraishiMai,
      MemberNames.IkutaErika,
    ],
    secondRow: [
      MemberNames.TakayamaKazumi,
      MemberNames.EtouMisa,
      MemberNames.MatsumuraSayuri,
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
    ],
    thirdRow: [
      MemberNames.KitanoHinako,
      MemberNames.HoshinoMinami,
      MemberNames.WakatsukiYumi,
      MemberNames.IkomaRina,
      MemberNames.HoriMiona,
      MemberNames.NakamotoHimeka,
    ],
    fourthRow: [],
  },
};

const songSecretGravity: RawSong = {
  title: SONGS["シークレットグラフィティー"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ツキダタダシ"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [MemberNames.HiguchiHina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.TeradaRanze,
      MemberNames.ItouMarika,
      MemberNames.HiguchiHina,
      MemberNames.InoueSayuri,
      MemberNames.WatanabeMiria,
    ],
    secondRow: [
      MemberNames.SaitouChiharu,
      MemberNames.SaitouYuuri,
      MemberNames.ShinuchiMai,
      MemberNames.NakadaKana,
      MemberNames.NoujouAmi,
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.YamazakiRena,
      MemberNames.ItouJunna,
      MemberNames.KawagoHina,
      MemberNames.SuzukiAyane,
      MemberNames.WadaMaaya,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.ItouKarin,
    ],
    fourthRow: [],
  },
};

const songBokudakenohikari: RawSong = {
  title: SONGS["僕だけの光"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiro Hoashi"],
    arrange: ["Hiro Hoashi"],
    direct: [],
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.EtouMisa,
      MemberNames.KitanoHinako,
      MemberNames.SaitouAsuka,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakamotoHimeka,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songOffshoregirl: RawSong = {
  title: SONGS["オフショアガール"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["井上強"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.ShiraishiMai,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.ShiraishiMai],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songInochinoshinjitsu: RawSong = {
  title: SONGS["命の真実 ミュージカル「林檎売りとカメムシ」"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["NA.ZU.NA"],
    arrange: ["NA.ZU.NA"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.IkutaErika,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.IkutaErika],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHakumaisama: RawSong = {
  title: SONGS["白米様"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Ruby"],
    arrange: ["あらケン"],
    direct: ["伊藤衆人"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "さゆりんご軍団",
  },
  formations: {
    firstRow: [MemberNames.MatsumuraSayuri],
    secondRow: [
      MemberNames.SasakiKotoko,
      MemberNames.ItouKarin,
      MemberNames.TeradaRanze,
    ],
    thirdRow: [],
    fourthRow: [],
  },
};

const songIkuatenonaibokutachi: RawSong = {
  title: SONGS["行くあてのない僕たち"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大橋莉子"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.ItouMarika, MemberNames.InoueSayuri],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 14th single

const songHarujion: RawSong = {
  title: SONGS["ハルジオンが咲く頃"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "APAZZI"],
    arrange: ["Akira Sunset", "APAZZI"],
    direct: ["山戸結希"],
  },
  performers: {
    center: [MemberNames.FukagawaMai],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.HashimotoNanami,
      MemberNames.NishinoNanase,
      MemberNames.FukagawaMai,
      MemberNames.ShiraishiMai,
      MemberNames.IkutaErika,
    ],
    secondRow: [
      MemberNames.SaitouAsuka,
      MemberNames.TakayamaKazumi,
      MemberNames.EtouMisa,
      MemberNames.AkimotoManatsu,
      MemberNames.HoshinoMinami,
    ],
    thirdRow: [
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.MatsumuraSayuri,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.HoriMiona,
    ],
    fourthRow: [],
  },
};

const songFutogo: RawSong = {
  title: SONGS["不等号"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["福田貴史"],
    arrange: ["福田貴史"],
    direct: ["池田千尋"],
  },
  performers: {
    center: [MemberNames.NakamotoHimeka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SaitouYuuri,
      MemberNames.TeradaRanze,
      MemberNames.NakamotoHimeka,
      MemberNames.KitanoHinako,
      MemberNames.HiguchiHina,
    ],
    secondRow: [
      MemberNames.ItouKarin,
      MemberNames.KawagoHina,
      MemberNames.NakadaKana,
      MemberNames.ShinuchiMai,
      MemberNames.NoujouAmi,
    ],
    thirdRow: [
      MemberNames.SaitouChiharu,
      MemberNames.WatanabeMiria,
      MemberNames.SuzukiAyane,
      MemberNames.YamazakiRena,
      MemberNames.SasakiKotoko,
      MemberNames.SagaraIori,
      MemberNames.KawagoHina,
      MemberNames.WadaMaaya,
      MemberNames.ItouJunna,
    ],
    fourthRow: [],
  },
};

const songHarukanarubhutan: RawSong = {
  title: SONGS["遥かなるブータン"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ha-j"],
    direct: [],
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.ItouMarika,
      MemberNames.EtouMisa,
      MemberNames.SaitouAsuka,
      MemberNames.HoriMiona,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTsuyogarutsubomi: RawSong = {
  title: SONGS["強がる蕾"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大貫和紀", "河原レオ", "高木龍一"],
    arrange: ["Carlos K."],
    direct: ["真壁幸紀"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.FukagawaMai,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.FukagawaMai],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKyushamen: RawSong = {
  title: SONGS["急斜面"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["FURUTA", "Yasutaka Ishio"],
    arrange: ["重永亮介"],
    direct: ["番場秀一"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTsuribori: RawSong = {
  title: SONGS["釣り堀"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Bush-I"],
    arrange: ["APAZZI"],
    direct: ["永田琴"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songYuutsutofusengamu: RawSong = {
  title: SONGS["憂鬱と風船ガム"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["HIROTOMO", "Dr.Lilcom"],
    arrange: ["APAZZI"],
    direct: [],
  },
  performers: {
    center: [MemberNames.HoshinoMinami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkomaRina,
      MemberNames.InoueSayuri,
      MemberNames.SakuraiReika,
      MemberNames.TakayamaKazumi,
      MemberNames.HoshinoMinami,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 13th single

const songHanashitaidarekagairu: RawSong = {
  title: SONGS["今、話したい誰かがいる"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "APAZZI"],
    arrange: ["Akira Sunset", "APAZZI"],
    direct: ["萩原健太郎"],
  },
  performers: {
    center: [MemberNames.ShiraishiMai, MemberNames.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.FukagawaMai,
    ],
    secondRow: [
      MemberNames.SaitouAsuka,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.IkutaErika,
      MemberNames.AkimotoManatsu,
      MemberNames.HoshinoMinami,
    ],
    thirdRow: [
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.IkomaRina,
      MemberNames.MatsumuraSayuri,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
    ],
    fourthRow: [],
  },
};

const songShittonokenri: RawSong = {
  title: SONGS["嫉妬の権利"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸山真由子"],
    arrange: ["丸山真由子"],
    direct: ["井上強"],
  },
  performers: {
    center: [MemberNames.HoriMiona, MemberNames.NakamotoHimeka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.KitanoHinako,
      MemberNames.HoriMiona,
      MemberNames.NakamotoHimeka,
      MemberNames.TeradaRanze,
    ],
    secondRow: [
      MemberNames.NakadaKana,
      MemberNames.ShinuchiMai,
      MemberNames.KawamuraMahiro,
      MemberNames.NagashimaSeira,
      MemberNames.NoujouAmi,
      MemberNames.HiguchiHina,
      MemberNames.SaitouChiharu,
      MemberNames.SaitouYuuri,
    ],
    thirdRow: [
      MemberNames.KawagoHina,
      MemberNames.WatanabeMiria,
      MemberNames.YamazakiRena,
      MemberNames.SasakiKotoko,
      MemberNames.SagaraIori,
      MemberNames.ItouJunna,
      MemberNames.SuzukiAyane,
      MemberNames.ItouKarin,
      MemberNames.WadaMaaya,
    ],
    fourthRow: [],
  },
};

const songPopipappapa: RawSong = {
  title: SONGS["ポピパッパパー"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.ShiraishiMai, MemberNames.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.FukagawaMai,
    ],
    secondRow: [
      MemberNames.SaitouAsuka,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.IkutaErika,
      MemberNames.AkimotoManatsu,
      MemberNames.HoshinoMinami,
    ],
    thirdRow: [
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.IkomaRina,
      MemberNames.MatsumuraSayuri,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
    ],
    fourthRow: [],
  },
};

const songOtonahenochikamichi: RawSong = {
  title: SONGS["大人への近道"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "サンクエトワール",
  },
  formations: {
    firstRow: [
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NakamotoHimeka,
      MemberNames.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKanashiminowasurekata: RawSong = {
  title: SONGS["悲しみの忘れ方"].title,
  musicVideo: "",
  type: SongType.Selected12,
  creators: {
    lyrics: ["秋元康"],
    compose: ["近藤圭一"],
    arrange: ["久下真音"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSukima: RawSong = {
  title: SONGS["隙間"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "Carlos K."],
    arrange: ["Akira Sunset", "Carlos K."],
    direct: [],
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 12th single

const songTaiyoknock: RawSong = {
  title: SONGS["太陽ノック"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["黒須克彦"],
    arrange: ["長田直之"],
    direct: ["三石直和"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.IkomaRina,
      MemberNames.IkutaErika,
      MemberNames.HashimotoNanami,
    ],
    secondRow: [
      MemberNames.TakayamaKazumi,
      MemberNames.WakatsukiYumi,
      MemberNames.SakuraiReika,
      MemberNames.AkimotoManatsu,
      MemberNames.FukagawaMai,
    ],
    thirdRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.HoshinoMinami,
      MemberNames.SaitouAsuka,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.ShinuchiMai,
      MemberNames.EtouMisa,
    ],
    fourthRow: [],
  },
};

const songWakaregiwa: RawSong = {
  title: SONGS["別れ際、もっと好きになる"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["山岸聖太"],
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.KitanoHinako,
      MemberNames.HoriMiona,
      MemberNames.NakamotoHimeka,
      MemberNames.NakadaKana,
    ],
    secondRow: [
      MemberNames.SagaraIori,
      MemberNames.KawagoHina,
      MemberNames.NagashimaSeira,
      MemberNames.NoujouAmi,
      MemberNames.SaitouChiharu,
    ],
    thirdRow: [
      MemberNames.WadaMaaya,
      MemberNames.SasakiKotoko,
      MemberNames.TeradaRanze,
      MemberNames.ItouKarin,
      MemberNames.WatanabeMiria,
      MemberNames.SuzukiAyane,
      MemberNames.ItouJunna,
      MemberNames.HiguchiHina,
    ],
    fourthRow: [],
  },
};

const songMosukoshinoyumewo: RawSong = {
  title: SONGS["もう少しの夢"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSakanatachinolovesong: RawSong = {
  title: SONGS["魚たちのLOVE SONG"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["渡辺拓也"],
    arrange: ["渡辺拓也"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMuhyojo: RawSong = {
  title: SONGS["無表情"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["Akira Sunset"],
    direct: ["月田茂", "山本篤彦", "柴谷麻以"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "からあげ姉妹",
  },
  formations: {
    firstRow: [MemberNames.IkutaErika, MemberNames.MatsumuraSayuri],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHanenokioku: RawSong = {
  title: SONGS["羽根の記憶"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: ["岡川太郎"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShinuchiMai,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSeifukuwonuide: RawSong = {
  title: SONGS["制服を脱いでサヨナラを…"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.SaitouAsuka, MemberNames.HoshinoMinami],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 11th single

const songInochihautsukushii: RawSong = {
  title: SONGS["命は美しい"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiroki Sagawa"],
    arrange: ["Hiroki Sagawa"],
    direct: ["井上強"],
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.MatsuiRena,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.IkutaErika,
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.AkimotoManatsu,
      MemberNames.IkomaRina,
      MemberNames.SakuraiReika,
      MemberNames.FukagawaMai,
    ],
    thirdRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.SagaraIori,
      MemberNames.SaitouAsuka,
      MemberNames.ItouMarika,
      MemberNames.HoriMiona,
      MemberNames.HoshinoMinami,
      MemberNames.EtouMisa,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songKimihabokuto: RawSong = {
  title: SONGS["君は僕と会わない方がよかったのかな"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["山田篤宏"],
  },
  performers: {
    center: [MemberNames.NakamotoHimeka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SaitouYuuri,
      MemberNames.NakamotoHimeka,
      MemberNames.InoueSayuri,
    ],
    secondRow: [
      MemberNames.NoujouAmi,
      MemberNames.NagashimaSeira,
      MemberNames.NakadaKana,
      MemberNames.ShinuchiMai,
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.KitanoHinako,
      MemberNames.KawagoHina,
      MemberNames.HiguchiHina,
      MemberNames.ItouKarin,
      MemberNames.WadaMaaya,
      MemberNames.SaitouChiharu,
    ],
    fourthRow: [],
  },
};

const songArakajimeromance: RawSong = {
  title: SONGS["あらかじめ語られるロマンス"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SoichiroK", "Nozomu.S"],
    arrange: ["SoichiroK", "Nozomu.S"],
    direct: ["岡川太郎"],
  },
  performers: {
    center: [MemberNames.SaitouAsuka, MemberNames.HoshinoMinami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.SaitouAsuka,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTachinaorichu: RawSong = {
  title: SONGS["立ち直り中"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["福田貴史"],
    arrange: ["TATOO"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.EtouMisa,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songGomennezutto: RawSong = {
  title: SONGS["ごめんね ずっと…"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山田智和"],
    arrange: ["住谷翔平"],
    direct: ["山戸結希"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songBorder: RawSong = {
  title: SONGS["ボーダー"].title,
  musicVideo: "",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: [],
  },
  performers: {
    center: [MemberNames.TeradaRanze],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouJunna,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 10th single

const songNandomenoaozoraka: RawSong = {
  title: SONGS["何度目の青空か?"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["川浦正大"],
    arrange: ["百石元"],
    direct: ["内田けんじ"],
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.MatsuiRena,
      MemberNames.ShiraishiMai,
      MemberNames.IkutaErika,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
    ],
    secondRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.AkimotoManatsu,
      MemberNames.IkomaRina,
      MemberNames.SakuraiReika,
      MemberNames.FukagawaMai,
    ],
    thirdRow: [
      MemberNames.EtouMisa,
      MemberNames.WakatsukiYumi,
      MemberNames.HoriMiona,
      MemberNames.HoshinoMinami,
      MemberNames.TakayamaKazumi,
      MemberNames.SaitouChiharu,
    ],
    fourthRow: [],
  },
};

const songAnohibokuha: RawSong = {
  title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["三輪智也"],
    arrange: ["京田誠一"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [MemberNames.InoueSayuri],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.InoueSayuri,
      MemberNames.ItouMarika,
    ],
    secondRow: [
      MemberNames.NagashimaSeira,
      MemberNames.NakamotoHimeka,
      MemberNames.SaitouYuuri,
      MemberNames.NakadaKana,
      MemberNames.NoujouAmi,
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.WadaMaaya,
      MemberNames.HiguchiHina,
      MemberNames.ItouKarin,
      MemberNames.KawagoHina,
      MemberNames.HatanakaSeira,
      MemberNames.KitanoHinako,
      MemberNames.YamatoRina,
      MemberNames.ShinuchiMai,
    ],
    fourthRow: [],
  },
};

const songTomawarinoaijo: RawSong = {
  title: SONGS["遠回りの愛情"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Noda Akiko"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [MemberNames.NagashimaSeira, MemberNames.SakuraiReika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.InoueSayuri,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.YamatoRina,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKorogattakanewonarase: RawSong = {
  title: SONGS["転がった鐘を鳴らせ!"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中山英二"],
    arrange: ["田上陽一"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.EtouMisa,
      MemberNames.SaitouChiharu,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsuiRena,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songWatashiokiru: RawSong = {
  title: SONGS["私、起きる。"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ZERO"],
    arrange: ["Akira Sunset", "ZERO"],
    direct: ["柳沢翔"],
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.KawagoHina,
      MemberNames.KitanoHinako,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouChiharu,
      MemberNames.NakamotoHimeka,
      MemberNames.HiguchiHina,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTenderdays: RawSong = {
  title: SONGS["Tender days"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SoichiroK", "Nozomu.S"],
    arrange: ["Soulife"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 9th single

const songNatsunofreeandeasy: RawSong = {
  title: SONGS["夏のFree&Easy"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["井上トモノリ"],
    arrange: ["橋本幸太"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.MatsuiRena,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
      MemberNames.FukagawaMai,
      MemberNames.IkomaRina,
    ],
    thirdRow: [
      MemberNames.EtouMisa,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.HoshinoMinami,
      MemberNames.YamatoRina,
      MemberNames.HoriMiona,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songKokoniiruriyu: RawSong = {
  title: SONGS["ここにいる理由"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["長谷川湊"],
    arrange: ["Carlos K."],
    direct: ["近藤大介"],
  },
  performers: {
    center: [MemberNames.ItouMarika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.KawagoHina,
      MemberNames.SaitouAsuka,
      MemberNames.ItouMarika,
      MemberNames.HiguchiHina,
      MemberNames.WadaMaaya,
    ],
    secondRow: [
      MemberNames.NagashimaSeira,
      MemberNames.NakadaKana,
      MemberNames.NoujouAmi,
      MemberNames.NakamotoHimeka,
      MemberNames.KawamuraMahiro,
    ],
    thirdRow: [
      MemberNames.SaitouChiharu,
      MemberNames.KitanoHinako,
      MemberNames.HatanakaSeira,
      MemberNames.ItouNene,
      MemberNames.IchikiRena,
      MemberNames.ShinuchiMai,
    ],
    fourthRow: [],
  },
};

const songNanimodekizuni: RawSong = {
  title: SONGS["何もできずにそばにいる"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["角野寿和"],
    arrange: ["京田誠一"],
    direct: [],
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.MatsuiRena,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
      MemberNames.FukagawaMai,
      MemberNames.IkomaRina,
    ],
    thirdRow: [
      MemberNames.EtouMisa,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.HoshinoMinami,
      MemberNames.YamatoRina,
      MemberNames.HoriMiona,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songSonosakinodeguchi: RawSong = {
  title: SONGS["その先の出口!"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Carlos K."],
    arrange: ["Carlos K."],
    direct: ["中村太洸"],
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.EtouMisa,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.MatsuiRena,
      MemberNames.MatsumuraSayuri,
      MemberNames.FukagawaMai,
      MemberNames.YamatoRina,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMukuchinalion: RawSong = {
  title: SONGS["無口なライオン"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Shusui", "ヒロイズム"],
    arrange: ["Shusui", "ヒロイズム"],
    direct: ["湯浅弘章"],
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkomaRina,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.NishinoNanase,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songBokugaikanakya: RawSong = {
  title: SONGS["僕が行かなきゃ誰が行くんだ?"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: [],
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 8th single

const songKizuitarakataomoi: RawSong = {
  title: SONGS["気づいたら片想い"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["湯浅篤"],
    direct: ["柳沢翔"],
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: FukujinType.RowOne,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.HoriMiona,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.IkomaRina,
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.IkutaErika,
      MemberNames.MatsumuraSayuri,
      MemberNames.FukagawaMai,
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.KitanoHinako,
      MemberNames.HiguchiHina,
      MemberNames.AkimotoManatsu,
      MemberNames.WadaMaaya,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songUmaretamamade: RawSong = {
  title: SONGS["生まれたままで"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["田中俊亮"],
    arrange: ["鈴木裕明"],
    direct: ["久保茂昭"],
  },
  performers: {
    center: [MemberNames.ItouMarika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.InoueSayuri,
      MemberNames.SaitouAsuka,
      MemberNames.ItouMarika,
      MemberNames.HoshinoMinami,
      MemberNames.SaitouYuuri,
    ],
    secondRow: [
      MemberNames.NagashimaSeira,
      MemberNames.NakadaKana,
      MemberNames.EtouMisa,
      MemberNames.KawagoHina,
      MemberNames.NakamotoHimeka,
    ],
    thirdRow: [
      MemberNames.SaitouChiharu,
      MemberNames.ItouNene,
      MemberNames.IchikiRena,
      MemberNames.ShinuchiMai,
      MemberNames.HatanakaSeira,
      MemberNames.YamatoRina,
      MemberNames.NoujouAmi,
    ],
    fourthRow: [],
  },
};

const songRomancenostart: RawSong = {
  title: SONGS["ロマンスのスタート"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["押田誠"],
    arrange: ["佐々木聡作", "押田誠"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.HoriMiona,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.IkomaRina,
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.IkomaRina,
      MemberNames.MatsumuraSayuri,
      MemberNames.FukagawaMai,
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.KitanoHinako,
      MemberNames.HiguchiHina,
      MemberNames.AkimotoManatsu,
      MemberNames.WadaMaaya,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songToikimethod: RawSong = {
  title: SONGS["吐息のメソッド"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["田中明仁"],
    arrange: ["TATOO"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.KawamuraMahiro,
      MemberNames.KitanoHinako,
      MemberNames.SaitouAsuka,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.HiguchiHina,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKodokukyodai: RawSong = {
  title: SONGS["孤独兄弟"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Soulife"],
    arrange: ["Soulife"],
    direct: ["池田一真"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "孤独兄弟",
  },
  formations: {
    firstRow: [MemberNames.ShiraishiMai, MemberNames.HashimotoNanami],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songDankeschon: RawSong = {
  title: SONGS["ダンケシェーン"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "C#"],
    arrange: ["Akira Sunset", "C#"],
    direct: [],
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.SakuraiReika,
      MemberNames.NishinoNanase,
      MemberNames.FukagawaMai,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 7th single

const songValletta: RawSong = {
  title: SONGS["バレッタ"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["サイトウヨシヒロ"],
    arrange: ["若田部誠"],
    direct: ["江湖広二"],
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.HoriMiona,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.WakatsukiYumi,
    ],
    thirdRow: [
      MemberNames.ItouMarika,
      MemberNames.EtouMisa,
      MemberNames.SaitouAsuka,
      MemberNames.AkimotoManatsu,
      MemberNames.FukagawaMai,
      MemberNames.NakamotoHimeka,
      MemberNames.KawagoHina,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songHatsukoinohito: RawSong = {
  title: SONGS["初恋の人を今でも"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["田所貴司"],
  },
  performers: {
    center: [MemberNames.HoshinoMinami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.InoueSayuri,
      MemberNames.HoshinoMinami,
      MemberNames.SaitouYuuri,
    ],
    secondRow: [
      MemberNames.NoujouAmi,
      MemberNames.HiguchiHina,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.KawamuraMahiro,
    ],
    thirdRow: [
      MemberNames.SaitouChiharu,
      MemberNames.HatanakaSeira,
      MemberNames.YamatoRina,
      MemberNames.ItouNene,
      MemberNames.WadaMaaya,
    ],
    fourthRow: [],
  },
};

const songTsukinookisa: RawSong = {
  title: SONGS["月の大きさ"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["大久保拓朗"],
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.HoriMiona,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.WakatsukiYumi,
    ],
    thirdRow: [
      MemberNames.ItouMarika,
      MemberNames.EtouMisa,
      MemberNames.SaitouAsuka,
      MemberNames.AkimotoManatsu,
      MemberNames.FukagawaMai,
      MemberNames.NakamotoHimeka,
      MemberNames.KawagoHina,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songWatashinotameni: RawSong = {
  title: SONGS["私のために 誰かのために"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: [],
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.KawamuraMahiro,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSonnabakana: RawSong = {
  title: SONGS["そんなバカな…"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["Akira Sunset"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.KawagoHina,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NakamotoHimeka,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.HiguchiHina,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songYasashisatoha: RawSong = {
  title: SONGS["やさしさとは"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: [],
  },
  performers: {
    center: [MemberNames.HashimotoNanami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.NakamotoHimeka,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 6th single

const songGirlsrule: RawSong = {
  title: SONGS["ガールズルール"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["後藤康二"],
    arrange: ["後藤康二"],
    direct: ["柳沢翔"],
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami,
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.NishinoNanase,
      MemberNames.TakayamaKazumi,
    ],
    thirdRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.NakadaKana,
      MemberNames.WakatsukiYumi,
      MemberNames.HoshinoMinami,
      MemberNames.AkimotoManatsu,
      MemberNames.FukagawaMai,
      MemberNames.SaitouYuuri,
    ],
    fourthRow: [],
  },
};

const songSenpuki: RawSong = {
  title: SONGS["扇風機"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["角野寿和"],
    arrange: ["野村陽一郎"],
    direct: ["池田一真"],
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.HiguchiHina,
      MemberNames.SaitouAsuka,
      MemberNames.NakamotoHimeka,
    ],
    secondRow: [
      MemberNames.NoujouAmi,
      MemberNames.EtouMisa,
      MemberNames.KawamuraMahiro,
    ],
    thirdRow: [
      MemberNames.ItouNene,
      MemberNames.NagashimaSeira,
      MemberNames.SaitouChiharu,
      MemberNames.IchikiRena,
    ],
    fourthRow: [
      MemberNames.YamatoRina,
      MemberNames.KawagoHina,
      MemberNames.WadaMaaya,
      MemberNames.KashiwaYukina,
      MemberNames.HatanakaSeira,
      MemberNames.MiyazawaSeira,
    ],
  },
};

const songSekaideichiban: RawSong = {
  title: SONGS["世界で一番 孤独なLover"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["河原嶺旭"],
    arrange: ["百石元"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami,
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.NishinoNanase,
      MemberNames.TakayamaKazumi,
    ],
    thirdRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.NakadaKana,
      MemberNames.WakatsukiYumi,
      MemberNames.HoshinoMinami,
      MemberNames.AkimotoManatsu,
      MemberNames.FukagawaMai,
      MemberNames.SaitouYuuri,
    ],
    fourthRow: [],
  },
};

const songKomoriyo: RawSong = {
  title: SONGS["コウモリよ"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["南田健吾"],
    arrange: ["高梨康治"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.NakamotoHimeka,
      MemberNames.NoujouAmi,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHokanohoshikara: RawSong = {
  title: SONGS["他の星から"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Sugaya Bros.", "松村PONY"],
    arrange: ["Sugaya Bros."],
    direct: ["岡川太郎"],
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const sonNingentoiugaki: RawSong = {
  title: SONGS["人間という楽器"].title,
  musicVideo: "",
  type: SongType.FirstGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["鐘撞行孝"],
    arrange: ["TATOO"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.IchikiRena,
      MemberNames.ItouNene,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.KashiwaYukina,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouChiharu,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NakamotoHimeka,
      MemberNames.NagashimaSeira,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.HashimotoNanami,
      MemberNames.HatanakaSeira,
      MemberNames.HiguchiHina,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.MiyazawaSeira,
      MemberNames.YamatoRina,
      MemberNames.WakatsukiYumi,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 5th single

const songKiminonahakibo: RawSong = {
  title: SONGS["君の名は希望"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: ["山下敦弘"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.HashimotoNanami,
      MemberNames.ShiraishiMai,
      MemberNames.MatsumuraSayuri,
      MemberNames.AkimotoManatsu,
    ],
    thirdRow: [
      MemberNames.ItouNene,
      MemberNames.NakadaKana,
      MemberNames.InoueSayuri,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi,
      MemberNames.FukagawaMai,
      MemberNames.NagashimaSeira,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songjusannichinokiyobi: RawSong = {
  title: SONGS["13日の金曜日"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["網本ナオノブ"],
    arrange: ["湯浅篤"],
    direct: ["山田篤宏"],
  },
  performers: {
    center: [MemberNames.SaitouYuuri],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.SaitouYuuri,
      MemberNames.SaitouAsuka,
    ],
    secondRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.EtouMisa,
      MemberNames.NoujouAmi,
      MemberNames.IchikiRena,
    ],
    thirdRow: [
      MemberNames.YamatoRina,
      MemberNames.WadaMaaya,
      MemberNames.NakamotoHimeka,
      MemberNames.SaitouChiharu,
      MemberNames.KashiwaYukina,
      MemberNames.AndouMikumo,
      MemberNames.HatanakaSeira,
      MemberNames.HiguchiHina,
      MemberNames.KawagoHina,
      MemberNames.MiyazawaSeira,
    ],
    fourthRow: [],
  },
};

const songShakism: RawSong = {
  title: SONGS["シャキイズム"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["岡本健介"],
    arrange: ["岡本健介"],
    direct: ["柳沢翔"],
  },
  performers: {
    center: [MemberNames.IkomaRina, MemberNames.HoshinoMinami],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouNene,
      MemberNames.InoueSayuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songRomanticIkayaki: RawSong = {
  title: SONGS["ロマンティックいか焼き"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["横健介"],
    arrange: ["重永亮介"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouNene,
      MemberNames.InoueSayuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songDekopin: RawSong = {
  title: SONGS["でこぴん"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songPsychokineses: RawSong = {
  title: SONGS["サイコキネシスの可能性"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [MemberNames.SakuraiReika, MemberNames.NishinoNanase],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.ItouNene,
      MemberNames.InoueSayuri,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 4th single

const songSeifukunomannequin: RawSong = {
  title: SONGS["制服のマネキン"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["百石元"],
    direct: ["池田一真"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
    ],
    secondRow: [
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
      MemberNames.SakuraiReika,
      MemberNames.AkimotoManatsu,
    ],
    thirdRow: [
      MemberNames.NoujouAmi,
      MemberNames.SaitouAsuka,
      MemberNames.WakatsukiYumi,
      MemberNames.InoueSayuri,
      MemberNames.FukagawaMai,
      MemberNames.IchikiRena,
      MemberNames.NishinoNanase,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songHarunomelody: RawSong = {
  title: SONGS["春のメロディー"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["フジノタカフミ"],
    arrange: ["湯浅篤"],
    direct: ["柿本ケンサク"],
  },
  performers: {
    center: [MemberNames.NakadaKana],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SaitouYuuri,
      MemberNames.NakadaKana,
      MemberNames.EtouMisa,
    ],
    secondRow: [
      MemberNames.ItouMarika,
      MemberNames.KawagoHina,
      MemberNames.HiguchiHina,
      MemberNames.ItouNene,
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.NakamotoHimeka,
      MemberNames.KashiwaYukina,
      MemberNames.HatanakaSeira,
      MemberNames.NagashimaSeira,
    ],
    fourthRow: [
      MemberNames.MiyazawaSeira,
      MemberNames.YamatoRina,
      MemberNames.AndouMikumo,
      MemberNames.WadaMaaya,
      MemberNames.SaitouChiharu,
    ],
  },
};

const songYubiboenkyo: RawSong = {
  title: SONGS["指望遠鏡"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["北室龍馬"],
    arrange: ["木村有希"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
    ],
    secondRow: [
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
      MemberNames.SakuraiReika,
      MemberNames.AkimotoManatsu,
    ],
    thirdRow: [
      MemberNames.NoujouAmi,
      MemberNames.SaitouAsuka,
      MemberNames.WakatsukiYumi,
      MemberNames.InoueSayuri,
      MemberNames.FukagawaMai,
      MemberNames.IchikiRena,
      MemberNames.NishinoNanase,
      MemberNames.TakayamaKazumi,
    ],
    fourthRow: [],
  },
};

const songYasashisanaramaniatteru: RawSong = {
  title: SONGS["やさしさなら間に合ってる"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["松田純一"],
    arrange: ["清水武仁"],
    direct: [],
  },
  performers: {
    center: [MemberNames.TakayamaKazumi, MemberNames.NoujouAmi],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IchikiRena,
      MemberNames.InoueSayuri,
      MemberNames.SaitouAsuka,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.FukagawaMai,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKokojanaidokoka: RawSong = {
  title: SONGS["ここじゃないどこか"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大藤史"],
    arrange: ["京田誠一"],
    direct: ["岡川太郎"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songShibuyablues: RawSong = {
  title: SONGS["渋谷ブルース"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["佐藤嘉風"],
    arrange: ["佐藤嘉風"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "WHITE HIGH",
  },
  formations: {
    firstRow: [MemberNames.ShiraishiMai, MemberNames.TakayamaKazumi],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 3rd single

const songHashirebicycle: RawSong = {
  title: SONGS["走れ!Bicycle"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Shusui", "伊藤涼", "木村篤史", "ヒロイズム"],
    arrange: ["湯浅篤"],
    direct: ["中島哲也"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
      MemberNames.HashimotoNanami,
      MemberNames.ShiraishiMai,
      MemberNames.MatsumuraSayuri,
      MemberNames.NishinoNanase,
    ],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
      MemberNames.SakuraiReika,
    ],
    secondRow: [
      MemberNames.NakadaKana,
      MemberNames.HashimotoNanami,
      MemberNames.ShiraishiMai,
      MemberNames.MatsumuraSayuri,
      MemberNames.NishinoNanase,
      MemberNames.TakayamaKazumi,
    ],
    thirdRow: [
      MemberNames.SaitouYuuri,
      MemberNames.WakatsukiYumi,
      MemberNames.InoueSayuri,
      MemberNames.IchikiRena,
      MemberNames.ItouMarika,
      MemberNames.FukagawaMai,
    ],
    fourthRow: [],
  },
};

const songNamidagamada: RawSong = {
  title: SONGS["涙がまだ悲しみだった頃"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["内田智之"],
    arrange: ["TATOO"],
    direct: ["関和亮"],
  },
  performers: {
    center: [MemberNames.ItouNene],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.HiguchiHina,
      MemberNames.ItouNene,
      MemberNames.SaitouAsuka,
    ],
    secondRow: [
      MemberNames.EtouMisa,
      MemberNames.NoujouAmi,
      MemberNames.KawagoHina,
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.KashiwaYukina,
      MemberNames.YamatoRina,
      MemberNames.NagashimaSeira,
    ],
    fourthRow: [
      MemberNames.MiyazawaSeira,
      MemberNames.AndouMikumo,
      MemberNames.HatanakaSeira,
      MemberNames.IwaseYumiko,
      MemberNames.WadaMaaya,
      MemberNames.NakamotoHimeka,
      MemberNames.SaitouChiharu,
    ],
  },
};

const songSekkachinakatatsumuri: RawSong = {
  title: SONGS["せっかちなかたつむり"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山本加津彦"],
    arrange: ["湯浅篤"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [MemberNames.MatsumuraSayuri],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHitohanazehashirunoka: RawSong = {
  title: SONGS["人はなぜ走るのか?"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["キタムラタケシ", "田上陽一"],
    arrange: ["田上陽一"],
    direct: ["久保茂昭"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.IchikiRena,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.KashiwaYukina,
      MemberNames.SaitouChiharu,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.MiyazawaSeira,
      MemberNames.YamatoRina,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songOtogadenaiguitar: RawSong = {
  title: SONGS["音が出ないギター"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Jam9", "ArmySlick"],
    arrange: ["シライシ紗トリ"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.IchikiRena,
      MemberNames.ItouNene,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.IwaseYumiko,
      MemberNames.EtouMisa,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKairyunoshimayo: RawSong = {
  title: SONGS["海流の島よ"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["京田誠一"],
    direct: [],
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AndouMikumo,
      MemberNames.KawagoHina,
      MemberNames.SaitouAsuka,
      MemberNames.NakamotoHimeka,
      MemberNames.HatanakaSeira,
      MemberNames.HiguchiHina,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 2nd single

const songOideshampoo: RawSong = {
  title: SONGS["おいでシャンプー"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小田切大"],
    arrange: ["TATOO"],
    direct: ["高橋栄樹"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SakuraiReika,
      MemberNames.IkomaRina,
      MemberNames.NakadaKana,
    ],
    secondRow: [
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
    ],
    thirdRow: [
      MemberNames.IwaseYumiko,
      MemberNames.IchikiRena,
      MemberNames.SaitouYuuri,
      MemberNames.IkutaErika,
      MemberNames.InoueSayuri,
      MemberNames.HoshinoMinami,
      MemberNames.NishinoNanase,
      MemberNames.HatanakaSeira,
      MemberNames.MiyazawaSeira,
    ],
    fourthRow: [],
  },
};

const songOkaminikuchibuewo: RawSong = {
  title: SONGS["狼に口笛を"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["シライシ紗トリ"],
    direct: ["福居英晃"],
  },
  performers: {
    center: [MemberNames.ItouMarika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.FukagawaMai,
      MemberNames.ItouMarika,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouChiharu,
      MemberNames.NagashimaSeira,
    ],
    thirdRow: [
      MemberNames.EtouMisa,
      MemberNames.ItouNene,
      MemberNames.SaitouAsuka,
      MemberNames.NakamotoHimeka,
      MemberNames.HiguchiHina,
    ],
    fourthRow: [
      MemberNames.KashiwaYukina,
      MemberNames.AndouMikumo,
      MemberNames.YamatoRina,
      MemberNames.NoujouAmi,
      MemberNames.WadaMaaya,
    ],
  },
};

const songKokoronokusuri: RawSong = {
  title: SONGS["心の薬"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["MIKOTO"],
    arrange: ["木之下慶行"],
    direct: [],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.IchikiRena,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.IwaseYumiko,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.HatanakaSeira,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.MiyazawaSeira,
      MemberNames.YamatoRina,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songGuzenwoiiwakenishite: RawSong = {
  title: SONGS["偶然を言い訳にして"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["坂部大介"],
    arrange: ["中土智博"],
    direct: ["中村太洸"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMizutamamoyo: RawSong = {
  title: SONGS["水玉模様"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["若田部誠"],
    arrange: ["若田部誠"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.IkomaRina,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.IkomaRina],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHouse: RawSong = {
  title: SONGS["ハウス!"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["y@suo ohtani"],
    arrange: ["y@suo ohtani"],
    direct: [],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.IchikiRena,
      MemberNames.InoueSayuri,
      MemberNames.IwaseYumiko,
      MemberNames.EtouMisa,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.HashimotoNanami,
      MemberNames.HatanakaSeira,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.MiyazawaSeira,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 1st single

const songGurugurucurtain: RawSong = {
  title: SONGS["ぐるぐるカーテン"].title,
  musicVideo: "",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["黒須克彦"],
    arrange: ["湯浅篤"],
    direct: ["操上和美"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
    ],
    secondRow: [
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.NoujouAmi,
      MemberNames.NishinoNanase,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.InoueSayuri,
      MemberNames.NakadaKana,
      MemberNames.IchikiRena,
    ],
    fourthRow: [],
  },
};

const songHidarimurenoyuki: RawSong = {
  title: SONGS["左胸の勇気"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小内喜文"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [MemberNames.HatanakaSeira],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AndouMikumo,
      MemberNames.IwaseYumiko,
      MemberNames.ItouNene,
      MemberNames.HatanakaSeira,
      MemberNames.ItouMarika,
      MemberNames.WadaMaaya,
      MemberNames.NakamotoHimeka,
    ],
    secondRow: [
      MemberNames.SaitouChiharu,
      MemberNames.YamatoRina,
      MemberNames.NagashimaSeira,
      MemberNames.HiguchiHina,
      MemberNames.KawagoHina,
      MemberNames.WakatsukiYumi,
      MemberNames.KashiwaYukina,
      MemberNames.EtouMisa,
      MemberNames.FukagawaMai,
      MemberNames.MiyazawaSeira,
    ],
    thirdRow: [],
    fourthRow: [],
  },
};

const songNogizakanouta: RawSong = {
  title: SONGS["乃木坂の詩"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["井手コウジ"],
    arrange: ["井手コウジ"],
    direct: ["南流石"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AndouMikumo,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.IchikiRena,
      MemberNames.ItouNene,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.IwaseYumiko,
      MemberNames.EtouMisa,
      MemberNames.KashiwaYukina,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouChiharu,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NagashimaSeira,
      MemberNames.NakadaKana,
      MemberNames.NakamotoHimeka,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.HashimotoNanami,
      MemberNames.HatanakaSeira,
      MemberNames.HiguchiHina,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.MiyazawaSeira,
      MemberNames.YamatoRina,
      MemberNames.WakatsukiYumi,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAitakattakamoshirenai: RawSong = {
  title: SONGS["会いたかったかもしれない"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["BOUNCEBACK", "MIKOTO"],
    arrange: ["野中雄一"],
    direct: ["久保茂昭"],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.IchikiRena,
      MemberNames.ItouNene,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.HashimotoNanami,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.MiyazawaSeira,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songUshinaitakunaikara: RawSong = {
  title: SONGS["失いたくないから"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["蛯原ランス"],
    arrange: ["塩川満己"],
    direct: ["丸山健志"],
  },
  performers: {
    center: [MemberNames.IkomaRina, MemberNames.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.IchikiRena,
      MemberNames.InoueSayuri,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.NakamotoHimeka,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.HashimotoNanami,
      MemberNames.HatanakaSeira,
      MemberNames.FukagawaMai,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songShiroikumoninotte: RawSong = {
  title: SONGS["白い雲にのって"].title,
  musicVideo: "",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["太田美知彦"],
    arrange: ["太田美知彦"],
    direct: [],
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AndouMikumo,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.IchikiRena,
      MemberNames.InoueSayuri,
      MemberNames.IwaseYumiko,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouChiharu,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.HashimotoNanami,
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

/**
 * ALBUM SONGS
 * NOTE: Songs below are album-only songs (which means the songs didn't appear in singles).
 */

// 5th album songs

const arigachinarenai: RawSong = {
  title: SONGS["ありがちな恋愛"].title,
  musicVideo: "",
  type: SongType.Lead,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.ItouRiria,
      MemberNames.InoueSayuri,
      MemberNames.UmezawaMinami,
      MemberNames.OozonoMomoko,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.SatouKaede,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.YamashitaMizuki,
      MemberNames.YodaYuuki,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMoshikimigainakereba: RawSong = {
  title: SONGS["もし君がいなければ"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.EtouMisa,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.EtouMisa],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKissnoshuriken: RawSong = {
  title: SONGS["キスの手裏剣"].title,
  musicVideo: "",
  type: SongType.FourthGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山田智和"],
    arrange: ["住谷翔平"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHoozue: RawSong = {
  title: SONGS["頬杖をついては眠れない"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Super Mahirock"],
    arrange: ["Huge M"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.SaitouYuuri,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songPocchito: RawSong = {
  title: SONGS["ぽっち党"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["庄司裕"],
    arrange: ["庄司裕"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.KuboShiori,
      MemberNames.SakuraiReika,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSayuringoboshuchu: RawSong = {
  title: SONGS["さゆりんご募集中"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["浦島健太", "菊池博人"],
    arrange: ["浦島健太", "菊池博人"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "さゆりんご軍団",
  },
  formations: {
    firstRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.ItouKarin,
      MemberNames.SasakiKotoko,
      MemberNames.TeradaRanze,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songGorugonzora: RawSong = {
  title: SONGS["ゴルゴンゾーラ"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["BASEMINT"],
    arrange: ["BASEMINT"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.KitanoHinako,
      MemberNames.HoriMiona,
      MemberNames.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songZambi: RawSong = {
  title: SONGS["もうすぐ～ザンビ伝説～"].title,
  musicVideo: "",
  type: SongType.Special,
  creators: {
    lyrics: ["秋元康"],
    compose: ["渡辺剛"],
    arrange: ["渡辺剛"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.ItouJunna,
      MemberNames.ItouRiria,
      MemberNames.IwamotoRenka,
      MemberNames.UmezawaMinami,
      MemberNames.OozonoMomoko,
      MemberNames.KuboShiori,
      MemberNames.SaitouAsuka,
      MemberNames.SakaguchiTamami,
      MemberNames.SatouKaede,
      MemberNames.ShinuchiMai,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.NakamuraReno,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MukaiHazuki,
      MemberNames.YamashitaMizuki,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.YodaYuuki,
      MemberNames.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 4th album songs

const songJibunnokoto: RawSong = {
  title: SONGS["自分のこと"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小松清人"],
    arrange: ["小松清人"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.NakamotoHimeka,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.NakamotoHimeka],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songUnuborebeach: RawSong = {
  title: SONGS["自惚れビーチ"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ツキダタダシ"],
    direct: [],
  },
  performers: {
    center: [MemberNames.SuzukiAyane],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouChiharu,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.NoujouAmi,
      MemberNames.HiguchiHina,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSonohito: RawSong = {
  title: SONGS["その女"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["HRK"],
    arrange: ["APAZZI"],
    direct: [],
  },
  performers: {
    center: [MemberNames.TeradaRanze],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouChiharu,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.NoujouAmi,
      MemberNames.HiguchiHina,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songDareyorisobaniitai: RawSong = {
  title: SONGS["誰よりそばにいたい"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["岩崎哲也"],
    arrange: ["関根佑樹"],
    direct: [],
  },
  performers: {
    center: [MemberNames.HiguchiHina],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouChiharu,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.NoujouAmi,
      MemberNames.HiguchiHina,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 3rd album songs

const songSkydiving: RawSong = {
  title: SONGS["スカイダイビング"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["菅井達司"],
    arrange: ["菅井達司"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.KitanoHinako,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.HiguchiHina,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKimigaaoidekureta: RawSong = {
  title: SONGS["君が扇いでくれた"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中山聡", "足立優"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouChiharu,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.NoujouAmi,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songOmoidefirst: RawSong = {
  title: SONGS["思い出ファースト"].title,
  musicVideo: "",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ミサマサカリヲ"],
    arrange: ["遠藤ナオキ"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
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
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songSetteiondo: RawSong = {
  title: SONGS["設定温度"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["石井亮輔"],
    arrange: ["APAZZI"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.KitanoHinako,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.HiguchiHina,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouChiharu,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.NoujouAmi,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.WadaMaaya,
    ],
    thirdRow: [
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
    fourthRow: [],
  },
};

const songRewindanohi: RawSong = {
  title: SONGS["Rewindあの日"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["藤木テツ"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SakuraiReika,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songGomensmoothie: RawSong = {
  title: SONGS["ごめんね、スムージー"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["YASUSHI WATANABE"],
    arrange: ["YASUSHI WATANABE"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.NakamotoHimeka,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMinikuiwatashi: RawSong = {
  title: SONGS["醜い私"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["外山大輔"],
    arrange: ["APAZZI"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.SaitouYuuri,
      MemberNames.ShinuchiMai,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKataikaranoyoni: RawSong = {
  title: SONGS["硬い殻のように抱きしめたい"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "三谷秀甫", "谷地学"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.SaitouAsuka,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.SaitouAsuka],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songMangetsugakieta: RawSong = {
  title: SONGS["満月が消えた"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SaSA"],
    arrange: ["SaSA"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songWatabokori: RawSong = {
  title: SONGS["ワタボコリ"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ハサミマン"],
    arrange: ["ハサミマン"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songRyuseidiscotic: RawSong = {
  title: SONGS["流星ディスコティック"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Masayoshi Kawabata"],
    arrange: ["Masayoshi Kawabata"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.ShiraishiMai, MemberNames.MatsumuraSayuri],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songBokyakutobigaku: RawSong = {
  title: SONGS["忘却と美学"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["早川博隆"],
    arrange: ["早川博隆"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.AkimotoManatsu, MemberNames.TakayamaKazumi],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 2nd album songs

const songKikkake: RawSong = {
  title: SONGS["きっかけ"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.SaitouAsuka,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTaiyonikudokarete: RawSong = {
  title: SONGS["太陽に口説かれて"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["フジノタカフミ"],
    arrange: ["フジノタカフミ"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.EtouMisa,
      MemberNames.SaitouAsuka,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songYokubonoReincarnation: RawSong = {
  title: SONGS["欲望のリインカーネーション"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康", "本山清治"],
    compose: ["渡辺未来"],
    arrange: ["渡辺未来"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouChiharu,
      MemberNames.SaitouYuuri,
      MemberNames.NakadaKana,
      MemberNames.NakamotoHimeka,
      MemberNames.NoujouAmi,
      MemberNames.HiguchiHina,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKukikan: RawSong = {
  title: SONGS["空気感"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["DR QUEENBEE"],
    arrange: ["DR QUEENBEE"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKogoseikibo: RawSong = {
  title: SONGS["光合成希望"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["吉田博"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songThreefoldchoice: RawSong = {
  title: SONGS["Threefold choice"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songTeitaionnokisu: RawSong = {
  title: SONGS["低体温のキス"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中谷あつこ"],
    arrange: ["田上陽一"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.IkutaErika,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.IkutaErika],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songShitsurenshitara: RawSong = {
  title: SONGS["失恋したら、顔を洗え!"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["さいとうくにあき"],
    arrange: ["内田充"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "乃木團",
  },
  formations: {
    firstRow: [MemberNames.NakamotoHimeka, MemberNames.NoujouAmi],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKakigorinokataomoi: RawSong = {
  title: SONGS["かき氷の片想い"].title,
  musicVideo: "",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["白須賀悟"],
    arrange: ["白須賀悟"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.KitanoHinako,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.ShinuchiMai,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.HoriMiona,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKanjorokugosen: RawSong = {
  title: SONGS["環状六号線"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["サイトウリョースケ"],
    arrange: ["サイトウリョースケ"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "犬メン",
  },
  formations: {
    firstRow: [
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKuchiyakusoku: RawSong = {
  title: SONGS["口約束"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Amber"],
    arrange: ["若田部誠"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "女子校カルテット",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

// 1st album songs

const songDarekahamikata: RawSong = {
  title: SONGS["誰かは味方"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["宮坂聡彦"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKakumeinouma: RawSong = {
  title: SONGS["革命の馬"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["伊勢佳史"],
    arrange: ["伊勢佳史"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.MatsumuraSayuri,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songBokugairubasho: RawSong = {
  title: SONGS["僕がいる場所"].title,
  musicVideo: "",
  type: SongType.Selected,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: [],
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.EtouMisa,
      MemberNames.SaitouChiharu,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.HoriMiona,
      MemberNames.HoshinoMinami,
      MemberNames.MatsuiRena,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songAnatanotamenihikitai: RawSong = {
  title: SONGS["あなたのために弾きたい"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["近藤圭一"],
    arrange: ["樫原伸彦"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.IkutaErika,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.IkutaErika],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songKeishasuru: RawSong = {
  title: SONGS["傾斜する"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["須藤哲平", "長谷川湊"],
    arrange: ["佐々木裕"],
    direct: [],
  },
  performers: {
    center: [MemberNames.KojimaHaruna],
    fukujin: [],
    solo: "",
    unit: "こじ坂46",
  },
  formations: {
    firstRow: [
      MemberNames.KojimaHaruna,
      MemberNames.IkomaRina,
      MemberNames.ItouJunna,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouYuuri,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.NoujouAmi,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songNazonorakugaki: RawSong = {
  title: SONGS["なぞの落書き"].title,
  musicVideo: "",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["片桐周太郎"],
    arrange: ['野中"まさ"雄一'],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songJiyunokanata: RawSong = {
  title: SONGS["自由の彼方"].title,
  musicVideo: "",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山田智和"],
    arrange: ["住谷翔平"],
    direct: [],
  },
  performers: {
    center: [MemberNames.InoueSayuri],
    fukujin: [],
    solo: "",
    unit: "",
  },
  formations: {
    firstRow: [
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.KawamuraMahiro,
      MemberNames.KawagoHina,
      MemberNames.KitanoHinako,
      MemberNames.SaitouAsuka,
      MemberNames.SaitouYuuri,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.ShinuchiMai,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.NakamotoHimeka,
      MemberNames.NoujouAmi,
      MemberNames.HatanakaSeira,
      MemberNames.HiguchiHina,
      MemberNames.YamazakiRena,
      MemberNames.YamatoRina,
      MemberNames.WatanabeMiria,
      MemberNames.WadaMaaya,
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

const songHitoriyogari: RawSong = {
  title: SONGS["ひとりよがり"].title,
  musicVideo: "",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: [],
  },
  performers: {
    center: [],
    fukujin: [],
    solo: MemberNames.NishinoNanase,
    unit: "",
  },
  formations: {
    firstRow: [MemberNames.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
  },
};

export const rawSongs: RawSong[] = [
  songKaerimichi,
  songJikochu,
  songSyncronicity,
  songItsukadekirukara,
  songNigemizu,
  songInfluencer,
  songSayonaranoimi,
  songHadashidesummer,
  songHarujion,
  songHanashitaidarekagairu,
  songTaiyoknock,
  songInochihautsukushii,
  songNandomenoaozoraka,
  songNatsunofreeandeasy,
  songKizuitarakataomoi,
  songValletta,
  songGirlsrule,
  songKiminonahakibo,
  songSeifukunomannequin,
  songHashirebicycle,
  songOideshampoo,
  songGurugurucurtain,
  songNichijo,
  songSankakunoakichi,
  songAtarashiisekai,
  songMyrule,
  songUnder,
  songFusenhaikiteiru,
  songBulanko,
  songSecretGravity,
  songFutogo,
  songShittonokenri,
  songWakaregiwa,
  songKimihabokuto,
  songAnohibokuha,
  songKokoniiruriyu,
  songUmaretamamade,
  songHatsukoinohito,
  songSenpuki,
  songjusannichinokiyobi,
  songHarunomelody,
  songNamidagamada,
  songOkaminikuchibuewo,
  songHidarimurenoyuki,
  songKyaraban,
  songTsuduku,
  songKokuhakunojunban,
  songChopinnousotsuki,
  songShiritaikoto,
  songSoratobira,
  songJibunjanaikanji,
  songKokoronomonologue,
  songChikyugamaruinara,
  songAnnanisukidattanoni,
  songAgainst,
  songKumoninarebaii,
  songScoutman,
  songTokitokimekimeki,
  songKotodamaho,
  songFumensho,
  songMaaiika,
  songShitsurenosojinin,
  songBokunoshodo,
  songAtarashiikafun,
  songOnnahahitorija,
  songHitonatsu,
  songNaitatteii,
  songLiveshin,
  songMirainokotae,
  songJinseiwokangae,
  songIgaibreak,
  songAnotherghost,
  songSanbanmenokaze,
  songAtarisawarinonai,
  songKodokunaaozora,
  songAnokyoshitsu,
  songNidomenokisukara,
  songKiminiokuruhana,
  songNaimononetari,
  songBokudakenohikari,
  songOffshoregirl,
  songInochinoshinjitsu,
  songHakumaisama,
  songIkuatenonaibokutachi,
  songHarukanarubhutan,
  songTsuyogarutsubomi,
  songKyushamen,
  songTsuribori,
  songYuutsutofusengamu,
  songPopipappapa,
  songOtonahenochikamichi,
  songKanashiminowasurekata,
  songSukima,
  songMosukoshinoyumewo,
  songSakanatachinolovesong,
  songMuhyojo,
  songHanenokioku,
  songSeifukuwonuide,
  songArakajimeromance,
  songTachinaorichu,
  songGomennezutto,
  songBorder,
  songTomawarinoaijo,
  songKorogattakanewonarase,
  songWatashiokiru,
  songTenderdays,
  songNanimodekizuni,
  songSonosakinodeguchi,
  songMukuchinalion,
  songBokugaikanakya,
  songRomancenostart,
  songToikimethod,
  songKodokukyodai,
  songDankeschon,
  songTsukinookisa,
  songWatashinotameni,
  songSonnabakana,
  songYasashisatoha,
  songSekaideichiban,
  songKomoriyo,
  songHokanohoshikara,
  sonNingentoiugaki,
  songShakism,
  songRomanticIkayaki,
  songDekopin,
  songPsychokineses,
  songYubiboenkyo,
  songYasashisanaramaniatteru,
  songKokojanaidokoka,
  songShibuyablues,
  songSekkachinakatatsumuri,
  songHitohanazehashirunoka,
  songOtogadenaiguitar,
  songKairyunoshimayo,
  songKokoronokusuri,
  songGuzenwoiiwakenishite,
  songMizutamamoyo,
  songHouse,
  songNogizakanouta,
  songAitakattakamoshirenai,
  songUshinaitakunaikara,
  songShiroikumoninotte,
  songDarekahamikata,
  songKakumeinouma,
  songBokugairubasho,
  songAnatanotamenihikitai,
  songKeishasuru,
  songNazonorakugaki,
  songJiyunokanata,
  songHitoriyogari,
  songKikkake,
  songTaiyonikudokarete,
  songYokubonoReincarnation,
  songKukikan,
  songKogoseikibo,
  songThreefoldchoice,
  songTeitaionnokisu,
  songShitsurenshitara,
  songKakigorinokataomoi,
  songKanjorokugosen,
  songKuchiyakusoku,
  songSkydiving,
  songKimigaaoidekureta,
  songOmoidefirst,
  songSetteiondo,
  songRewindanohi,
  songGomensmoothie,
  songMinikuiwatashi,
  songKataikaranoyoni,
  songMangetsugakieta,
  songWatabokori,
  songRyuseidiscotic,
  songBokyakutobigaku,
  songJibunnokoto,
  songUnuborebeach,
  songSonohito,
  songDareyorisobaniitai,
  arigachinarenai,
  songMoshikimigainakereba,
  songKissnoshuriken,
  songHoozue,
  songPocchito,
  songSayuringoboshuchu,
  songGorugonzora,
  songZambi,
  singout,
  kassouro,
  noyounasonzai,
  amiloving,
  heikousen,
  yonbanmenohikari,
  aimai,
];
