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
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "キャラバンは眠らない",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "つづく",
      inType: CdType.A,
      type: SongType.Solo,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "日常",
      inType: CdType.B,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "告白の順番",
      inType: CdType.C,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "ショパンの嘘つき",
      inType: CdType.D,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 7,
      title: "知りたいこと",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: []
  }
};

const jikochu: ISingle = {
  title: "ジコチューで行こう!",
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
      title: "ジコチューで行こう!",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "空扉",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "三角の空き地",
      inType: CdType.A,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "自分じゃない感じ",
      inType: CdType.B,
      type: SongType.ThirdGeneration,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "心のモノローグ",
      inType: CdType.C,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "地球が丸いなら",
      inType: CdType.D,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 7,
      title: "あんなに好きだったのに・・・",
      inType: CdType.T,
      type: SongType.Coupling,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KuboShiori]
  }
};

const syncronicity: ISingle = {
  title: "シンクロニシティ",
  number: 20,
  release: "2018-04-25",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "シンクロニシティ",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "Against",
      inType: CdType.A,
      type: SongType.FirstGeneration,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "雲になればいい",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "新しい世界",
      inType: CdType.B,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "スカウトマン",
      inType: CdType.C,
      type: SongType.SecondGeneration,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "トキトキメキメキ",
      inType: CdType.D,
      type: SongType.ThirdGeneration,
      focusPerformers: undefined
    },
    {
      number: 7,
      title: "言霊砲",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KitanoHinako]
  }
};

const itsukadekirukara: ISingle = {
  title: "いつかできるから今日できる",
  number: 19,
  release: "2017-10-11",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "いつかできるから今日できる",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "不眠症",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "まあいいか?",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "失恋お掃除人",
      inType: CdType.B,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "My rule",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "僕の衝動",
      inType: CdType.D,
      type: SongType.ThirdGeneration,
      focusPerformers: undefined
    },
    {
      number: 7,
      title: "新しい花粉 ~ミュージカル「見知らぬ世界」より~",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
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
      MemberNames.YodaYuuki
    ],
    skips: []
  }
};

const nigemizu: ISingle = {
  title: "逃げ水",
  number: 18,
  release: "2017-08-09",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "逃げ水",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "女は一人じゃ眠れない",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "ひと夏の長さより…",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "泣いたっていいじゃないか?",
      inType: CdType.B,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "アンダー",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "ライブ神",
      inType: CdType.D,
      type: SongType.SecondGeneration,
      focusPerformers: undefined
    },
    {
      number: 7,
      title: "未来の答え",
      inType: CdType.T,
      type: SongType.ThirdGeneration,
      focusPerformers: undefined
    }
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
      MemberNames.YodaYuuki
    ],
    skips: []
  }
};

const influencer: ISingle = {
  title: "インフルエンサー",
  number: 17,
  release: "2017-03-22",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "インフルエンサー",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "人生を考えたくなる",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "意外BREAK?",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "Another Ghost",
      inType: CdType.B,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "風船は生きている",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "三番目の風",
      inType: CdType.D,
      type: SongType.ThirdGeneration,
      focusPerformers: undefined
    },
    {
      number: 7,
      title: "当たり障りのない話",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
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
      MemberNames.YodaYuuki
    ],
    skips: [MemberNames.NakamotoHimeka]
  }
};

const sayonaranoimi: ISingle = {
  title: "サヨナラの意味",
  number: 16,
  release: "2016-11-09",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "サヨナラの意味",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "孤独な青空",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "あの教室",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "ブランコ",
      inType: CdType.B,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "2度目のキスから",
      inType: CdType.C,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "君に贈る花がない",
      inType: CdType.D,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 7,
      title: "ないものねだり",
      inType: CdType.T,
      type: SongType.Solo,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: []
  }
};

const hadashidesummer: ISingle = {
  title: "裸足でSummer",
  number: 15,
  release: "2016-07-27",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "裸足でSummer",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "僕だけの光",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "オフショアガール",
      inType: CdType.A,
      type: SongType.Solo,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "命の真実 ミュージカル「林檎売りとカメムシ」",
      inType: CdType.B,
      type: SongType.Solo,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "白米様",
      inType: CdType.C,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "シークレットグラフィティー",
      inType: CdType.D,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 7,
      title: "行くあてのない僕たち",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: []
  }
};

