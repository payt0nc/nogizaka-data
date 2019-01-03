import { FukujinType, MemberNames, SongType } from "../common/types";
import { ISong } from "../types/song";
import { members } from "./members";

// SINGLE SONGS

// 22nd single

const songKaerimichi: ISong = {
  title: "帰り道は遠回りしたくなる",
  single: "帰り道は遠回りしたくなる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["渡邉俊彦"],
    arrange: ["渡邉俊彦", "早川博隆"],
    direct: ["関和亮"]
  },
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
    ],
    fourthRow: []
  }
};

const songNichijo: ISong = {
  title: "日常",
  single: "帰り道は遠回りしたくなる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "野口大志"],
    arrange: ["Akira Sunset", "野口大志"],
    direct: ["今泉力哉"]
  },
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
    ],
    fourthRow: []
  }
};

const songKyaraban: ISong = {
  title: "キャラバンは眠らない",
  single: "帰り道は遠回りしたくなる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["CottON"],
    arrange: ["CottON"],
    direct: ["横堀光範"]
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WatanabeMiria
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songTsuduku: ISong = {
  title: "つづく",
  single: "帰り道は遠回りしたくなる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["若田部誠"],
    arrange: ["若田部誠"],
    direct: ["湯浅弘章"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.NishinoNanase,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.NishinoNanase
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKokuhakunojunban: ISong = {
  title: "告白の順番",
  single: "帰り道は遠回りしたくなる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["安部純"],
    arrange: ["安部純"],
    direct: ["荒船泰廣"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "女子校カルテット"
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songChopinnousotsuki: ISong = {
  title: "ショパンの嘘つき",
  single: "帰り道は遠回りしたくなる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山本加津彦"],
    arrange: ["山本加津彦"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.ShiraishiMai,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songShiritaikoto: ISong = {
  title: "知りたいこと",
  single: "帰り道は遠回りしたくなる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["佐々木裕"],
    arrange: ["佐々木裕"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.HoshinoMinami,
      MemberNames.YamashitaMizuki,
      MemberNames.YodaYuuki
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 21st single

const songJikochu: ISong = {
  title: "ジコチューで行こう!",
  single: "ジコチューで行こう!",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ナスカ"],
    arrange: ["野中\"まさ\"雄一"],
    direct: ["中村太洸"]
  },
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
    ],
    fourthRow: []
  }
};

const songSankakunoakichi: ISong = {
  title: "三角の空き地",
  single: "ジコチューで行こう!",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiroki"],
    arrange: ["Yasutaka.Ishio"],
    direct: ["月田茂"]
  },
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
    ],
    fourthRow: []
  }
};

const songSoratobira: ISong = {
  title: "空扉",
  single: "ジコチューで行こう!",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["FURUTA", "Dr.Lilcom"],
    arrange: ["Dr.Lilcom"],
    direct: ["伊藤衆人"]
  },
  performers: {
    center: [MemberNames.UmezawaMinami],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.YodaYuuki
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songJibunjanaikanji: ISong = {
  title: "自分じゃない感じ",
  single: "ジコチューで行こう!",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ツキダタダシ"],
    direct: []
  },
  performers: {
    center: [MemberNames.YamashitaMizuki],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.YodaYuuki
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKokoronomonologue: ISong = {
  title: "心のモノローグ",
  single: "ジコチューで行こう!",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["シライシ紗トリ"],
    arrange: ["シライシ紗トリ"],
    direct: ["英勉"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songChikyugamaruinara: ISong = {
  title: "地球が丸いなら",
  single: "ジコチューで行こう!",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山下孝之"],
    arrange: ["山下孝之"],
    direct: ["沖田修一"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.OozonoMomoko,
      MemberNames.SaitouAsuka,
      MemberNames.YodaYuuki
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songAnnanisukidattanoni: ISong = {
  title: "あんなに好きだったのに・・・",
  single: "ジコチューで行こう!",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["木下めろん"],
    arrange: ["木下めろん"],
    direct: []
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
    secondRow: [
    ],
    thirdRow: [
    ],
    fourthRow: []
  }
};

// 20th single

const songSyncronicity: ISong = {
  title: "シンクロニシティ",
  single: "シンクロニシティ",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["シライシ紗トリ"],
    arrange: ["シライシ紗トリ"],
    direct: ["池田一真"]
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.YamashitaMizuki,
      MemberNames.HoriMiona,
      MemberNames.IkutaErika,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.SaitouAsuka,
      MemberNames.YodaYuuki
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.MatsumuraSayuri,
      MemberNames.KuboShiori,
      MemberNames.IkomaRina,
      MemberNames.OozonoMomoko,
      MemberNames.EtouMisa,
      MemberNames.AkimotoManatsu
    ],
    thirdRow: [
      MemberNames.InoueSayuri,
      MemberNames.ShinuchiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HoshinoMinami,
      MemberNames.WakatsukiYumi,
      MemberNames.HiguchiHina,
      MemberNames.TeradaRanze
    ],
    fourthRow: []
  }
};

const songAtarashiisekai: ISong = {
  title: "新しい世界",
  single: "シンクロニシティ",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["横堀光範"]
  },
  performers: {
    center: [MemberNames.SuzukiAyane],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.UmezawaMinami,
      MemberNames.WatanabeMiria,
      MemberNames.NakadaKana,
      MemberNames.SuzukiAyane,
      MemberNames.SaitouYuuri,
      MemberNames.YamazakiRena,
      MemberNames.ItouRiria
    ],
    secondRow: [
      MemberNames.MukaiHazuki,
      MemberNames.ItouKarin,
      MemberNames.IwamotoRenka,
      MemberNames.ItouJunna,
      MemberNames.SakaguchiTamami,
      MemberNames.SaitouChiharu,
      MemberNames.SatouKaede
    ],
    thirdRow: [
      MemberNames.NoujouAmi,
      MemberNames.KawagoHina,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.SasakiKotoko,
      MemberNames.NakamuraReno,
      MemberNames.WadaMaaya,
      MemberNames.SagaraIori
    ],
    fourthRow: []
  }
};

const songAgainst: ISong = {
  title: "Against",
  single: "シンクロニシティ",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.FirstGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WadaMaaya
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKumoninarebaii: ISong = {
  title: "雲になればいい",
  single: "シンクロニシティ",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ["丸谷マナブ"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "藤桜梨"
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.EtouMisa,
      MemberNames.SakuraiReika
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songScoutman: ISong = {
  title: "スカウトマン",
  single: "シンクロニシティ",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SaSA"],
    arrange: ["SaSA"],
    direct: ["中村太洸"]
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WatanabeMiria
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songTokitokimekimeki: ISong = {
  title: "トキトキメキメキ",
  single: "シンクロニシティ",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中山聡", "足立優"],
    arrange: ["中山聡", "足立優"],
    direct: ["伊藤衆人"]
  },
  performers: {
    center: [MemberNames.IwamotoRenka],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.YodaYuuki
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKotodamaho: ISong = {
  title: "トキトキメキメキ",
  single: "シンクロニシティ",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Ryota Saito", "TomoLow"],
    arrange: ["Ryota Saito", "TomoLow"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "いもうと坂"
  },
  formations: {
    firstRow: [
      MemberNames.OozonoMomoko,
      MemberNames.KuboShiori,
      MemberNames.YamashitaMizuki,
      MemberNames.YodaYuuki
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 19th single

const songItsukadekirukara: ISong = {
  title: "いつかできるから今日できる",
  single: "いつかできるから今日できる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "京田誠一"],
    arrange: ["Akira Sunset", "京田誠一"],
    direct: ["高橋栄樹"]
  },
  performers: {
    center: [
      MemberNames.NishinoNanase,
      MemberNames.SaitouAsuka
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.HoriMiona,
      MemberNames.NishinoNanase,
      MemberNames.SaitouAsuka,
      MemberNames.ShiraishiMai
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.InoueSayuri,
      MemberNames.MatsumuraSayuri,
      MemberNames.IkutaErika,
      MemberNames.ItouMarika,
      MemberNames.SakuraiReika,
      MemberNames.EtouMisa
    ],
    thirdRow: [
      MemberNames.ShinuchiMai,
      MemberNames.SaitouYuuri,
      MemberNames.HoshinoMinami,
      MemberNames.IkomaRina,
      MemberNames.AkimotoManatsu,
      MemberNames.KitanoHinako,
      MemberNames.NakadaKana,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songMyrule: ISong = {
  title: "My rule",
  single: "いつかできるから今日できる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["藤田卓也"],
    arrange: ["藤田卓也"],
    direct: ["林希", "古屋蔵人"]
  },
  performers: {
    center: [MemberNames.HiguchiHina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.WatanabeMiria,
      MemberNames.HiguchiHina,
      MemberNames.TeradaRanze
    ],
    secondRow: [
      MemberNames.NoujouAmi,
      MemberNames.SuzukiAyane,
      MemberNames.YamazakiRena,
      MemberNames.SaitouChiharu
    ],
    thirdRow: [
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.ItouKarin,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.WadaMaaya,
      MemberNames.ItouJunna
    ],
    fourthRow: []
  }
};

const songFumensho: ISong = {
  title: "不眠症",
  single: "いつかできるから今日できる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大貫和紀", "河原レオ", "高木龍一"],
    arrange: ["大貫和紀", "河原レオ", "高木龍一"],
    direct: []
  },
  performers: {
    center: [MemberNames.KuboShiori, MemberNames.YamashitaMizuki],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songMaaiika: ISong = {
  title: "まあいいか?",
  single: "いつかできるから今日できる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["HRK"],
    arrange: ["原広明"],
    direct: ["中村太洸"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.ShiraishiMai
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songShitsurenosojinin: ISong = {
  title: "失恋お掃除人",
  single: "いつかできるから今日できる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["さいとうくにあき", "Akira Sunset", "京田誠一"],
    arrange: ["さいとうくにあき", "Akira Sunset", "京田誠一"],
    direct: ["伊藤衆人"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "若様軍団"
  },
  formations: {
    firstRow: [
      MemberNames.UmezawaMinami,
      MemberNames.SakaguchiTamami,
      MemberNames.YamashitaMizuki,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songBokunoshodo: ISong = {
  title: "僕の衝動",
  single: "いつかできるから今日できる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["石井伸昂"],
    arrange: ["石井伸昂"],
    direct: ["荒船泰廣"]
  },
  performers: {
    center: [MemberNames.ItouRiria],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
    fourthRow: []
  }
};

const songAtarashiikafun: ISong = {
  title: "新しい花粉 〜ミュージカル「見知らぬ世界」より〜",
  single: "いつかできるから今日できる",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["新田目翔"],
    arrange: ["若田部誠"],
    direct: ["荒船泰廣"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.KuboShiori
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 18th single

const songNigemizu: ISong = {
  title: "逃げ水",
  single: "逃げ水",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["谷村庸平"],
    arrange: ["谷村庸平"],
    direct: ["山岸聖太"]
  },
  performers: {
    center: [
      MemberNames.OozonoMomoko,
      MemberNames.YodaYuuki
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.ShiraishiMai,
      MemberNames.OozonoMomoko,
      MemberNames.YodaYuuki,
      MemberNames.NishinoNanase,
      MemberNames.HoriMiona
    ],
    secondRow: [
      MemberNames.HoshinoMinami,
      MemberNames.MatsumuraSayuri,
      MemberNames.IkutaErika,
      MemberNames.AkimotoManatsu,
      MemberNames.EtouMisa,
      MemberNames.TakayamaKazumi
    ],
    thirdRow: [
      MemberNames.ItouMarika,
      MemberNames.ShinuchiMai,
      MemberNames.IkomaRina,
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.InoueSayuri
    ],
    fourthRow: []
  }
};

const songUnder: ISong = {
  title: "アンダー",
  single: "逃げ水",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["白土亨"],
    arrange: ["遠藤ナオキ"],
    direct: ["金森孝宏"]
  },
  performers: {
    center: [
      MemberNames.NakamotoHimeka,
      MemberNames.KitanoHinako
    ],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.HiguchiHina,
      MemberNames.WatanabeMiria,
      MemberNames.NakamotoHimeka,
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.SaitouYuuri
    ],
    secondRow: [
      MemberNames.NakadaKana,
      MemberNames.YamazakiRena,
      MemberNames.SuzukiAyane,
      MemberNames.ItouKarin,
      MemberNames.ItouJunna,
      MemberNames.SaitouChiharu
    ],
    thirdRow: [
      MemberNames.NoujouAmi,
      MemberNames.SagaraIori,
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SasakiKotoko,
      MemberNames.WadaMaaya
    ],
    fourthRow: []
  }
};

const songOnnahahitorija: ISong = {
  title: "女は一人じゃ眠れない",
  single: "逃げ水",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小形誠"],
    arrange: ["高橋浩一郎"],
    direct: ["萩原健太郎"]
  },
  performers: {
    center: [
      MemberNames.OozonoMomoko,
      MemberNames.YodaYuuki
    ],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songHitonatsu: ISong = {
  title: "ひと夏の長さより…",
  single: "逃げ水",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["aokado"],
    arrange: ["aokado"],
    direct: []
  },
  performers: {
    center: [
      MemberNames.AkimotoManatsu,
      MemberNames.MatsumuraSayuri
    ],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songLiveshin: ISong = {
  title: "ライブ神",
  single: "逃げ水",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SaSA"],
    arrange: ["SaSA"],
    direct: ["伊藤衆人"]
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.TeradaRanze,
      MemberNames.HoriMiona,
      MemberNames.KitanoHinako
    ],
    secondRow: [
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.SuzukiAyane,
      MemberNames.ShinuchiMai
    ],
    thirdRow: [
      MemberNames.ItouJunna,
      MemberNames.ItouKarin,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko
    ],
    fourthRow: []
  }
};

const songMirainokotae: ISong = {
  title: "未来の答え",
  single: "逃げ水",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["板垣祐介"],
    arrange: ["板垣祐介"],
    direct: ["福島真希"]
  },
  performers: {
    center: [
      MemberNames.KuboShiori,
      MemberNames.YamashitaMizuki
    ],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.UmezawaMinami,
      MemberNames.YamashitaMizuki,
      MemberNames.KuboShiori,
      MemberNames.ItouRiria
    ],
    secondRow: [
      MemberNames.IwamotoRenka,
      MemberNames.OozonoMomoko,
      MemberNames.YodaYuuki,
      MemberNames.SakaguchiTamami
    ],
    thirdRow: [
      MemberNames.NakamuraReno,
      MemberNames.MukaiHazuki,
      MemberNames.YoshidaAyanoChristie,
      MemberNames.SatouKaede
    ],
    fourthRow: []
  }
};

const songNaidatteii: ISong = {
  title: "未来の答え",
  single: "逃げ水",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["K-WONDER", "SAS3"],
    arrange: ["遠藤ナオキ"],
    direct: []
  },
  performers: {
    center: [MemberNames.TakayamaKazumi],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 17th single

const songInfluencer: ISong = {
  title: "インフルエンサー",
  single: "インフルエンサー",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["すみだしんや"],
    arrange: ["APAZZI"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.HoriMiona,
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.SaitouAsuka,
      MemberNames.EtouMisa
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.TakayamaKazumi,
      MemberNames.IkomaRina,
      MemberNames.IkutaErika,
      MemberNames.MatsumuraSayuri,
      MemberNames.SakuraiReika
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
      MemberNames.NakadaKana
    ],
    fourthRow: []
  }
};

const songFusenhaikiteiru: ISong = {
  title: "風船は生きている",
  single: "インフルエンサー",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["泉佳伸", "三好翔太"],
    arrange: ["早川博隆", "三好翔太"],
    direct: ["多田卓也"]
  },
  performers: {
    center: [MemberNames.WatanabeMiria],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.SuzukiAyane
    ],
    secondRow: [
      MemberNames.SaitouChiharu,
      MemberNames.ItouKarin,
      MemberNames.NoujouAmi,
      MemberNames.SagaraIori
    ],
    thirdRow: [
      MemberNames.KawagoHina,
      MemberNames.SasakiKotoko,
      MemberNames.WadaMaaya,
      MemberNames.ItouJunna,
      MemberNames.KawagoHina
    ],
    fourthRow: []
  }
};

const songJinseiwokangae: ISong = {
  title: "人生を考えたくなる",
  single: "インフルエンサー",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["片桐周太郎"],
    arrange: ["片桐周太郎"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "女子校カルテット"
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songIgaibreak: ISong = {
  title: "意外BREAK",
  single: "インフルエンサー",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["すみだしんや"],
    arrange: ["華原大輔"],
    direct: ["伊藤衆人"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "姉御坂"
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songAnotherghost: ISong = {
  title: "Another Ghost",
  single: "インフルエンサー",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["前迫潤哉", "Yasutaka.Ishio"],
    arrange: ["Yasutaka.Ishio"],
    direct: ["井上強"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "ナスカ"
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.SaitouAsuka,
      MemberNames.NishinoNanase
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songSanbanmenokaze: ISong = {
  title: "三番目の風",
  single: "インフルエンサー",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ["丸谷マナブ"],
    direct: ["岡川太郎"]
  },
  performers: {
    center: [MemberNames.OozonoMomoko],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.KuboShiori,
      MemberNames.OozonoMomoko,
      MemberNames.YamashitaMizuki
    ],
    secondRow: [
      MemberNames.SakaguchiTamami,
      MemberNames.YodaYuuki,
      MemberNames.ItouRiria,
      MemberNames.IwamotoRenka
    ],
    thirdRow: [
      MemberNames.UmezawaMinami,
      MemberNames.MukaiHazuki,
      MemberNames.NakamuraReno,
      MemberNames.SatouKaede,
      MemberNames.YoshidaAyanoChristie
    ],
    fourthRow: []
  }
};

const songAtarisawarinonai: ISong = {
  title: "当たり障りのない話",
  single: "インフルエンサー",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小網準"],
    arrange: ["野中\"まさ\"雄一"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "かすみ草"
  },
  formations: {
    firstRow: [
      MemberNames.IkomaRina,
      MemberNames.InoueSayuri,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 16th single

const songSayonaranoimi: ISong = {
  title: "サヨナラの意味",
  single: "サヨナラの意味",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["若田部誠"],
    direct: ["柳沢翔"]
  },
  performers: {
    center: [
      MemberNames.HashimotoNanami
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.TakayamaKazumi,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.ShiraishiMai,
      MemberNames.IkutaErika
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.MatsumuraSayuri,
      MemberNames.HoriMiona,
      MemberNames.SaitouAsuka,
      MemberNames.EtouMisa,
      MemberNames.AkimotoManatsu
    ],
    thirdRow: [
      MemberNames.NakamotoHimeka,
      MemberNames.InoueSayuri,
      MemberNames.ShinuchiMai,
      MemberNames.SakuraiReika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
      MemberNames.KitanoHinako,
      MemberNames.ItouMarika
    ],
    fourthRow: []
  }
};

const songBulanko: ISong = {
  title: "ブランコ",
  single: "サヨナラの意味",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiro Hoashi"],
    arrange: ["Hiro Hoashi"],
    direct: ["伊藤衆人"]
  },
  performers: {
    center: [MemberNames.TeradaRanze],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.HiguchiHina,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NoujouAmi
    ],
    secondRow: [
      MemberNames.SaitouYuuri,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria,
      MemberNames.SuzukiAyane,
      MemberNames.SaitouChiharu
    ],
    thirdRow: [
      MemberNames.ItouJunna,
      MemberNames.WadaMaaya,
      MemberNames.ItouKarin,
      MemberNames.KawagoHina,
      MemberNames.SasakiKotoko,
      MemberNames.SagaraIori
    ],
    fourthRow: []
  }
};

const songKodokunaaozora: ISong = {
  title: "孤独な青空",
  single: "サヨナラの意味",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["aokado"],
    arrange: ["aokado"],
    direct: []
  },
  performers: {
    center: [MemberNames.HashimotoNanami],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songAnokyoshitsu: ISong = {
  title: "あの教室",
  single: "サヨナラの意味",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["カワノミチオ"],
    arrange: ["カワノミチオ"],
    direct: ["山岸聖太"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.HoriMiona
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songNidomenokisukara: ISong = {
  title: "2度目のキスから",
  single: "サヨナラの意味",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "APAZZI"],
    arrange: ["Akira Sunset", "APAZZI"],
    direct: ["中村太洸"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "真夏さんリスペクト軍団"
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.SagaraIori,
      MemberNames.SuzukiAyane,
      MemberNames.WatanabeMiria
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKiminiokuruhana: ISong = {
  title: "君に贈る花がない",
  single: "サヨナラの意味",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Rizz"],
    arrange: ["山田竜平"],
    direct: ["東市篤憲"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "サンクエトワール"
  },
  formations: {
    firstRow: [
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NakamotoHimeka,
      MemberNames.HoriMiona
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songNaimononetari: ISong = {
  title: "ないものねだり",
  single: "サヨナラの意味",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ["丸谷マナブ", "福田貴史"],
    direct: ["山岸聖太"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.HashimotoNanami,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.HashimotoNanami
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 15th single

const songHadashidesummer: ISong = {
  title: "裸足でSummer",
  single: "裸足でSummer",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["福森秀敏"],
    arrange: ["APAZZI"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [
      MemberNames.SaitouAsuka
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.HashimotoNanami,
      MemberNames.NishinoNanase,
      MemberNames.SaitouAsuka,
      MemberNames.ShiraishiMai,
      MemberNames.IkutaErika
    ],
    secondRow: [
      MemberNames.TakayamaKazumi,
      MemberNames.EtouMisa,
      MemberNames.MatsumuraSayuri,
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika
    ],
    thirdRow: [
      MemberNames.KitanoHinako,
      MemberNames.HoshinoMinami,
      MemberNames.WakatsukiYumi,
      MemberNames.IkomaRina,
      MemberNames.HoriMiona,
      MemberNames.NakamotoHimeka
    ],
    fourthRow: []
  }
};

const songSecretGravity: ISong = {
  title: "シークレットグラフィティー",
  single: "裸足でSummer",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ツキダタダシ"],
    direct: ["山岸聖太"]
  },
  performers: {
    center: [MemberNames.HiguchiHina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.TeradaRanze,
      MemberNames.ItouMarika,
      MemberNames.HiguchiHina,
      MemberNames.InoueSayuri,
      MemberNames.WatanabeMiria
    ],
    secondRow: [
      MemberNames.SaitouChiharu,
      MemberNames.SaitouYuuri,
      MemberNames.ShinuchiMai,
      MemberNames.NakadaKana,
      MemberNames.NoujouAmi
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
      MemberNames.ItouKarin
    ],
    fourthRow: []
  }
};

const songBokudakenohikari: ISong = {
  title: "僕だけの光",
  single: "裸足でSummer",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiro Hoashi"],
    arrange: ["Hiro Hoashi"],
    direct: []
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songOffshoregirl: ISong = {
  title: "オフショアガール",
  single: "裸足でSummer",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["井上強"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.ShiraishiMai,
    unit: undefined
  },
  formations: {
    firstRow: [MemberNames.ShiraishiMai],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songInochinoshinjitsu: ISong = {
  title: "命の真実 ミュージカル「林檎売りとカメムシ」",
  single: "裸足でSummer",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["NA.ZU.NA"],
    arrange: ["NA.ZU.NA"],
    direct: ["中村太洸"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.IkutaErika,
    unit: undefined
  },
  formations: {
    firstRow: [MemberNames.IkutaErika],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songHakumaisama: ISong = {
  title: "白米様",
  single: "裸足でSummer",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Ruby"],
    arrange: ["あらケン"],
    direct: ["伊藤衆人"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "さゆりんご軍団"
  },
  formations: {
    firstRow: [MemberNames.MatsumuraSayuri],
    secondRow: [
      MemberNames.SasakiKotoko,
      MemberNames.ItouKarin,
      MemberNames.TeradaRanze,
    ],
    thirdRow: [],
    fourthRow: []
  }
};

const songIkuatenonaibokutachi: ISong = {
  title: "行くあてのない僕たち",
  single: "裸足でSummer",
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大橋莉子"],
    arrange: ["佐々木裕"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "さゆりんご軍団"
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 14th single

const songHarujion: ISong = {
  title: "ハルジオンが咲く頃",
  single: "ハルジオンが咲く頃",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "APAZZI"],
    arrange: ["Akira Sunset", "APAZZI"],
    direct: ["山戸結希"]
  },
  performers: {
    center: [
      MemberNames.FukagawaMai
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.HashimotoNanami,
      MemberNames.NishinoNanase,
      MemberNames.FukagawaMai,
      MemberNames.ShiraishiMai,
      MemberNames.IkutaErika
    ],
    secondRow: [
      MemberNames.SaitouAsuka,
      MemberNames.TakayamaKazumi,
      MemberNames.EtouMisa,
      MemberNames.AkimotoManatsu,
      MemberNames.HoshinoMinami
    ],
    thirdRow: [
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.MatsumuraSayuri,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.HoriMiona
    ],
    fourthRow: []
  }
};

const songFutogo: ISong = {
  title: "不等号",
  single: "ハルジオンが咲く頃",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["福田貴史"],
    arrange: ["福田貴史"],
    direct: ["池田千尋"]
  },
  performers: {
    center: [MemberNames.NakamotoHimeka],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.SaitouYuuri,
      MemberNames.TeradaRanze,
      MemberNames.NakamotoHimeka,
      MemberNames.KitanoHinako,
      MemberNames.HiguchiHina
    ],
    secondRow: [
      MemberNames.ItouKarin,
      MemberNames.KawagoHina,
      MemberNames.NakadaKana,
      MemberNames.ShinuchiMai,
      MemberNames.NoujouAmi
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
      MemberNames.ItouJunna
    ],
    fourthRow: []
  }
};

const songHarukanarubhutan: ISong = {
  title: "遥かなるブータン",
  single: "ハルジオンが咲く頃",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ツキダタダシ"],
    arrange: ["ha-j"],
    direct: []
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.ItouMarika,
      MemberNames.EtouMisa,
      MemberNames.SaitouAsuka,
      MemberNames.HoriMiona,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songTsuyogarutsubomi: ISong = {
  title: "強がる蕾",
  single: "ハルジオンが咲く頃",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大貫和紀", "河原レオ", "高木龍一"],
    arrange: ["Carlos K."],
    direct: ["真壁幸紀"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.FukagawaMai,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.FukagawaMai
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKyushamen: ISong = {
  title: "急斜面",
  single: "ハルジオンが咲く頃",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["FURUTA", "Yasutaka Ishio"],
    arrange: ["重永亮介"],
    direct: ["番場秀一"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songTsuribori: ISong = {
  title: "釣り堀",
  single: "ハルジオンが咲く頃",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Bush-I"],
    arrange: ["APAZZI"],
    direct: ["永田琴"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.NishinoNanase,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.NishinoNanase
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songYuutsutofusengamu: ISong = {
  title: "憂鬱と風船ガム",
  single: "ハルジオンが咲く頃",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["HIROTOMO", "Dr.Lilcom"],
    arrange: ["APAZZI"],
    direct: []
  },
  performers: {
    center: [MemberNames.HoshinoMinami],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
    fourthRow: []
  }
};

// 13th single

const songHanashitaidarekagairu: ISong = {
  title: "今、話したい誰かがいる",
  single: "今、話したい誰かがいる",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "APAZZI"],
    arrange: ["Akira Sunset", "APAZZI"],
    direct: ["萩原健太郎"]
  },
  performers: {
    center: [
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.FukagawaMai
    ],
    secondRow: [
      MemberNames.SaitouAsuka,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.IkutaErika,
      MemberNames.AkimotoManatsu,
      MemberNames.HoshinoMinami
    ],
    thirdRow: [
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.IkomaRina,
      MemberNames.MatsumuraSayuri,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri
    ],
    fourthRow: []
  }
};

const songShittonokenri: ISong = {
  title: "嫉妬の権利",
  single: "今、話したい誰かがいる",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸山真由子"],
    arrange: ["丸山真由子"],
    direct: ["井上強"]
  },
  performers: {
    center: [
      MemberNames.HoriMiona,
      MemberNames.NakamotoHimeka
    ],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.KitanoHinako,
      MemberNames.HoriMiona,
      MemberNames.NakamotoHimeka,
      MemberNames.TeradaRanze
    ],
    secondRow: [
      MemberNames.NakadaKana,
      MemberNames.ShinuchiMai,
      MemberNames.KawamuraMahiro,
      MemberNames.NagashimaSeira,
      MemberNames.NoujouAmi,
      MemberNames.HiguchiHina,
      MemberNames.SaitouChiharu,
      MemberNames.SaitouYuuri
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
      MemberNames.WadaMaaya
    ],
    fourthRow: []
  }
};

const songPopipappapa: ISong = {
  title: "ポピパッパパー",
  single: "今、話したい誰かがいる",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase
    ],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.FukagawaMai
    ],
    secondRow: [
      MemberNames.SaitouAsuka,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.IkutaErika,
      MemberNames.AkimotoManatsu,
      MemberNames.HoshinoMinami
    ],
    thirdRow: [
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.IkomaRina,
      MemberNames.MatsumuraSayuri,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri
    ],
    fourthRow: []
  }
};

const songOtonahenochikamichi: ISong = {
  title: "大人への近道",
  single: "今、話したい誰かがいる",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["湯浅弘章"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "サンクエトワール"
  },
  formations: {
    firstRow: [
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.NakadaKana,
      MemberNames.NakamotoHimeka,
      MemberNames.HoriMiona
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKanashiminowasurekata: ISong = {
  title: "悲しみの忘れ方",
  single: "今、話したい誰かがいる",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["近藤圭一"],
    arrange: ["久下真音"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songSukima: ISong = {
  title: "隙間",
  single: "今、話したい誰かがいる",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "Carlos K."],
    arrange: ["Akira Sunset", "Carlos K."],
    direct: []
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 12th single

const songTaiyoknock: ISong = {
  title: "太陽ノック",
  single: "太陽ノック",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["黒須克彦"],
    arrange: ["長田直之"],
    direct: ["三石直和"]
  },
  performers: {
    center: [
      MemberNames.IkomaRina
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.IkomaRina,
      MemberNames.IkutaErika,
      MemberNames.HashimotoNanami
    ],
    secondRow: [
      MemberNames.TakayamaKazumi,
      MemberNames.WakatsukiYumi,
      MemberNames.SakuraiReika,
      MemberNames.AkimotoManatsu,
      MemberNames.FukagawaMai
    ],
    thirdRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.HoshinoMinami,
      MemberNames.SaitouAsuka,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.ShinuchiMai,
      MemberNames.EtouMisa
    ],
    fourthRow: []
  }
};

const songWakaregiwa: ISong = {
  title: "別れ際、もっと好きになる",
  single: "太陽ノック",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["山岸聖太"]
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.KitanoHinako,
      MemberNames.HoriMiona,
      MemberNames.NakamotoHimeka,
      MemberNames.NakadaKana
    ],
    secondRow: [
      MemberNames.SagaraIori,
      MemberNames.KawagoHina,
      MemberNames.NagashimaSeira,
      MemberNames.NoujouAmi,
      MemberNames.SaitouChiharu
    ],
    thirdRow: [
      MemberNames.WadaMaaya,
      MemberNames.SasakiKotoko,
      MemberNames.TeradaRanze,
      MemberNames.ItouKarin,
      MemberNames.WatanabeMiria,
      MemberNames.SuzukiAyane,
      MemberNames.ItouJunna,
      MemberNames.HiguchiHina
    ],
    fourthRow: []
  }
};

const songMosukoshinoyumewo: ISong = {
  title: "もう少しの夢",
  single: "太陽ノック",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["丸谷マナブ"],
    arrange: ["野中\"まさ\"雄一"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.NishinoNanase,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.NishinoNanase
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songSakanatachinolovesong: ISong = {
  title: "魚たちのLOVE SONG",
  single: "太陽ノック",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["渡辺拓也"],
    arrange: ["渡辺拓也"],
    direct: ["中村太洸"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
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
    fourthRow: []
  }
};

const songMuhyojo: ISong = {
  title: "無表情",
  single: "太陽ノック",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["Akira Sunset"],
    direct: ["月田茂", "山本篤彦", "柴谷麻以"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "からあげ姉妹"
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songHanenokioku: ISong = {
  title: "羽根の記憶",
  single: "太陽ノック",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: ["岡川太郎"]
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
    fourthRow: []
  }
};

const songSeifukuwonuide: ISong = {
  title: "制服を脱いでサヨナラを…",
  single: "太陽ノック",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.HoshinoMinami
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 11th single

const songInochihautsukushii: ISong = {
  title: "命は美しい",
  single: "命は美しい",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Hiroki Sagawa"],
    arrange: ["Hiroki Sagawa"],
    direct: ["井上強"]
  },
  performers: {
    center: [
      MemberNames.NishinoNanase
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.MatsuiRena,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.IkutaErika
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.AkimotoManatsu,
      MemberNames.IkomaRina,
      MemberNames.SakuraiReika,
      MemberNames.FukagawaMai
    ],
    thirdRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.SagaraIori,
      MemberNames.SaitouAsuka,
      MemberNames.ItouMarika,
      MemberNames.HoriMiona,
      MemberNames.HoshinoMinami,
      MemberNames.EtouMisa,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songKimihabokuto: ISong = {
  title: "君は僕と会わない方がよかったのかな",
  single: "命は美しい",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ha-j"],
    arrange: ["Akira Sunset", "ha-j"],
    direct: ["山田篤宏"]
  },
  performers: {
    center: [MemberNames.NakamotoHimeka],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.SaitouYuuri,
      MemberNames.NakamotoHimeka,
      MemberNames.InoueSayuri
    ],
    secondRow: [
      MemberNames.NoujouAmi,
      MemberNames.NagashimaSeira,
      MemberNames.NakadaKana,
      MemberNames.ShinuchiMai
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.KitanoHinako,
      MemberNames.KawagoHina,
      MemberNames.HiguchiHina,
      MemberNames.ItouKarin,
      MemberNames.WadaMaaya,
      MemberNames.SaitouChiharu
    ],
    fourthRow: []
  }
};

const songArakajimeromance: ISong = {
  title: "あらかじめ語られるロマンス",
  single: "命は美しい",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SoichiroK", "Nozomu.S"],
    arrange: ["SoichiroK", "Nozomu.S"],
    direct: ["岡川太郎"]
  },
  performers: {
    center: [
      MemberNames.SaitouAsuka,
      MemberNames.HoshinoMinami,
    ],
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.SaitouAsuka,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songTachinaorichu: ISong = {
  title: "立ち直り中",
  single: "命は美しい",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["福田貴史"],
    arrange: ["TATOO"],
    direct: ["湯浅弘章"]
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.EtouMisa,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songGomennezutto: ISong = {
  title: "ごめんね ずっと…",
  single: "命は美しい",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山田智和"],
    arrange: ["住谷翔平"],
    direct: ["山戸結希"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.NishinoNanase,
    unit: undefined
  },
  formations: {
    firstRow: [MemberNames.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songBorder: ISong = {
  title: "ボーダー",
  single: "命は美しい",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: []
  },
  performers: {
    center: [MemberNames.TeradaRanze],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
    fourthRow: []
  }
};

// 10th single

const songNandomenoaozoraka: ISong = {
  title: "何度目の青空か?",
  single: "何度目の青空か?",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["川浦正大"],
    arrange: ["百石元"],
    direct: ["内田けんじ"]
  },
  performers: {
    center: [
      MemberNames.IkutaErika
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.MatsuiRena,
      MemberNames.ShiraishiMai,
      MemberNames.IkutaErika,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami
    ],
    secondRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.AkimotoManatsu,
      MemberNames.IkomaRina,
      MemberNames.SakuraiReika,
      MemberNames.FukagawaMai
    ],
    thirdRow: [
      MemberNames.EtouMisa,
      MemberNames.WakatsukiYumi,
      MemberNames.HoriMiona,
      MemberNames.HoshinoMinami,
      MemberNames.TakayamaKazumi,
      MemberNames.SaitouChiharu
    ],
    fourthRow: []
  }
};

const songAnohibokuha: ISong = {
  title: "あの日 僕は咄嗟に嘘をついた",
  single: "何度目の青空か?",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["三輪智也"],
    arrange: ["京田誠一"],
    direct: ["湯浅弘章"]
  },
  performers: {
    center: [MemberNames.InoueSayuri],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.InoueSayuri,
      MemberNames.ItouMarika
    ],
    secondRow: [
      MemberNames.NagashimaSeira,
      MemberNames.NakamotoHimeka,
      MemberNames.SaitouYuuri,
      MemberNames.NakadaKana,
      MemberNames.NoujouAmi
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
    fourthRow: []
  }
};

const songTomawarinoaijo: ISong = {
  title: "遠回りの愛情",
  single: "何度目の青空か?",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Noda Akiko"],
    arrange: ["野中\"まさ\"雄一"],
    direct: []
  },
  performers: {
    center: [
      MemberNames.NagashimaSeira,
      MemberNames.SakuraiReika
    ],
    fukujin: undefined,
    solo: undefined,
    unit: ""
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
    fourthRow: []
  }
};

const songKorogattakanewonarase: ISong = {
  title: "転がった鐘を鳴らせ!",
  single: "何度目の青空か?",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中山英二"],
    arrange: ["田上陽一"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songWatashiokiru: ISong = {
  title: "私、起きる。",
  single: "何度目の青空か?",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "ZERO"],
    arrange: ["Akira Sunset", "ZERO"],
    direct: ["柳沢翔"]
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: undefined,
    solo: undefined,
    unit: ""
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
      MemberNames.WadaMaaya
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songTenderdays: ISong = {
  title: "Tender days",
  single: "何度目の青空か?",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SoichiroK", "Nozomu.S"],
    arrange: ["Soulife"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
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
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 9th single

const songNatsunofreeandeasy: ISong = {
  title: "夏のFree&Easy",
  single: "夏のFree&Easy",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["井上トモノリ"],
    arrange: ["橋本幸太"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [
      MemberNames.NishinoNanase
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.MatsuiRena,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
      MemberNames.FukagawaMai,
      MemberNames.IkomaRina
    ],
    thirdRow: [
      MemberNames.EtouMisa,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.HoshinoMinami,
      MemberNames.YamatoRina,
      MemberNames.HoriMiona,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songKokoniiruriyu: ISong = {
  title: "ここにいる理由",
  single: "夏のFree&Easy",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["長谷川湊"],
    arrange: ["Carlos K."],
    direct: ["近藤大介"]
  },
  performers: {
    center: [MemberNames.ItouMarika],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.KawagoHina,
      MemberNames.SaitouAsuka,
      MemberNames.ItouMarika,
      MemberNames.HiguchiHina,
      MemberNames.WadaMaaya
    ],
    secondRow: [
      MemberNames.NagashimaSeira,
      MemberNames.NakadaKana,
      MemberNames.NoujouAmi,
      MemberNames.NakamotoHimeka,
      MemberNames.KawamuraMahiro
    ],
    thirdRow: [
      MemberNames.SaitouChiharu,
      MemberNames.KitanoHinako,
      MemberNames.HatanakaSeira,
      MemberNames.ItouNene,
      MemberNames.IchikiRena,
      MemberNames.ShinuchiMai
    ],
    fourthRow: []
  }
};

const songNanimodekizuni: ISong = {
  title: "何もできずにそばにいる",
  single: "夏のFree&Easy",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["角野寿和"],
    arrange: ["京田誠一"],
    direct: []
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.MatsuiRena,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [
      MemberNames.WakatsukiYumi,
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
      MemberNames.FukagawaMai,
      MemberNames.IkomaRina
    ],
    thirdRow: [
      MemberNames.EtouMisa,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.HoshinoMinami,
      MemberNames.YamatoRina,
      MemberNames.HoriMiona,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songSonosakinodeguchi: ISong = {
  title: "その先の出口!",
  single: "夏のFree&Easy",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Carlos K."],
    arrange: ["Carlos K."],
    direct: ["中村太洸"]
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.YamatoRina
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songMukuchinalion: ISong = {
  title: "無口なライオン",
  single: "夏のFree&Easy",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Shusui", "ヒロイズム"],
    arrange: ["Shusui", "ヒロイズム"],
    direct: ["湯浅弘章"]
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: undefined,
    solo: undefined,
    unit: ""
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songBokugaikanakya: ISong = {
  title: "僕が行かなきゃ誰が行くんだ?",
  single: "夏のFree&Easy",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: []
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 8th single

const songKizuitarakataomoi: ISong = {
  title: "気づいたら片想い",
  single: "気づいたら片想い",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["湯浅篤"],
    direct: ["柳沢翔"]
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: FukujinType.RowOne,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.HoriMiona,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.IkomaRina
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.IkomaRina,
      MemberNames.MatsumuraSayuri,
      MemberNames.FukagawaMai
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.KitanoHinako,
      MemberNames.HiguchiHina,
      MemberNames.AkimotoManatsu,
      MemberNames.WadaMaaya,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songUmaretamamade: ISong = {
  title: "生まれたままで",
  single: "気づいたら片想い",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["田中俊亮"],
    arrange: ["鈴木裕明"],
    direct: ["久保茂昭"]
  },
  performers: {
    center: [MemberNames.ItouMarika],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.InoueSayuri,
      MemberNames.SaitouAsuka,
      MemberNames.ItouMarika,
      MemberNames.HoshinoMinami,
      MemberNames.SaitouYuuri
    ],
    secondRow: [
      MemberNames.NagashimaSeira,
      MemberNames.NakadaKana,
      MemberNames.EtouMisa,
      MemberNames.KawagoHina,
      MemberNames.NakamotoHimeka
    ],
    thirdRow: [
      MemberNames.SaitouChiharu,
      MemberNames.ItouNene,
      MemberNames.IchikiRena,
      MemberNames.ShinuchiMai,
      MemberNames.HatanakaSeira,
      MemberNames.YamatoRina,
      MemberNames.NoujouAmi
    ],
    fourthRow: []
  }
};

const songRomancenostart: ISong = {
  title: "ロマンスのスタート",
  single: "気づいたら片想い",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["押田誠"],
    arrange: ["佐々木聡作", "押田誠"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.HoriMiona,
      MemberNames.ShiraishiMai,
      MemberNames.NishinoNanase,
      MemberNames.HashimotoNanami,
      MemberNames.IkomaRina
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi,
      MemberNames.IkomaRina,
      MemberNames.MatsumuraSayuri,
      MemberNames.FukagawaMai
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.KitanoHinako,
      MemberNames.HiguchiHina,
      MemberNames.AkimotoManatsu,
      MemberNames.WadaMaaya,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songToikimethod: ISong = {
  title: "吐息のメソッド",
  single: "気づいたら片想い",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["田中明仁"],
    arrange: ["TATOO"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WadaMaaya
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKodokukyodai: ISong = {
  title: "孤独兄弟",
  single: "気づいたら片想い",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Soulife"],
    arrange: ["Soulife"],
    direct: ["池田一真"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "孤独兄弟"
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songDankeschon: ISong = {
  title: "ダンケシェーン",
  single: "気づいたら片想い",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset", "C#"],
    arrange: ["Akira Sunset", "C#"],
    direct: []
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: undefined,
    solo: undefined,
    unit: ""
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
    fourthRow: []
  }
};

// 7th single

const songValletta: ISong = {
  title: "バレッタ",
  single: "バレッタ",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["サイトウヨシヒロ"],
    arrange: ["若田部誠"],
    direct: ["江湖広二"]
  },
  performers: {
    center: [
      MemberNames.HoriMiona
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.HoriMiona,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.WakatsukiYumi
    ],
    thirdRow: [
      MemberNames.ItouMarika,
      MemberNames.EtouMisa,
      MemberNames.SaitouAsuka,
      MemberNames.AkimotoManatsu,
      MemberNames.FukagawaMai,
      MemberNames.NakamotoHimeka,
      MemberNames.KawagoHina,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songHatsukoinohito: ISong = {
  title: "初恋の人を今でも",
  single: "バレッタ",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["田所貴司"]
  },
  performers: {
    center: [MemberNames.HoshinoMinami],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.InoueSayuri,
      MemberNames.HoshinoMinami,
      MemberNames.SaitouYuuri
    ],
    secondRow: [
      MemberNames.NoujouAmi,
      MemberNames.HiguchiHina,
      MemberNames.NakadaKana,
      MemberNames.NagashimaSeira,
      MemberNames.KawamuraMahiro
    ],
    thirdRow: [
      MemberNames.SaitouChiharu,
      MemberNames.HatanakaSeira,
      MemberNames.YamatoRina,
      MemberNames.ItouNene,
      MemberNames.WadaMaaya
    ],
    fourthRow: []
  }
};

const songTsukinookisa: ISong = {
  title: "月の大きさ",
  single: "バレッタ",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: ["大久保拓朗"]
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.NishinoNanase,
      MemberNames.ShiraishiMai,
      MemberNames.HoriMiona,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.WakatsukiYumi
    ],
    thirdRow: [
      MemberNames.ItouMarika,
      MemberNames.EtouMisa,
      MemberNames.SaitouAsuka,
      MemberNames.AkimotoManatsu,
      MemberNames.FukagawaMai,
      MemberNames.NakamotoHimeka,
      MemberNames.KawagoHina,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songWatashinotameni: ISong = {
  title: "私のために 誰かのために",
  single: "バレッタ",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: []
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.KawamuraMahiro,
      MemberNames.SakuraiReika,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songSonnabakana: ISong = {
  title: "そんなバカな…",
  single: "バレッタ",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["Akira Sunset"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [MemberNames.HoriMiona],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songYasashisatoha: ISong = {
  title: "やさしさとは",
  single: "バレッタ",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: []
  },
  performers: {
    center: [MemberNames.HashimotoNanami],
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.NakamotoHimeka,
      MemberNames.NishinoNanase,
      MemberNames.NoujouAmi,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 6th single

const songGirlsrule: ISong = {
  title: "ガールズルール",
  single: "ガールズルール",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["後藤康二"],
    arrange: ["後藤康二"],
    direct: ["柳沢翔"]
  },
  performers: {
    center: [
      MemberNames.ShiraishiMai
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.NishinoNanase,
      MemberNames.TakayamaKazumi
    ],
    thirdRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.NakadaKana,
      MemberNames.WakatsukiYumi,
      MemberNames.HoshinoMinami,
      MemberNames.AkimotoManatsu,
      MemberNames.FukagawaMai,
      MemberNames.SaitouYuuri
    ],
    fourthRow: []
  }
};

const songSenpuki: ISong = {
  title: "扇風機",
  single: "ガールズルール",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["角野寿和"],
    arrange: ["野村陽一郎"],
    direct: ["池田一真"]
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.HiguchiHina,
      MemberNames.SaitouAsuka,
      MemberNames.NakamotoHimeka
    ],
    secondRow: [
      MemberNames.NoujouAmi,
      MemberNames.EtouMisa,
      MemberNames.KawamuraMahiro
    ],
    thirdRow: [
      MemberNames.ItouNene,
      MemberNames.NagashimaSeira,
      MemberNames.SaitouChiharu,
      MemberNames.IchikiRena
    ],
    fourthRow: [
      MemberNames.YamatoRina,
      MemberNames.KawagoHina,
      MemberNames.WadaMaaya,
      MemberNames.KashiwaYukina,
      MemberNames.HatanakaSeira,
      MemberNames.MiyazawaSeira
    ]
  }
};

const songSekaideichiban: ISong = {
  title: "世界で一番 孤独なLover",
  single: "ガールズルール",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["河原嶺旭"],
    arrange: ["百石元"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [MemberNames.ShiraishiMai],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.MatsumuraSayuri,
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.NishinoNanase,
      MemberNames.TakayamaKazumi
    ],
    thirdRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.NakadaKana,
      MemberNames.WakatsukiYumi,
      MemberNames.HoshinoMinami,
      MemberNames.AkimotoManatsu,
      MemberNames.FukagawaMai,
      MemberNames.SaitouYuuri
    ],
    fourthRow: []
  }
};

const songKomoriyo: ISong = {
  title: "コウモリよ",
  single: "ガールズルール",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["南田健吾"],
    arrange: ["高梨康治"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.NakamotoHimeka,
      MemberNames.NoujouAmi,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songHokanohoshikara: ISong = {
  title: "他の星から",
  single: "ガールズルール",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Sugaya Bros.", "松村PONY"],
    arrange: ["Sugaya Bros."],
    direct: ["岡川太郎"]
  },
  performers: {
    center: [MemberNames.NishinoNanase],
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.SaitouYuuri,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const sonNingentoiugaki: ISong = {
  title: "人間という楽器",
  single: "ガールズルール",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.FirstGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["鐘撞行孝"],
    arrange: ["TATOO"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WadaMaaya
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 5th single

const songKiminonahakibo: ISong = {
  title: "君の名は希望",
  single: "君の名は希望",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: ["山下敦弘"]
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami
    ],
    secondRow: [
      MemberNames.SakuraiReika,
      MemberNames.HashimotoNanami,
      MemberNames.ShiraishiMai,
      MemberNames.MatsumuraSayuri,
      MemberNames.AkimotoManatsu
    ],
    thirdRow: [
      MemberNames.ItouNene,
      MemberNames.NakadaKana,
      MemberNames.InoueSayuri,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi,
      MemberNames.FukagawaMai,
      MemberNames.NagashimaSeira,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songjusannichinokiyobi: ISong = {
  title: "13日の金曜日",
  single: "君の名は希望",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["網本ナオノブ"],
    arrange: ["湯浅篤"],
    direct: ["山田篤宏"]
  },
  performers: {
    center: [MemberNames.SaitouYuuri],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.SaitouYuuri,
      MemberNames.SaitouAsuka
    ],
    secondRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.EtouMisa,
      MemberNames.NoujouAmi,
      MemberNames.IchikiRena
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
      MemberNames.MiyazawaSeira
    ],
    fourthRow: []
  }
};

const songShakism: ISong = {
  title: "シャキイズム",
  single: "君の名は希望",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["岡本健介"],
    arrange: ["岡本健介"],
    direct: ["柳沢翔"]
  },
  performers: {
    center: [
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami
    ],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songRomanticIkayaki: ISong = {
  title: "ロマンティックいか焼き",
  single: "君の名は希望",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["横健介"],
    arrange: ["重永亮介"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songDekopin: ISong = {
  title: "でこぴん",
  single: "君の名は希望",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: ["中村太洸"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songPsychokineses: ISong = {
  title: "サイコキネシスの可能性",
  single: "君の名は希望",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中土智博"],
    arrange: ["中土智博"],
    direct: ["中村太洸"]
  },
  performers: {
    center: [
      MemberNames.SakuraiReika,
      MemberNames.NishinoNanase
    ],
    fukujin: undefined,
    solo: undefined,
    unit: ""
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 4th single

const songSeifukunomannequin: ISong = {
  title: "制服のマネキン",
  single: "制服のマネキン",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["百石元"],
    direct: ["池田一真"]
  },
  performers: {
    center: [
      MemberNames.IkomaRina
    ],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami
    ],
    secondRow: [
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
      MemberNames.SakuraiReika,
      MemberNames.AkimotoManatsu
    ],
    thirdRow: [
      MemberNames.NoujouAmi,
      MemberNames.SaitouAsuka,
      MemberNames.WakatsukiYumi,
      MemberNames.InoueSayuri,
      MemberNames.FukagawaMai,
      MemberNames.IchikiRena,
      MemberNames.NishinoNanase,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songHarunomelody: ISong = {
  title: "春のメロディー",
  single: "制服のマネキン",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["フジノタカフミ"],
    arrange: ["湯浅篤"],
    direct: ["柿本ケンサク"]
  },
  performers: {
    center: [MemberNames.NakadaKana],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.SaitouYuuri,
      MemberNames.NakadaKana,
      MemberNames.EtouMisa
    ],
    secondRow: [
      MemberNames.ItouMarika,
      MemberNames.KawagoHina,
      MemberNames.HiguchiHina,
      MemberNames.ItouNene
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.NakamotoHimeka,
      MemberNames.KashiwaYukina,
      MemberNames.HatanakaSeira,
      MemberNames.NagashimaSeira
    ],
    fourthRow: [
      MemberNames.MiyazawaSeira,
      MemberNames.YamatoRina,
      MemberNames.AndouMikumo,
      MemberNames.WadaMaaya,
      MemberNames.SaitouChiharu
    ]
  }
};

const songYubiboenkyo: ISong = {
  title: "指望遠鏡",
  single: "制服のマネキン",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["北室龍馬"],
    arrange: ["木村有希"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [
      MemberNames.IkomaRina
    ],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami
    ],
    secondRow: [
      MemberNames.ShiraishiMai,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
      MemberNames.SakuraiReika,
      MemberNames.AkimotoManatsu
    ],
    thirdRow: [
      MemberNames.NoujouAmi,
      MemberNames.SaitouAsuka,
      MemberNames.WakatsukiYumi,
      MemberNames.InoueSayuri,
      MemberNames.FukagawaMai,
      MemberNames.IchikiRena,
      MemberNames.NishinoNanase,
      MemberNames.TakayamaKazumi
    ],
    fourthRow: []
  }
};

const songYasashisanaramaniatteru: ISong = {
  title: "やさしさなら間に合ってる",
  single: "制服のマネキン",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["松田純一"],
    arrange: ["清水武仁"],
    direct: []
  },
  performers: {
    center: [
      MemberNames.TakayamaKazumi,
      MemberNames.NoujouAmi
    ],
    fukujin: undefined,
    solo: undefined,
    unit: ""
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKokojanaidokoka: ISong = {
  title: "ここじゃないどこか",
  single: "制服のマネキン",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["大藤史"],
    arrange: ["京田誠一"],
    direct: ["岡川太郎"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songShibuyablues: ISong = {
  title: "渋谷ブルース",
  single: "制服のマネキン",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["佐藤嘉風"],
    arrange: ["佐藤嘉風"],
    direct: ["丸山健志"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 3rd single

const songHashirebicycle: ISong = {
  title: "走れ!Bicycle",
  single: "走れ!Bicycle",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Shusui", "伊藤涼", "木村篤史", "ヒロイズム"],
    arrange: ["湯浅篤"],
    direct: ["中島哲也"]
  },
  performers: {
    center: [
      MemberNames.IkomaRina
    ],
    fukujin: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
      MemberNames.HashimotoNanami,
      MemberNames.ShiraishiMai,
      MemberNames.MatsumuraSayuri,
      MemberNames.NishinoNanase,
    ],
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami,
      MemberNames.SakuraiReika
    ],
    secondRow: [
      MemberNames.NakadaKana,
      MemberNames.HashimotoNanami,
      MemberNames.ShiraishiMai,
      MemberNames.MatsumuraSayuri,
      MemberNames.NishinoNanase,
      MemberNames.TakayamaKazumi
    ],
    thirdRow: [
      MemberNames.SaitouYuuri,
      MemberNames.WakatsukiYumi,
      MemberNames.InoueSayuri,
      MemberNames.IchikiRena,
      MemberNames.ItouMarika,
      MemberNames.FukagawaMai,
    ],
    fourthRow: []
  }
};

const songNamidagamada: ISong = {
  title: "涙がまだ悲しみだった頃",
  single: "走れ!Bicycle",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["内田智之"],
    arrange: ["TATOO"],
    direct: ["関和亮"]
  },
  performers: {
    center: [MemberNames.ItouNene],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.HiguchiHina,
      MemberNames.ItouNene,
      MemberNames.SaitouAsuka
    ],
    secondRow: [
      MemberNames.EtouMisa,
      MemberNames.NoujouAmi,
      MemberNames.KawagoHina
    ],
    thirdRow: [
      MemberNames.KawamuraMahiro,
      MemberNames.KashiwaYukina,
      MemberNames.YamatoRina,
      MemberNames.NagashimaSeira
    ],
    fourthRow: [
      MemberNames.MiyazawaSeira,
      MemberNames.AndouMikumo,
      MemberNames.HatanakaSeira,
      MemberNames.IwaseYumiko,
      MemberNames.WadaMaaya,
      MemberNames.NakamotoHimeka,
      MemberNames.SaitouChiharu
    ]
  }
};

const songSekkachinakatatsumuri: ISong = {
  title: "せっかちなかたつむり",
  single: "走れ!Bicycle",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山本加津彦"],
    arrange: ["湯浅篤"],
    direct: ["中村太洸"]
  },
  performers: {
    center: [MemberNames.MatsumuraSayuri],
    fukujin: undefined,
    solo: undefined,
    unit: ""
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
    fourthRow: []
  }
};

const songHitohanazehashirunoka: ISong = {
  title: "人はなぜ走るのか?",
  single: "走れ!Bicycle",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["キタムラタケシ", "田上陽一"],
    arrange: ["田上陽一"],
    direct: ["久保茂昭"]
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songOtogadenaiguitar: ISong = {
  title: "音が出ないギター",
  single: "走れ!Bicycle",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Jam9", "ArmySlick"],
    arrange: ["シライシ紗トリ"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKairyunoshimayo: ISong = {
  title: "海流の島よ",
  single: "走れ!Bicycle",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["京田誠一"],
    direct: []
  },
  performers: {
    center: [MemberNames.SaitouAsuka],
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.AndouMikumo,
      MemberNames.KawagoHina,
      MemberNames.SaitouAsuka,
      MemberNames.NakamotoHimeka,
      MemberNames.HatanakaSeira,
      MemberNames.HiguchiHina,
      MemberNames.WadaMaaya
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 2nd single

const songOideshampoo: ISong = {
  title: "おいでシャンプー",
  single: "おいでシャンプー",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小田切大"],
    arrange: ["TATOO"],
    direct: ["高橋栄樹"]
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.SakuraiReika,
      MemberNames.IkomaRina,
      MemberNames.NakadaKana
    ],
    secondRow: [
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi
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
      MemberNames.MiyazawaSeira
    ],
    fourthRow: []
  }
};

const songOkaminikuchibuewo: ISong = {
  title: "狼に口笛を",
  single: "おいでシャンプー",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Akira Sunset"],
    arrange: ["シライシ紗トリ"],
    direct: ["福居英晃"]
  },
  performers: {
    center: [MemberNames.ItouMarika],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.FukagawaMai,
      MemberNames.ItouMarika,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [
      MemberNames.KawagoHina,
      MemberNames.KawamuraMahiro,
      MemberNames.SaitouChiharu,
      MemberNames.NagashimaSeira
    ],
    thirdRow: [
      MemberNames.EtouMisa,
      MemberNames.ItouNene,
      MemberNames.SaitouAsuka,
      MemberNames.NakamotoHimeka,
      MemberNames.HiguchiHina
    ],
    fourthRow: [
      MemberNames.KashiwaYukina,
      MemberNames.AndouMikumo,
      MemberNames.YamatoRina,
      MemberNames.NoujouAmi,
      MemberNames.WadaMaaya
    ]
  }
};

const songKokoronokusuri: ISong = {
  title: "心の薬",
  single: "おいでシャンプー",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["MIKOTO"],
    arrange: ["木之下慶行"],
    direct: []
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.YamatoRina
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songGuzenwoiiwakenishite: ISong = {
  title: "偶然を言い訳にして",
  single: "おいでシャンプー",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["坂部大介"],
    arrange: ["中土智博"],
    direct: ["中村太洸"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songMizutamamoyo: ISong = {
  title: "水玉模様",
  single: "おいでシャンプー",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["若田部誠"],
    arrange: ["若田部誠"],
    direct: ["丸山健志"]
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.IkomaRina,
    unit: undefined
  },
  formations: {
    firstRow: [MemberNames.IkomaRina],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songHouse: ISong = {
  title: "ハウス!",
  single: "おいでシャンプー",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["y@suo ohtani"],
    arrange: ["y@suo ohtani"],
    direct: []
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 1st single

const songGurugurucurtain: ISong = {
  title: "ぐるぐるカーテン",
  single: "ぐるぐるカーテン",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Title,
  creators: {
    lyrics: ["秋元康"],
    compose: ["黒須克彦"],
    arrange: ["湯浅篤"],
    direct: ["操上和美"]
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: FukujinType.RowOneTwo,
    solo: undefined,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami
    ],
    secondRow: [
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi
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
      MemberNames.IchikiRena
    ],
    fourthRow: []
  }
};

const songHidarimurenoyuki: ISong = {
  title: "左胸の勇気",
  single: "ぐるぐるカーテン",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["小内喜文"],
    arrange: ["佐々木裕"],
    direct: []
  },
  performers: {
    center: [MemberNames.HatanakaSeira],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
    fourthRow: []
  }
};

const songNogizakanouta: ISong = {
  title: "乃木坂の詩",
  single: "ぐるぐるカーテン",
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["井手コウジ"],
    arrange: ["井手コウジ"],
    direct: ["南流石"]
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WadaMaaya
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songAitakattakamoshirenai: ISong = {
  title: "会いたかったかもしれない",
  single: "ぐるぐるカーテン",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["BOUNCEBACK", "MIKOTO"],
    arrange: ["野中雄一"],
    direct: ["久保茂昭"]
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.MiyazawaSeira
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songUshinaitakunaikara: ISong = {
  title: "失いたくないから",
  single: "ぐるぐるカーテン",
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["蛯原ランス"],
    arrange: ["塩川満己"],
    direct: ["丸山健志"]
  },
  performers: {
    center: [
      MemberNames.IkomaRina,
      MemberNames.IkutaErika
    ],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songShiroikumoninotte: ISong = {
  title: "白い雲にのって",
  single: "ぐるぐるカーテン",
  albums: [],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["太田美知彦"],
    arrange: ["太田美知彦"],
    direct: []
  },
  performers: {
    center: [MemberNames.IkomaRina],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// ALBUM SONGS
// NOTE: Songs below are album-only songs (which means
// the songs didn't appear in singles).

// 4th album songs

// 3rd album songs

const songSkydiving: ISong = {
  title: "スカイダイビング",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["菅井達司"],
    arrange: ["菅井達司"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKimigaaoidekureta: ISong = {
  title: "君が扇いでくれた",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中山聡", "足立優"],
    arrange: ["野中\"まさ\"雄一"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WadaMaaya
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songOmoidefirst: ISong = {
  title: "思い出ファースト",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.ThirdGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ミサマサカリヲ"],
    arrange: ["遠藤ナオキ"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.YodaYuuki
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songSetteiondo: ISong = {
  title: "設定温度",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["石井亮輔"],
    arrange: ["APAZZI"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
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
      MemberNames.WadaMaaya
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
      MemberNames.YodaYuuki
    ],
    fourthRow: []
  }
};

const songRewindanohi: ISong = {
  title: "Rewindあの日",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["藤木テツ"],
    arrange: ["佐々木裕"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.SakuraiReika,
      MemberNames.NishinoNanase,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songGomensmoothie: ISong = {
  title: "ごめんね、スムージー",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["YASUSHI WATANABE"],
    arrange: ["YASUSHI WATANABE"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri,
      MemberNames.NakamotoHimeka
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songMinikuiwatashi: ISong = {
  title: "醜い私",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["外山大輔"],
    arrange: ["APAZZI"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.SaitouYuuri,
      MemberNames.ShinuchiMai
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKataikaranoyoni: ISong = {
  title: "硬い殻のように抱きしめたい",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "三谷秀甫", "谷地学"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.SaitouAsuka,
    unit: undefined
  },
  formations: {
    firstRow: [MemberNames.SaitouAsuka],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songMangetsugakieta: ISong = {
  title: "満月が消えた",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["SaSA"],
    arrange: ["SaSA"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.IkutaErika,
      MemberNames.IkomaRina,
      MemberNames.HoshinoMinami
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songWatabokori: ISong = {
  title: "ワタボコリ",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["ハサミマン"],
    arrange: ["ハサミマン"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.KitanoHinako,
      MemberNames.TeradaRanze,
      MemberNames.HoriMiona
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songRyuseidiscotic: ISong = {
  title: "流星ディスコティック",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Masayoshi Kawabata"],
    arrange: ["Masayoshi Kawabata"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.ShiraishiMai,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songBokyakutobigaku: ISong = {
  title: "忘却と美学",
  single: undefined,
  albums: ["生まれてから初めて見た夢"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["早川博隆"],
    arrange: ["早川博隆"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.TakayamaKazumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 2nd album songs

const songKikkake: ISong = {
  title: "きっかけ",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songTaiyonikudokarete: ISong = {
  title: "太陽に口説かれて",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["フジノタカフミ"],
    arrange: ["フジノタカフミ"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songYokubonoReincarnation: ISong = {
  title: "欲望のリインカーネーション",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康", "本山清治"],
    compose: ["渡辺未来"],
    arrange: ["渡辺未来"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WadaMaaya
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKukikan: ISong = {
  title: "空気感",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["DR QUEENBEE"],
    arrange: ["DR QUEENBEE"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKogoseikibo: ISong = {
  title: "光合成希望",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["吉田博"],
    arrange: ["野中\"まさ\"雄一"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.NishinoNanase,
    unit: undefined
  },
  formations: {
    firstRow: [
      MemberNames.NishinoNanase
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songThreefoldchoice: ISong = {
  title: "Threefold choice",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["古川貴浩"],
    arrange: ["古川貴浩"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songTeitaionnokisu: ISong = {
  title: "低体温のキス",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["中谷あつこ"],
    arrange: ["田上陽一"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.IkutaErika,
    unit: undefined
  },
  formations: {
    firstRow: [MemberNames.IkutaErika],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songShitsurenshitara: ISong = {
  title: "失恋したら、顔を洗え!",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["さいとうくにあき"],
    arrange: ["内田充"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "乃木團"
  },
  formations: {
    firstRow: [
      MemberNames.NakamotoHimeka,
      MemberNames.NoujouAmi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKakigorinokataomoi: ISong = {
  title: "かき氷の片想い",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.SecondGeneration,
  creators: {
    lyrics: ["秋元康"],
    compose: ["白須賀悟"],
    arrange: ["白須賀悟"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WatanabeMiria
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKanjorokugosen: ISong = {
  title: "環状六号線",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["サイトウリョースケ"],
    arrange: ["サイトウリョースケ"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "犬メン"
  },
  formations: {
    firstRow: [
      MemberNames.IkomaRina,
      MemberNames.ItouMarika,
      MemberNames.InoueSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKuchiyakusoku: ISong = {
  title: "口約束",
  single: undefined,
  albums: ["それぞれの椅子"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["Amber"],
    arrange: ["若田部誠"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: "女子校カルテット"
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.SakuraiReika,
      MemberNames.NakadaKana,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

// 1st album songs

const songDarekahamikata: ISong = {
  title: "誰かは味方",
  single: undefined,
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["宮坂聡彦"],
    arrange: ["佐々木裕"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.EtouMisa,
      MemberNames.SakuraiReika,
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKakumeinouma: ISong = {
  title: "革命の馬",
  single: undefined,
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["伊勢佳史"],
    arrange: ["伊勢佳史"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.AkimotoManatsu,
      MemberNames.ShiraishiMai,
      MemberNames.TakayamaKazumi,
      MemberNames.HashimotoNanami,
      MemberNames.FukagawaMai,
      MemberNames.MatsumuraSayuri
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songBokugairubasho: ISong = {
  title: "僕がいる場所",
  single: undefined,
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Coupling,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: []
  },
  performers: {
    center: [MemberNames.IkutaErika],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WakatsukiYumi
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songAnatanotamenihikitai: ISong = {
  title: "あなたのために弾きたい",
  single: undefined,
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["近藤圭一"],
    arrange: ["樫原伸彦"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.IkutaErika,
    unit: undefined
  },
  formations: {
    firstRow: [MemberNames.IkutaErika],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songKeishasuru: ISong = {
  title: "傾斜する",
  single: undefined,
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["須藤哲平", "長谷川湊"],
    arrange: ["佐々木裕"],
    direct: []
  },
  performers: {
    center: ["kojimaharuna"],
    fukujin: undefined,
    solo: undefined,
    unit: "こじ坂46"
  },
  formations: {
    firstRow: [
      "kojimaharuna",
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
      MemberNames.WadaMaaya
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songNazonorakugaki: ISong = {
  title: "なぞの落書き",
  single: undefined,
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Unit,
  creators: {
    lyrics: ["秋元康"],
    compose: ["片桐周太郎"],
    arrange: ["野中\"まさ\"雄一"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: undefined,
    unit: ""
  },
  formations: {
    firstRow: [
      MemberNames.SaitouAsuka,
      MemberNames.HoshinoMinami,
      MemberNames.HoriMiona
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songJiyunokanata: ISong = {
  title: "自由の彼方",
  single: undefined,
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Under,
  creators: {
    lyrics: ["秋元康"],
    compose: ["山田智和"],
    arrange: ["住谷翔平"],
    direct: []
  },
  performers: {
    center: [MemberNames.InoueSayuri],
    fukujin: undefined,
    solo: undefined,
    unit: undefined
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
      MemberNames.WadaMaaya
    ],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

const songHitoriyogari: ISong = {
  title: "ひとりよがり",
  single: undefined,
  albums: ["透明な色"],
  artwork: "path",
  musicVideo: "path",
  type: SongType.Solo,
  creators: {
    lyrics: ["秋元康"],
    compose: ["杉山勝彦"],
    arrange: ["杉山勝彦", "有木竜郎"],
    direct: []
  },
  performers: {
    center: undefined,
    fukujin: undefined,
    solo: MemberNames.NishinoNanase,
    unit: undefined
  },
  formations: {
    firstRow: [MemberNames.NishinoNanase],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  }
};

export const songs = {
  "帰り道は遠回りしたくなる": songKaerimichi,
  "ジコチューで行こう!": songJikochu,
  "シンクロニシティ": songSyncronicity,
  "いつかできるから今日できる": songItsukadekirukara,
  "逃げ水": songNigemizu,
  "インフルエンサー": songInfluencer,
  "サヨナラの意味": songSayonaranoimi,
  "裸足でSummer": songHadashidesummer,
  "ハルジオンが咲く頃": songHarujion,
  "今、話したい誰かがいる": songHanashitaidarekagairu,
  "太陽ノック": songTaiyoknock,
  "命は美しい": songInochihautsukushii,
  "何度目の青空か?": songNandomenoaozoraka,
  "夏のFree&Easy": songNatsunofreeandeasy,
  "気づいたら片想い": songKizuitarakataomoi,
  "バレッタ": songValletta,
  "ガールズルール": songGirlsrule,
  "君の名は希望": songKiminonahakibo,
  "制服のマネキン": songSeifukunomannequin,
  "走れ!Bicycle": songHashirebicycle,
  "おいでシャンプー": songOideshampoo,
  "ぐるぐるカーテン": songGurugurucurtain,
  "日常": songNichijo,
  "三角の空き地": songSankakunoakichi,
  "新しい世界": songAtarashiisekai,
  "My rule": songMyrule,
  "アンダー": songUnder,
  "風船は生きている": songFusenhaikiteiru,
  "ブランコ": songBulanko,
  "シークレットグラフィティー": songSecretGravity,
  "不等号": songFutogo,
  "嫉妬の権利": songShittonokenri,
  "別れ際、もっと好きになる": songWakaregiwa,
  "君は僕と会わない方がよかったのかな": songKimihabokuto,
  "あの日 僕は咄嗟に嘘をついた": songAnohibokuha,
  "ここにいる理由": songKokoniiruriyu,
  "生まれたままで": songUmaretamamade,
  "初恋の人を今でも": songHatsukoinohito,
  "扇風機": songSenpuki,
  "13日の金曜日": songjusannichinokiyobi,
  "春のメロディー": songHarunomelody,
  "涙がまだ悲しみだった頃": songNamidagamada,
  "狼に口笛を": songOkaminikuchibuewo,
  "左胸の勇気": songHidarimurenoyuki,
  "キャラバンは眠らない": songKyaraban,
  "つづく": songTsuduku,
  "告白の順番": songKokuhakunojunban,
  "ショパンの嘘つき": songChopinnousotsuki,
  "知りたいこと": songShiritaikoto,
  "空扉": songSoratobira,
  "自分じゃない感じ": songJibunjanaikanji,
  "心のモノローグ": songKokoronomonologue,
  "地球が丸いなら": songChikyugamaruinara,
  "あんなに好きだったのに・・・": songAnnanisukidattanoni,
  "Against": songAgainst,
  "雲になればいい": songKumoninarebaii,
  "スカウトマン": songScoutman,
  "トキトキメキメキ": songTokitokimekimeki,
  "言霊砲": songKotodamaho,
  "不眠症": songFumensho,
  "まあいいか?": songMaaiika,
  "失恋お掃除人": songShitsurenosojinin,
  "僕の衝動": songBokunoshodo,
  "新しい花粉 ~ミュージカル「見知らぬ世界」より~": songAtarashiikafun,
  "女は一人じゃ眠れない": songOnnahahitorija,
  "ひと夏の長さより…": songHitonatsu,
  "泣いたっていいじゃないか?": songNaidatteii,
  "ライブ神": songLiveshin,
  "未来の答え": songMirainokotae,
  "人生を考えたくなる": songJinseiwokangae,
  "意外BREAK?": songIgaibreak,
  "Another Ghost": songAnotherghost,
  "三番目の風": songSanbanmenokaze,
  "当たり障りのない話": songAtarisawarinonai,
  "孤独な青空": songKodokunaaozora,
  "あの教室": songAnokyoshitsu,
  "2度目のキスから": songNidomenokisukara,
  "君に贈る花がない": songKiminiokuruhana,
  "ないものねだり": songNaimononetari,
  "僕だけの光": songBokudakenohikari,
  "オフショアガール": songOffshoregirl,
  "命の真実 ミュージカル「林檎売りとカメムシ」": songInochinoshinjitsu,
  "白米様": songHakumaisama,
  "行くあてのない僕たち": songIkuatenonaibokutachi,
  "遥かなるブータン": songHarukanarubhutan,
  "強がる蕾": songTsuyogarutsubomi,
  "急斜面": songKyushamen,
  "釣り堀": songTsuribori,
  "憂鬱と風船ガム": songYuutsutofusengamu,
  "ポピパッパパー": songPopipappapa,
  "大人への近道": songOtonahenochikamichi,
  "悲しみの忘れ方": songKanashiminowasurekata,
  "隙間": songSukima,
  "もう少しの夢": songMosukoshinoyumewo,
  "魚たちのLOVE SONG": songSakanatachinolovesong,
  "無表情": songMuhyojo,
  "羽根の記憶": songHanenokioku,
  "制服を脱いでサヨナラを…": songSeifukuwonuide,
  "あらかじめ語られるロマンス": songArakajimeromance,
  "立ち直り中": songTachinaorichu,
  "ごめんね ずっと…": songGomennezutto,
  "ボーダー": songBorder,
  "遠回りの愛情": songTomawarinoaijo,
  "転がった鐘を鳴らせ!": songKorogattakanewonarase,
  "私、起きる。": songWatashiokiru,
  "Tender days": songTenderdays,
  "何もできずにそばにいる": songNanimodekizuni,
  "その先の出口!": songSonosakinodeguchi,
  "無口なライオン": songMukuchinalion,
  "僕が行かなきゃ誰が行くんだ?": songBokugaikanakya,
  "ロマンスのスタート": songRomancenostart,
  "吐息のメソッド": songToikimethod,
  "孤独兄弟": songKodokukyodai,
  "ダンケシェーン": songDankeschon,
  "月の大きさ": songTsukinookisa,
  "私のために 誰かのために": songWatashinotameni,
  "そんなバカな…": songSonnabakana,
  "やさしさとは": songYasashisatoha,
  "世界で一番 孤独なLover": songSekaideichiban,
  "コウモリよ": songKomoriyo,
  "他の星から": songHokanohoshikara,
  "人間という楽器": sonNingentoiugaki,
  "シャキイズム": songShakism,
  "ロマンティックいか焼き": songRomanticIkayaki,
  "でこぴん": songDekopin,
  "サイコキネシスの可能性": songPsychokineses,
  "指望遠鏡": songYubiboenkyo,
  "やさしさなら間に合ってる": songYasashisanaramaniatteru,
  "ここじゃないどこか": songKokojanaidokoka,
  "渋谷ブルース": songShibuyablues,
  "せっかちなかたつむり": songSekkachinakatatsumuri,
  "人はなぜ走るのか?": songHitohanazehashirunoka,
  "音が出ないギター": songOtogadenaiguitar,
  "海流の島よ": songKairyunoshimayo,
  "心の薬": songKokoronokusuri,
  "偶然を言い訳にして": songGuzenwoiiwakenishite,
  "水玉模様": songMizutamamoyo,
  "ハウス!": songHouse,
  "乃木坂の詩": songNogizakanouta,
  "会いたかったかもしれない": songAitakattakamoshirenai,
  "失いたくないから": songUshinaitakunaikara,
  "白い雲にのって": songShiroikumoninotte,
  "誰かは味方": songDarekahamikata,
  "革命の馬": songKakumeinouma,
  "僕がいる場所": songBokugairubasho,
  "あなたのために弾きたい": songAnatanotamenihikitai,
  "傾斜する": songKeishasuru,
  "なぞの落書き": songNazonorakugaki,
  "自由の彼方": songJiyunokanata,
  "ひとりよがり": songHitoriyogari,
  "きっかけ": songKikkake,
  "太陽に口説かれて": songTaiyonikudokarete,
  "欲望のリインカーネーション": songYokubonoReincarnation,
  "空気感": songKukikan,
  "光合成希望": songKogoseikibo,
  "Threefold choice": songThreefoldchoice,
  "低体温のキス": songTeitaionnokisu,
  "失恋したら、顔を洗え!": songShitsurenshitara,
  "かき氷の片想い": songKakigorinokataomoi,
  "環状六号線": songKanjorokugosen,
  "口約束": songKuchiyakusoku,
  "スカイダイビング": songSkydiving,
  "君が扇いでくれた": songKimigaaoidekureta,
  "思い出ファースト": songOmoidefirst,
  "設定温度": songSetteiondo,
  "Rewindあの日": songRewindanohi,
  "ごめんね、スムージー": songGomensmoothie,
  "醜い私": songMinikuiwatashi,
  "硬い殻のように抱きしめたい": songKataikaranoyoni,
  "満月が消えた": songMangetsugakieta,
  "ワタボコリ": songWatabokori,
  "流星ディスコティック": songRyuseidiscotic,
  "忘却と美学": songBokyakutobigaku
};
