import { MemberNames, UnitType } from "../common/constants";
import { IUnit } from "../types/IUnit";

const whiteHigh: IUnit = {
  name: "WHITE HIGH",
  members: [MemberNames.ShiraishiMai, MemberNames.TakayamaKazumi],
  type: UnitType.Unit,
  songs: [],
  description:
    "白石の「白」、高山の「高」をそれぞれ英語表記にした「WHITE」「HIGH」の組み合わせ"
};

const kodokukyoudai: IUnit = {
  name: "孤独兄弟",
  members: [MemberNames.ShiraishiMai, MemberNames.HashimotoNanami],
  type: UnitType.Unit,
  songs: [],
  description: ""
};

const karaageshimai: IUnit = {
  name: "からあげ姉妹",
  members: [MemberNames.IkutaErika, MemberNames.MatsumuraSayuri],
  type: UnitType.Unit,
  songs: [],
  description: ""
};

const cinqEtoiles: IUnit = {
  name: "サンクエトワール",
  members: [
    MemberNames.KitanoHinako,
    MemberNames.TeradaRanze,
    MemberNames.NakadaKana,
    MemberNames.NakamotoHimeka,
    MemberNames.HoriMiona
  ],
  type: UnitType.Unit,
  songs: [],
  description:
    "13thシングルのアンダーメンバーより選抜。「サンクエトワール」とはフランス語で「五つ星」という意味"
};

const joshikouQuartet: IUnit = {
  name: "女子校カルテット",
  members: [
    MemberNames.AkimotoManatsu,
    MemberNames.SakuraiReika,
    MemberNames.NakadaKana,
    MemberNames.WakatsukiYumi
  ],
  type: UnitType.Unit,
  songs: [],
  description: "女子高に通っていたメンバーで結成"
};

const aneosaka: IUnit = {
  name: "姉御坂",
  members: [
    MemberNames.EtouMisa,
    MemberNames.ShiraishiMai,
    MemberNames.TakayamaKazumi,
    MemberNames.MatsumuraSayuri
  ],
  type: UnitType.Unit,
  songs: [],
  description: "グループ1期生年長メンバーで結成"
};

const nasuka: IUnit = {
  name: "ナスカ",
  members: [
    MemberNames.ItouMarika,
    MemberNames.SuzukiAyane,
    MemberNames.WatanabeMiria,
  ],
  type: UnitType.Unit,
  songs: [],
  description: "ナナセの「ナ」、アスカの「ス」、マリカの「カ」の組み合わせ"
};

const kasumigusa: IUnit = {
  name: "かすみ草",
  members: [
    MemberNames.IkomaRina,
    MemberNames.InoueSayuri,
    MemberNames.HoshinoMinami,
    MemberNames.HoriMiona
  ],
  type: UnitType.Unit,
  songs: [],
  description: "かすみ草の花言葉は「名脇役」。主役を影で支える力のあるメンバーという意味が込められている"
};

const dontWorry: IUnit = {
  name: "藤桜梨",
  members: [
    MemberNames.IkutaErika,
    MemberNames.EtouMisa,
    MemberNames.SakuraiReika
  ],
  type: UnitType.Unit,
  songs: [],
  description: "ドンウォーリー"
};

const imoutozaka: IUnit = {
  name: "いもうと坂",
  members: [
    MemberNames.OozonoMomoko,
    MemberNames.KuboShiori,
    MemberNames.YamashitaMizuki,
    MemberNames.YodaYuuki
  ],
  type: UnitType.Unit,
  songs: [],
  description: ""
};

const sayuringoGundan: IUnit = {
  name: "さゆりんご軍団",
  members: [
    MemberNames.MatsumuraSayuri,
    MemberNames.ItouKarin,
    MemberNames.SasakiKotoko,
    MemberNames.TeradaRanze
  ],
  type: UnitType.Corp,
  songs: [],
  description: ""
};

const manatsusanRespectGundan: IUnit = {
  name: "真夏さんリスペクト軍団",
  members: [
    MemberNames.AkimotoManatsu,
    MemberNames.SagaraIori,
    MemberNames.SuzukiAyane,
    MemberNames.WatanabeMiria
  ],
  type: UnitType.Corp,
  songs: [],
  description: ""
};

const wakasamaGundan: IUnit = {
  name: "若様軍団",
  members: [
    MemberNames.WakatsukiYumi,
    MemberNames.UmezawaMinami,
    MemberNames.SakaguchiTamami,
    MemberNames.YamashitaMizuki
  ],
  type: UnitType.Corp,
  songs: [],
  description: "4名に共通する一文字「美」から若月が3期生を結集"
};

const inumen: IUnit = {
  name: "犬メン",
  members: [
    MemberNames.SakuraiReika,
    MemberNames.IkomaRina,
    MemberNames.ItouMarika,
    MemberNames.InoueSayuri,
    MemberNames.SaitouYuuri,
    MemberNames.ShinuchiMai,
    MemberNames.MatsumuraSayuri,
    MemberNames.WakatsukiYumi
  ],
  type: UnitType.Corp,
  songs: [],
  description: "舞台『すべての犬は天国へ行く』出演メンバーで構成"
};

const suika: IUnit = {
  name: "スイカ",
  members: [
    MemberNames.ItouKarin,
    MemberNames.ItouJunna,
    MemberNames.KawagoHina,
    MemberNames.SaitouYuuri,
    MemberNames.NishinoNanase
  ],
  type: UnitType.Corp,
  songs: [],
  description: ""
};

const tulip: IUnit = {
  name: "チューリップ",
  members: [
    MemberNames.NoujouAmi,
    MemberNames.IkutaErika,
    MemberNames.KawagoHina,
    MemberNames.KawamuraMahiro,
    MemberNames.SaitouChiharu,
    MemberNames.TakayamaKazumi,
    MemberNames.WadaMaaya,
  ],
  type: UnitType.Corp,
  songs: [],
  description: "母体は「チームD (ディズニー好き)」 (和田を除くメンバー)"
};

export const units = {
  "WHITE HIGH": whiteHigh,
  "孤独兄弟": kodokukyoudai,
  "からあげ姉妹": karaageshimai,
  "サンクエトワール": cinqEtoiles,
  "女子校カルテット": joshikouQuartet,
  "姉御坂": aneosaka,
  "ナスカ": nasuka,
  "かすみ草": kasumigusa,
  "藤桜梨": dontWorry,
  "いもうと坂": imoutozaka,
  "さゆりんご軍団": sayuringoGundan,
  "真夏さんリスペクト軍団": manatsusanRespectGundan,
  "若様軍団": wakasamaGundan,
  "犬メン": inumen,
  "スイカ": suika,
  "チューリップ": tulip
};