const harujion: ISingle = {
  title: "ハルジオンが咲く頃",
  number: 14,
  release: "2016-03-23",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "ハルジオンが咲く頃",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "遥かなるブータン",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "強がる蕾",
      inType: CdType.A,
      type: SongType.Solo,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "急斜面",
      inType: CdType.B,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "釣り堀",
      inType: CdType.C,
      type: SongType.Solo,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "不等号",
      inType: CdType.D,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 7,
      title: "憂鬱と風船ガム",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: []
  }
};

const hanashitaidarekagairu: ISingle = {
  title: "今、話したい誰かがいる",
  number: 13,
  release: "2015-10-28",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "今、話したい誰かがいる",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "嫉妬の権利",
      inType: CdType.A,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "ポピパッパパー",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "大人への近道",
      inType: CdType.B,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "悲しみの忘れ方",
      inType: CdType.C,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "隙間",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: []
  }
};

const taiyoknock: ISingle = {
  title: "太陽ノック",
  number: 12,
  release: "2015-07-22",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "太陽ノック",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "もう少しの夢",
      inType: CdType.A,
      type: SongType.Solo,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "魚たちのLOVE SONG",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "無表情",
      inType: CdType.B,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "別れ際、もっと好きになる",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "羽根の記憶",
      inType: CdType.T,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 7,
      title: "制服を脱いでサヨナラを…",
      inType: CdType.L,
      type: SongType.Unit,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.YamazakiRena]
  }
};

const inochihautsukushii: ISingle = {
  title: "命は美しい",
  number: 11,
  release: "2015-03-18",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "命は美しい",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "あらかじめ語られるロマンス",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "立ち直り中",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "ごめんね ずっと…",
      inType: CdType.B,
      type: SongType.Solo,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "君は僕と会わない方がよかったのかな",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "ボーダー",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouJunna,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria
    ],
    skips: []
  }
};

const nandomenoaozoraka: ISingle = {
  title: "何度目の青空か?",
  number: 10,
  release: "2014-10-08",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "何度目の青空か?",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "遠回りの愛情",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "転がった鐘を鳴らせ!",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "私、起きる。",
      inType: CdType.B,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "あの日 僕は咄嗟に嘘をついた",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "Tender days",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [
      MemberNames.ItouJunna,
      MemberNames.SagaraIori,
      MemberNames.SasakiKotoko,
      MemberNames.SuzukiAyane,
      MemberNames.TeradaRanze,
      MemberNames.YamazakiRena,
      MemberNames.WatanabeMiria
    ],
    skips: []
  }
};

const natsunofreeandeasy: ISingle = {
  title: "夏のFree&Easy",
  number: 9,
  release: "2014-07-09",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "夏のFree&Easy",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "何もできずにそばにいる",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "その先の出口!",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "無口なライオン",
      inType: CdType.B,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "ここにいる理由",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "僕が行かなきゃ誰が行くんだ?",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
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
      MemberNames.YadaRisako
    ],
    skips: [MemberNames.IkutaErika]
  }
};

const kizuitarakataomoi: ISingle = {
  title: "気づいたら片想い",
  number: 8,
  release: "2014-04-02",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "気づいたら片想い",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "ロマンスのスタート",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "吐息のメソッド",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "孤独兄弟",
      inType: CdType.B,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "生まれたままで",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "ダンケシェーン",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
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
      MemberNames.YadaRisako
    ],
    skips: [MemberNames.SagaraIori]
  }
};

const valletta: ISingle = {
  title: "バレッタ",
  number: 7,
  release: "2013-11-27",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "バレッタ",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "月の大きさ",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "私のために 誰かのために",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "そんなバカな…",
      inType: CdType.B,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "初恋の人を今でも",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "やさしさとは",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
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
      MemberNames.NishikawaNanami
    ],
    skips: [
      MemberNames.IchikiRena,
      MemberNames.SagaraIori
    ]
  }
};

const girlsrule: ISingle = {
  title: "ガールズルール",
  number: 6,
  release: "2013-07-03",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "ガールズルール",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "世界で一番 孤独なLover",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "コウモリよ",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "扇風機",
      inType: CdType.B,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "他の星から",
      inType: CdType.C,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "人間という楽器",
      inType: CdType.T,
      type: SongType.FirstGeneration,
      focusPerformers: undefined
    }
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
      MemberNames.NishikawaNanami
    ],
    skips: [MemberNames.SagaraIori]
  }
};

