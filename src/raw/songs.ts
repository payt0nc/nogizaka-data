import { FukujinType, MemberNames, SongType } from "../common/types";
import { ISong } from "../types/song";

// 22nd single

const songKaerimichi: ISong = {
  title: "帰り道は遠回りしたくなる",
  artwork: "path",
  single: "帰り道は遠回りしたくなる",
  albums: [],
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
  artwork: "path",
  single: "帰り道は遠回りしたくなる",
  albums: [],
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
  artwork: "path",
  single: "帰り道は遠回りしたくなる",
  albums: [],
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
  artwork: "path",
  single: "帰り道は遠回りしたくなる",
  albums: [],
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
  artwork: "path",
  single: "帰り道は遠回りしたくなる",
  albums: [],
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
  artwork: "path",
  single: "帰り道は遠回りしたくなる",
  albums: [],
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
  artwork: "path",
  single: "帰り道は遠回りしたくなる",
  albums: [],
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
  artwork: "path",
  single: "ジコチューで行こう!",
  albums: [],
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
  artwork: "path",
  single: "ジコチューで行こう!",
  albums: [],
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
  artwork: "path",
  single: "ジコチューで行こう!",
  albums: [],
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
  artwork: "path",
  single: "ジコチューで行こう!",
  albums: [],
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
  artwork: "path",
  single: "ジコチューで行こう!",
  albums: [],
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
  artwork: "path",
  single: "ジコチューで行こう!",
  albums: [],
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
  artwork: "path",
  single: "ジコチューで行こう!",
  albums: [],
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
  artwork: "path",
  single: "シンクロニシティ",
  albums: [],
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
  artwork: "path",
  single: "シンクロニシティ",
  albums: [],
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
  artwork: "path",
  single: "シンクロニシティ",
  albums: [],
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
  artwork: "path",
  single: "シンクロニシティ",
  albums: [],
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
  artwork: "path",
  single: "シンクロニシティ",
  albums: [],
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
  artwork: "path",
  single: "シンクロニシティ",
  albums: [],
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
  artwork: "path",
  single: "シンクロニシティ",
  albums: [],
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
  artwork: "path",
  single: "いつかできるから今日できる",
  albums: [],
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
  artwork: "path",
  single: "いつかできるから今日できる",
  albums: [],
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
  artwork: "path",
  single: "いつかできるから今日できる",
  albums: [],
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
  artwork: "path",
  single: "いつかできるから今日できる",
  albums: [],
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
  artwork: "path",
  single: "いつかできるから今日できる",
  albums: [],
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
  artwork: "path",
  single: "いつかできるから今日できる",
  albums: [],
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
  artwork: "path",
  single: "いつかできるから今日できる",
  albums: [],
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
  artwork: "path",
  single: "逃げ水",
  albums: [],
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
  artwork: "path",
  single: "逃げ水",
  albums: [],
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
  artwork: "path",
  single: "逃げ水",
  albums: [],
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
  artwork: "path",
  single: "逃げ水",
  albums: [],
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
  artwork: "path",
  single: "逃げ水",
  albums: [],
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
  artwork: "path",
  single: "逃げ水",
  albums: [],
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
  artwork: "path",
  single: "逃げ水",
  albums: [],
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
  artwork: "path",
  single: "インフルエンサー",
  albums: [],
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
  artwork: "path",
  single: "インフルエンサー",
  albums: [],
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
  artwork: "path",
  single: "インフルエンサー",
  albums: [],
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
  artwork: "path",
  single: "インフルエンサー",
  albums: [],
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
  artwork: "path",
  single: "インフルエンサー",
  albums: [],
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
  artwork: "path",
  single: "インフルエンサー",
  albums: [],
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
  artwork: "path",
  single: "インフルエンサー",
  albums: [],
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
  artwork: "path",
  single: "サヨナラの意味",
  albums: [],
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
  artwork: "path",
  single: "サヨナラの意味",
  albums: [],
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
  artwork: "path",
  single: "サヨナラの意味",
  albums: [],
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
  artwork: "path",
  single: "サヨナラの意味",
  albums: [],
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
  artwork: "path",
  single: "サヨナラの意味",
  albums: [],
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
  artwork: "path",
  single: "サヨナラの意味",
  albums: [],
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
  artwork: "path",
  single: "サヨナラの意味",
  albums: [],
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
  artwork: "path",
  single: "裸足でSummer",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "裸足でSummer",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 14th single

const songHarujion: ISong = {
  title: "ハルジオンが咲く頃",
  artwork: "path",
  single: "ハルジオンが咲く頃",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "ハルジオンが咲く頃",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 13th single

const songHanashitaidarekagairu: ISong = {
  title: "今、話したい誰かがいる",
  artwork: "path",
  single: "今、話したい誰かがいる",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "今、話したい誰かがいる",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 12th single

const songTaiyoknock: ISong = {
  title: "太陽ノック",
  artwork: "path",
  single: "太陽ノック",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "太陽ノック",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 11th single

const songInochihautsukushii: ISong = {
  title: "命は美しい",
  artwork: "path",
  single: "命は美しい",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "命は美しい",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 10th single

const songNandomenoaozoraka: ISong = {
  title: "何度目の青空か?",
  artwork: "path",
  single: "何度目の青空か?",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "何度目の青空か?",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 9th single

const songNatsunofreeandeasy: ISong = {
  title: "夏のFree&Easy",
  artwork: "path",
  single: "夏のFree&Easy",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "夏のFree&Easy",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 8th single

const songKizuitarakataomoi: ISong = {
  title: "気づいたら片想い",
  artwork: "path",
  single: "気づいたら片想い",
  albums: [],
  type: SongType.Title,
  creators: undefined,
  performers: {
    center: [
      MemberNames.NishinoNanase
    ],
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
  artwork: "path",
  single: "気づいたら片想い",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 7th single

const songValletta: ISong = {
  title: "バレッタ",
  artwork: "path",
  single: "バレッタ",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "バレッタ",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 6th single

const songGirlsrule: ISong = {
  title: "ガールズルール",
  artwork: "path",
  single: "ガールズルール",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "ガールズルール",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 5th single

const songKiminonahakibo: ISong = {
  title: "君の名は希望",
  artwork: "path",
  single: "君の名は希望",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "君の名は希望",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 4th single

const songSeifukunomannequin: ISong = {
  title: "制服のマネキン",
  artwork: "path",
  single: "制服のマネキン",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "制服のマネキン",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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
// 3rd single

const songHashirebicycle: ISong = {
  title: "走れ!Bicycle",
  artwork: "path",
  single: "走れ!Bicycle",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "走れ!Bicycle",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 2nd single

const songOideshampoo: ISong = {
  title: "おいでシャンプー",
  artwork: "path",
  single: "おいでシャンプー",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "おいでシャンプー",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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

// 1st single

const songGurugurucurtain: ISong = {
  title: "ぐるぐるカーテン",
  artwork: "path",
  single: "ぐるぐるカーテン",
  albums: [],
  type: SongType.Title,
  creators: undefined,
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
  artwork: "path",
  single: "ぐるぐるカーテン",
  albums: [],
  type: SongType.Under,
  creators: undefined,
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
  "ないものねだり": songNaimononetari
};