const kiminonahakibo: ISingle = {
  title: "君の名は希望",
  number: 5,
  release: "2013-03-31",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "君の名は希望",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "シャキイズム",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "ロマンティックいか焼き",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "13日の金曜日",
      inType: CdType.B,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "でこぴん",
      inType: CdType.C,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "サイコキネシスの可能性",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: []
  }
};

const seifukunomannequin: ISingle = {
  title: "制服のマネキン",
  number: 4,
  release: "2012-12-19",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "制服のマネキン",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "指望遠鏡",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "やさしさなら間に合ってる",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "ここじゃないどこか",
      inType: CdType.B,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "春のメロディー",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "渋谷ブルース",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    },
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KashiwaYukina]
  }
};

const hashirebicycle: ISingle = {
  title: "走れ!Bicycle",
  number: 3,
  release: "2012-08-22",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "走れ!Bicycle",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "せっかちなかたつむり",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "涙がまだ悲しみだった頃",
      inType: CdType.A,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "人はなぜ走るのか?",
      inType: CdType.B,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "音が出ないギター",
      inType: CdType.C,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "海流の島よ",
      inType: CdType.T,
      type: SongType.Unit,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.KashiwaYukina]
  }
};

const oideshampoo: ISingle = {
  title: "おいでシャンプー",
  number: 2,
  release: "2012-05-02",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "おいでシャンプー",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "心の薬",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "偶然を言い訳にして",
      inType: CdType.A,
      type: SongType.Unit,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "水玉模様?",
      inType: CdType.B,
      type: SongType.Solo,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "狼に口笛を",
      inType: CdType.C,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "ハウス!",
      inType: CdType.T,
      type: SongType.Coupling,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.AkimotoManatsu]
  }
};

const gurugurucurtain: ISingle = {
  title: "ぐるぐるカーテン",
  number: 1,
  release: "2012-02-22",
  shopping: [
    {
      title: "iTunes",
      url: "url"
    }
  ],
  songs: [
    {
      number: 1,
      title: "ぐるぐるカーテン",
      inType: CdType.A,
      type: SongType.Title,
      focusPerformers: undefined
    },
    {
      number: 2,
      title: "左胸の勇気",
      inType: CdType.A,
      type: SongType.Under,
      focusPerformers: undefined
    },
    {
      number: 3,
      title: "会いたかったかもしれない",
      inType: CdType.A,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 4,
      title: "失いたくないから",
      inType: CdType.B,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 5,
      title: "白い雲にのって",
      inType: CdType.C,
      type: SongType.Coupling,
      focusPerformers: undefined
    },
    {
      number: 6,
      title: "乃木坂の詩",
      inType: CdType.T,
      type: SongType.Coupling,
      focusPerformers: undefined
    }
  ],
  behindPerformers: {
    trainees: [],
    skips: [MemberNames.AkimotoManatsu]
  }
};

export const singles = {
  "帰り道は遠回りしたくなる": kaerimichi,
  "ジコチューで行こう!": jikochu,
  "シンクロニシティ": syncronicity,
  "いつかできるから今日できる": itsukadekirukara,
  "逃げ水": nigemizu,
  "インフルエンサー": influencer,
  "サヨナラの意味": sayonaranoimi,
  "裸足でSummer": hadashidesummer,
  "ハルジオンが咲く頃": harujion,
  "今、話したい誰かがいる": hanashitaidarekagairu,
  "太陽ノック": taiyoknock,
  "命は美しい": inochihautsukushii,
  "何度目の青空か?": nandomenoaozoraka,
  "夏のFree&Easy": natsunofreeandeasy,
  "気づいたら片想い": kizuitarakataomoi,
  "バレッタ": valletta,
  "ガールズルール": girlsrule,
  "君の名は希望": kiminonahakibo,
  "制服のマネキン": seifukunomannequin,
  "走れ!Bicycle": hashirebicycle,
  "おいでシャンプー": oideshampoo,
  "ぐるぐるカーテン": gurugurucurtain
};
