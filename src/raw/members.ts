import { IMember, JoinedGeneration, IMembers } from "../models/IMember";
import { BloodType, MemberNames, PhotoAlbumType } from "../utils/constants";

const akimotomanatsu: IMember = {
  name: MemberNames.AkimotoManatsu,
  nameNotations: {
    lastName: "秋元",
    firstName: "真夏",
    lastNameEn: "akimoto",
    firstNameEn: "manatsu",
    lastNameFurigana: "あきもと",
    firstNameFurigana: "まなつ",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1993-08-20",
  height: 154,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/akimotomanatsu.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/akimoto-manatsu",
    },
  ],
  photoAlbums: [
    {
      title: "真夏の気圧配置",
      release: "2017-02-28",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const ikutaerika: IMember = {
  name: MemberNames.IkutaErika,
  nameNotations: {
    lastName: "生田",
    firstName: "絵梨花",
    lastNameFurigana: "いくた",
    firstNameFurigana: "えりか",
    lastNameEn: "ikuta",
    firstNameEn: "erika",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1997-01-22",
  height: 160,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/ikutaerika.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/ikuta-erika",
    },
  ],
  photoAlbums: [
    {
      title: "転調",
      release: "2016-01-21",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
    {
      title: "インターミッション",
      release: "2019-01-22",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const ikomarina: IMember = {
  name: MemberNames.IkomaRina,
  nameNotations: {
    lastName: "生駒",
    firstName: "里奈",
    lastNameFurigana: "いこま",
    firstNameFurigana: "りな",
    lastNameEn: "ikoma",
    firstNameEn: "rina",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1995-12-29",
  height: 153,
  bloodType: BloodType.AB,
  sites: [
    {
      title: "Official",
      url: "https://ikomarina.com/",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/ikomarina_1229/",
    },
  ],
  photoAlbums: [
    {
      title: "君の足跡",
      release: "2016-02-24",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-05-06",
  },
};

const itoukarin: IMember = {
  name: MemberNames.ItouKarin,
  nameNotations: {
    lastName: "伊藤",
    firstName: "かりん",
    lastNameFurigana: "いとう",
    firstNameFurigana: "かりん",
    lastNameEn: "ito",
    firstNameEn: "karin",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1993-05-26",
  height: 153,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/itoukarin.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/itou-karin",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const itoujunna: IMember = {
  name: MemberNames.ItouJunna,
  nameNotations: {
    lastName: "伊藤",
    firstName: "純奈",
    lastNameFurigana: "いとう",
    firstNameFurigana: "じゅんな",
    lastNameEn: "ito",
    firstNameEn: "junna",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1998-11-30",
  height: 166,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/itoujunna.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/itou-junna",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const itouriria: IMember = {
  name: MemberNames.ItouRiria,
  nameNotations: {
    lastName: "伊藤",
    firstName: "理々杏",
    lastNameFurigana: "いとう",
    firstNameFurigana: "りりあ",
    lastNameEn: "ito",
    firstNameEn: "riria",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "2002-10-08",
  height: 154,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/itouriria.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const inouesayuri: IMember = {
  name: MemberNames.InoueSayuri,
  nameNotations: {
    lastName: "井上",
    firstName: "小百合",
    lastNameFurigana: "いのうえ",
    firstNameFurigana: "さゆり",
    lastNameEn: "inoue",
    firstNameEn: "sayuri",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1994-12-14",
  height: 156,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/inouesayuri.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/inoue-sayuri",
    },
  ],
  photoAlbums: [
    {
      title: "存在",
      release: "2018-12-12",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const iwamotorenka: IMember = {
  name: MemberNames.IwamotoRenka,
  nameNotations: {
    lastName: "岩本",
    firstName: "蓮加",
    lastNameFurigana: "いわもと",
    firstNameFurigana: "れんか",
    lastNameEn: "iwamoto",
    firstNameEn: "renka",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "2004-02-02",
  height: 157,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/iwamotorenka.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const umezawaminami: IMember = {
  name: MemberNames.UmezawaMinami,
  nameNotations: {
    lastName: "梅澤",
    firstName: "美波",
    lastNameFurigana: "うめざわ",
    firstNameFurigana: "みなみ",
    lastNameEn: "umezakwa",
    firstNameEn: "minami",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "1999-01-06",
  height: 170,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/umezawaminami.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const etoumisa: IMember = {
  name: MemberNames.EtouMisa,
  nameNotations: {
    lastName: "衛藤",
    firstName: "美彩",
    lastNameFurigana: "えとう",
    firstNameFurigana: "みさ",
    lastNameEn: "eto",
    firstNameEn: "misa",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1993-01-04",
  height: 163,
  bloodType: BloodType.AB,
  sites: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/misa_eto_official/",
    },
    {
      title: "755",
      url: "https://7gogo.jp/eto-misa",
    },
  ],
  photoAlbums: [
    {
      title: "彩",
      release: "2012-01-31",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
    {
      title: "話を聞こうか。",
      release: "2017-04-25",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2019-03-31",
  },
};

const oozonomomoko: IMember = {
  name: MemberNames.OozonoMomoko,
  nameNotations: {
    lastName: "大園",
    firstName: "桃子",
    lastNameFurigana: "おおぞの",
    firstNameFurigana: "ももこ",
    lastNameEn: "ozono",
    firstNameEn: "momoko",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "1999-09-13",
  height: 156,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/oozonomomoko.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kawagohina: IMember = {
  name: MemberNames.KawagoHina,
  nameNotations: {
    lastName: "川後",
    firstName: "陽菜",
    lastNameFurigana: "かわご",
    firstNameFurigana: "ひな",
    lastNameEn: "kawago",
    firstNameEn: "hina",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1998-03-22",
  height: 161,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Official",
      url: "http://kawagopro.com/index.html",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/kawagohina3/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/kawagohina3",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-12-20",
  },
};

const kitanohinako: IMember = {
  name: MemberNames.KitanoHinako,
  nameNotations: {
    lastName: "北野",
    firstName: "日奈子",
    lastNameFurigana: "きたの",
    firstNameFurigana: "ひなこ",
    lastNameEn: "kitano",
    firstNameEn: "hinako",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1996-07-17",
  height: 158,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/kitanohinako.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/kitano-hinako",
    },
  ],
  photoAlbums: [
    {
      title: "空気の色",
      release: "2018-12-27",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kuboshiori: IMember = {
  name: MemberNames.KuboShiori,
  nameNotations: {
    lastName: "久保",
    firstName: "史緒里",
    lastNameFurigana: "くぼ",
    firstNameFurigana: "しおり",
    lastNameEn: "kubo",
    firstNameEn: "shiori",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "2001-07-14",
  height: 159,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/kuboshiori.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const saitouasuka: IMember = {
  name: MemberNames.SaitouAsuka,
  nameNotations: {
    lastName: "齋藤",
    firstName: "飛鳥",
    lastNameFurigana: "さいとう",
    firstNameFurigana: "あすか",
    lastNameEn: "saito",
    firstNameEn: "asuka",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1998-08-10",
  height: 158,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/saitouasuka.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/saito-asuka",
    },
  ],
  photoAlbums: [
    {
      title: "潮騒",
      release: "2017-01-25",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const saitouyuuri: IMember = {
  name: MemberNames.SaitouYuuri,
  nameNotations: {
    lastName: "斉藤",
    firstName: "優里",
    lastNameFurigana: "さいとう",
    firstNameFurigana: "ゆうり",
    lastNameEn: "saito",
    firstNameEn: "yuri",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1993-07-20",
  height: 157,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/saitouyuuri.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/MM1u8Yp3Dv6C",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const sakaguchitamami: IMember = {
  name: MemberNames.SakaguchiTamami,
  nameNotations: {
    lastName: "阪口",
    firstName: "珠美",
    lastNameFurigana: "さかぐち",
    firstNameFurigana: "たまみ",
    lastNameEn: "sakaguchi",
    firstNameEn: "tamami",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "2001-11-10",
  height: 161,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/sakaguchitamami.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const sakuraireika: IMember = {
  name: MemberNames.SakuraiReika,
  nameNotations: {
    lastName: "桜井",
    firstName: "玲香",
    lastNameFurigana: "さくらい",
    firstNameFurigana: "れいか",
    lastNameEn: "sakurai",
    firstNameEn: "reika",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1994-05-16",
  height: 155,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/sakuraireika.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/sakurai-reika",
    },
  ],
  photoAlbums: [
    {
      title: "自由ということ",
      release: "2017-03-08",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const sasakikotoko: IMember = {
  name: MemberNames.SasakiKotoko,
  nameNotations: {
    lastName: "佐々木",
    firstName: "琴子",
    lastNameFurigana: "ささき",
    firstNameFurigana: "ことこ",
    lastNameEn: "sasaki",
    firstNameEn: "kotoko",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1998-08-28",
  height: 163,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/sasakikotoko.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const satoukaede: IMember = {
  name: MemberNames.SatouKaede,
  nameNotations: {
    lastName: "佐藤",
    firstName: "楓",
    lastNameFurigana: "さとう",
    firstNameFurigana: "かえで",
    lastNameEn: "sato",
    firstNameEn: "kaede",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "1998-03-23",
  height: 161,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/satoukaede.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const shiraishimai: IMember = {
  name: MemberNames.ShiraishiMai,
  nameNotations: {
    lastName: "白石",
    firstName: "麻衣",
    lastNameFurigana: "しらいし",
    firstNameFurigana: "まい",
    lastNameEn: "shiraishi",
    firstNameEn: "mai",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1992-08-20",
  height: 162,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/shiraishimai.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/shiraishi-mai",
    },
  ],
  photoAlbums: [
    {
      title: "清純な大人",
      release: "2014-12-10",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
    {
      title: "MAI STYLE",
      release: "2015-01-23",
      type: PhotoAlbumType.PhotoBook,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
    {
      title: "パスポート",
      release: "2017-02-07",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const shinuchimai: IMember = {
  name: MemberNames.ShinuchiMai,
  nameNotations: {
    lastName: "新内",
    firstName: "眞衣",
    lastNameFurigana: "しんうち",
    firstNameFurigana: "まい",
    lastNameEn: "shinuchi",
    firstNameEn: "mai",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1992-01-22",
  height: 165,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/shinuchimai.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/shinuchi-mai",
    },
  ],
  photoAlbums: [
    {
      title: "どこにいるの？",
      release: "2017-11-14",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const suzukiayane: IMember = {
  name: MemberNames.SuzukiAyane,
  nameNotations: {
    lastName: "鈴木",
    firstName: "絢音",
    lastNameFurigana: "すずき",
    firstNameFurigana: "あやね",
    lastNameEn: "suzuki",
    firstNameEn: "ayane",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1999-03-05",
  height: 160,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/suzukiayane.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/suzuki-ayane",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const takayamakazumi: IMember = {
  name: MemberNames.TakayamaKazumi,
  nameNotations: {
    lastName: "高山",
    firstName: "一実",
    lastNameFurigana: "たかやま",
    firstNameFurigana: "かずみ",
    lastNameEn: "takayama",
    firstNameEn: "kazumi",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1994-02-08",
  height: 162,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/takayamakazumi.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/takayama-kazumi",
    },
  ],
  photoAlbums: [
    {
      title: "恋かもしれない",
      release: "2016-09-15",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
    {
      title: "独白",
      release: "2019-02-26",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const teradaranze: IMember = {
  name: MemberNames.TeradaRanze,
  nameNotations: {
    lastName: "寺田",
    firstName: "蘭世",
    lastNameFurigana: "てらだ",
    firstNameFurigana: "らんぜ",
    lastNameEn: "terada",
    firstNameEn: "ranze",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1998-09-23",
  height: 155,
  bloodType: BloodType.Unknown,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/teradaranze.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const nakadakana: IMember = {
  name: MemberNames.NakadaKana,
  nameNotations: {
    lastName: "中田",
    firstName: "花奈",
    lastNameFurigana: "なかだ",
    firstNameFurigana: "かな",
    lastNameEn: "nakada",
    firstNameEn: "kana",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1994-08-06",
  height: 158,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/nakadakana.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/nakada-kana",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const nakamurareno: IMember = {
  name: MemberNames.NakamuraReno,
  nameNotations: {
    lastName: "中村",
    firstName: "麗乃",
    lastNameFurigana: "なかむら",
    firstNameFurigana: "れの",
    lastNameEn: "nakamura",
    firstNameEn: "reno",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "2001-09-27",
  height: 167,
  bloodType: BloodType.Unknown,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/nakamurareno.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const nishinonanase: IMember = {
  name: MemberNames.NishinoNanase,
  nameNotations: {
    lastName: "西野",
    firstName: "七瀬",
    lastNameFurigana: "にしの",
    firstNameFurigana: "ななせ",
    lastNameEn: "nishino",
    firstNameEn: "nanase",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1994-05-25",
  height: 159,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Official",
      url: "https://nishinonanase.com/",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/nishino.nanase.official/",
    },
    {
      title: "755",
      url: "https://7gogo.jp/nishino-nanase",
    },
  ],
  photoAlbums: [
    {
      title: "普段着",
      release: "2015-05-18",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
    {
      title: "風に着替えて",
      release: "2016-09-27",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
    {
      title: "わたしのこと",
      release: "2015-05-09",
      type: PhotoAlbumType.PhotoBook,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-12-31",
  },
};

const noujouami: IMember = {
  name: MemberNames.NoujouAmi,
  nameNotations: {
    lastName: "能條",
    firstName: "愛未",
    lastNameFurigana: "のうじょう",
    firstNameFurigana: "あみ",
    lastNameEn: "nojo",
    firstNameEn: "ami",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1994-10-18",
  height: 162,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/noujoami_official/",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-12-15",
  },
};

const higuchihina: IMember = {
  name: MemberNames.HiguchiHina,
  nameNotations: {
    lastName: "樋口",
    firstName: "日奈",
    lastNameFurigana: "ひぐち",
    firstNameFurigana: "ひな",
    lastNameEn: "higuchi",
    firstNameEn: "hina",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1998-01-31",
  height: 159,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/higuchihina.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/higuchi-hina",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const hoshinominami: IMember = {
  name: MemberNames.HoshinoMinami,
  nameNotations: {
    lastName: "星野",
    firstName: "みなみ",
    lastNameFurigana: "ほしの",
    firstNameFurigana: "みなみ",
    lastNameEn: "hoshino",
    firstNameEn: "minami",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1998-02-06",
  height: 155,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/hoshinominami.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/hoshino-minami",
    },
  ],
  photoAlbums: [
    {
      title: "いたずら",
      release: "2018-04-10",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const horimiona: IMember = {
  name: MemberNames.HoriMiona,
  nameNotations: {
    lastName: "堀",
    firstName: "未央奈",
    lastNameFurigana: "ほり",
    firstNameFurigana: "みおな",
    lastNameEn: "hori",
    firstNameEn: "miona",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1996-10-15",
  height: 160,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/horimiona.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/hori-miona",
    },
  ],
  photoAlbums: [
    {
      title: "君らしさ",
      release: "2017-11-24",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const matsumurasayuri: IMember = {
  name: MemberNames.MatsumuraSayuri,
  nameNotations: {
    lastName: "松村",
    firstName: "沙友理",
    lastNameFurigana: "まつむら",
    firstNameFurigana: "さゆり",
    lastNameEn: "matsumura",
    firstNameEn: "sayuri",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1992-08-27",
  height: 164,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/matsumurasayuri.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/matsumura-sayuri",
    },
  ],
  photoAlbums: [
    {
      title: "意外っていうか、前から可愛いと思ってた",
      release: "2017-12-12",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const mukaihazuki: IMember = {
  name: MemberNames.MukaiHazuki,
  nameNotations: {
    lastName: "向井",
    firstName: "葉月",
    lastNameFurigana: "むかい",
    firstNameFurigana: "はづき",
    lastNameEn: "mukai",
    firstNameEn: "hazuki",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "1999-08-23",
  height: 152,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/mukaihazuki.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yamazakirena: IMember = {
  name: MemberNames.YamazakiRena,
  nameNotations: {
    lastName: "山崎",
    firstName: "怜奈",
    lastNameFurigana: "やまざき",
    firstNameFurigana: "れな",
    lastNameEn: "yamazaki",
    firstNameEn: "rena",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1998-01-31",
  height: 159,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/yamazakirena.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/yamazaki-rena",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yamashitamizuki: IMember = {
  name: MemberNames.YamashitaMizuki,
  nameNotations: {
    lastName: "山下",
    firstName: "美月",
    lastNameFurigana: "やました",
    firstNameFurigana: "みづき",
    lastNameEn: "yamashita",
    firstNameEn: "mizuki",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "1999-07-26",
  height: 159,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/yamashitamizuki.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yoshidaayanochristie: IMember = {
  name: MemberNames.YoshidaAyanoChristie,
  nameNotations: {
    lastName: "吉田",
    firstName: "綾乃クリスティー",
    lastNameFurigana: "よしだ",
    firstNameFurigana: "あやのくりすてぃー",
    lastNameEn: "yoshida",
    firstNameEn: "ayanochristie",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "1995-09-06",
  height: 161,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/yoshidaayanochristie.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yodayuuki: IMember = {
  name: MemberNames.YodaYuuki,
  nameNotations: {
    lastName: "与田",
    firstName: "祐希",
    lastNameFurigana: "よだ",
    firstNameFurigana: "ゆうき",
    lastNameEn: "yoda",
    firstNameEn: "yuki",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Third,
  birthday: "2000-05-05",
  height: 152,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/yodayuuki.php",
    },
  ],
  photoAlbums: [
    {
      title: "日向の温度",
      release: "2017-12-26",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const wakatsukiyumi: IMember = {
  name: MemberNames.WakatsukiYumi,
  nameNotations: {
    lastName: "若月",
    firstName: "佑美",
    lastNameFurigana: "わかつき",
    firstNameFurigana: "ゆみ",
    lastNameEn: "wakatsuki",
    firstNameEn: "yumi",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1994-06-27",
  height: 157,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Official",
      url: "https://wakatsukiyumi.jp/",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/yumi_wakatsuki_official/",
    },
  ],
  photoAlbums: [
    {
      title: "パレット",
      release: "2017-11-07",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-11-30",
  },
};

const watanabemiria: IMember = {
  name: MemberNames.WatanabeMiria,
  nameNotations: {
    lastName: "渡辺",
    firstName: "みり愛",
    lastNameFurigana: "わたなべ",
    firstNameFurigana: "みりあ",
    lastNameEn: "watanabe",
    firstNameEn: "miria",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1999-11-01",
  height: 153,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/watanabemiria.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/watanabe-miria",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const wadamaaya: IMember = {
  name: MemberNames.WadaMaaya,
  nameNotations: {
    lastName: "和田",
    firstName: "まあや",
    lastNameFurigana: "わだ",
    firstNameFurigana: "まあや",
    lastNameEn: "wada",
    firstNameEn: "maya",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1998-04-23",
  height: 160,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/wadamaaya.php",
    },
    {
      title: "755",
      url: "https://7gogo.jp/wada-maaya",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const endousakura: IMember = {
  name: MemberNames.EndouSakura,
  nameNotations: {
    lastName: "遠藤",
    firstName: "さくら",
    lastNameFurigana: "えんどう",
    firstNameFurigana: "さくら",
    lastNameEn: "endo",
    firstNameEn: "sakura",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "2001-10-03",
  height: 160,
  bloodType: BloodType.Unknown,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/endousakura.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kakiharuka: IMember = {
  name: MemberNames.KakiHaruka,
  nameNotations: {
    lastName: "賀喜",
    firstName: "遥香",
    lastNameFurigana: "かき",
    firstNameFurigana: "はるか",
    lastNameEn: "kaki",
    firstNameEn: "haruka",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "2001-08-08",
  height: 166,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/kakiharuka.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kakehashisayaka: IMember = {
  name: MemberNames.KakehashiSayaka,
  nameNotations: {
    lastName: "掛橋",
    firstName: "沙耶香",
    lastNameFurigana: "かけはし",
    firstNameFurigana: "さやか",
    lastNameEn: "kakehashi",
    firstNameEn: "sayaka",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "2002-11-20",
  height: 156,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/kakehashisayaka.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kanagawasaya: IMember = {
  name: MemberNames.KanagawaSaya,
  nameNotations: {
    lastName: "金川",
    firstName: "紗耶",
    lastNameFurigana: "かながわ",
    firstNameFurigana: "さや",
    lastNameEn: "kanagawa",
    firstNameEn: "saya",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "2001-10-31",
  height: 164,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/kanagawasaya.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const kitagawayuri: IMember = {
  name: MemberNames.KitagawaYuri,
  nameNotations: {
    lastName: "北川",
    firstName: "悠理",
    lastNameFurigana: "きたがわ",
    firstNameFurigana: "ゆり",
    lastNameEn: "kitagawa",
    firstNameEn: "yuri",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "2001-08-08",
  height: 163,
  bloodType: BloodType.Unknown,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/kitagawayuri.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const shibatayuna: IMember = {
  name: MemberNames.ShibataYuna,
  nameNotations: {
    lastName: "柴田",
    firstName: "柚菜",
    lastNameFurigana: "しばた",
    firstNameFurigana: "ゆな",
    lastNameEn: "shibata",
    firstNameEn: "yuna",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "2003-03-03",
  height: 160,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/shibatayuna.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const seimiyarei: IMember = {
  name: MemberNames.SeimiyaRei,
  nameNotations: {
    lastName: "清宮",
    firstName: "レイ",
    lastNameFurigana: "せいみや",
    firstNameFurigana: "れい",
    lastNameEn: "seimiya",
    firstNameEn: "rei",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "2003-08-01",
  height: 162,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/seimiyarei.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const tamuramayu: IMember = {
  name: MemberNames.TamuraMayu,
  nameNotations: {
    lastName: "田村",
    firstName: "真佑",
    lastNameFurigana: "たむら",
    firstNameFurigana: "まゆ",
    lastNameEn: "tamura",
    firstNameEn: "mayu",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "1999-01-12",
  height: 158,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/tamuramayu.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const tsutsuiayame: IMember = {
  name: MemberNames.TsutsuiAyame,
  nameNotations: {
    lastName: "筒井",
    firstName: "あやめ",
    lastNameFurigana: "つつい",
    firstNameFurigana: "あやめ",
    lastNameEn: "tsutsui",
    firstNameEn: "ayame",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "2004-06-08",
  height: 160,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/tsutsuiayame.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const hayakawaseira: IMember = {
  name: MemberNames.HayakawaSeira,
  nameNotations: {
    lastName: "早川",
    firstName: "聖来",
    lastNameFurigana: "はやかわ",
    firstNameFurigana: "せいら",
    lastNameEn: "hayakawa",
    firstNameEn: "seira",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "2000-08-24",
  height: 164,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/hayakawaseira.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const yakubomio: IMember = {
  name: MemberNames.YakuboMio,
  nameNotations: {
    lastName: "矢久保",
    firstName: "美緒",
    lastNameFurigana: "やくぼ",
    firstNameFurigana: "みお",
    lastNameEn: "yakubo",
    firstNameEn: "mio",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Fourth,
  birthday: "2002-08-14",
  height: 152,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Nogizaka46",
      url: "https://www.nogizaka46.com/member/detail/yakubomio.php",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: false,
    graduatedDate: "",
  },
};

const sagaraiori: IMember = {
  name: MemberNames.SagaraIori,
  nameNotations: {
    lastName: "相楽",
    firstName: "伊織",
    lastNameFurigana: "さがら",
    firstNameFurigana: "いおり",
    lastNameEn: "sagara",
    firstNameEn: "iori",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1997-11-26",
  height: 164,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/_iori.sagara_/",
    },
    {
      title: "755",
      url: "https://7gogo.jp/sagara-iori",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-07-16",
  },
};

const saitouchiharu: IMember = {
  name: MemberNames.SaitouChiharu,
  nameNotations: {
    lastName: "斎藤",
    firstName: "ちはる",
    lastNameFurigana: "さいとう",
    firstNameFurigana: "ちはる",
    lastNameEn: "saito",
    firstNameEn: "chiharu",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1997-02-17",
  height: 166,
  bloodType: BloodType.A,
  sites: [],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-07-16",
  },
};

const kawamuramahiro: IMember = {
  name: MemberNames.KawamuraMahiro,
  nameNotations: {
    lastName: "川村",
    firstName: "真洋",
    lastNameFurigana: "かわむら",
    firstNameFurigana: "まひろ",
    lastNameEn: "kawamura",
    firstNameEn: "mahiro",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1995-07-23",
  height: 156,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/mahiro_kawamura_official/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/Rotty_Rotty23",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2018-03-31",
  },
};

const nakamotohimeka: IMember = {
  name: MemberNames.NakamotoHimeka,
  nameNotations: {
    lastName: "中元",
    firstName: "日芽香",
    lastNameFurigana: "なかもと",
    firstNameFurigana: "ひめか",
    lastNameEn: "nakamoto",
    firstNameEn: "himeka",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1996-04-13",
  height: 161,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Official",
      url: "https://nakamotohimeka.com/",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2017-12-31",
  },
};

const itoumarika: IMember = {
  name: MemberNames.ItouMarika,
  nameNotations: {
    lastName: "伊藤",
    firstName: "万理華",
    lastNameFurigana: "いとう",
    firstNameFurigana: "まりか",
    lastNameEn: "ito",
    firstNameEn: "marika",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1996-02-20",
  height: 155,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Official",
      url: "https://itomarika.com/",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/marikaito_official/",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2017-12-23",
  },
};

const hashimotonanami: IMember = {
  name: MemberNames.HashimotoNanami,
  nameNotations: {
    lastName: "橋本",
    firstName: "奈々未",
    lastNameFurigana: "はしもと",
    firstNameFurigana: "ななみ",
    lastNameEn: "hashimoto",
    firstNameEn: "nanami",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1993-02-20",
  height: 163,
  bloodType: BloodType.B,
  sites: [],
  photoAlbums: [
    {
      title: "やさしい棘",
      release: "2015-08-28",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
    {
      title: "2017",
      release: "2017-02-20",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2017-02-20",
  },
};

const fukagawamai: IMember = {
  name: MemberNames.FukagawaMai,
  nameNotations: {
    lastName: "深川",
    firstName: "麻衣",
    lastNameFurigana: "ふかがわ",
    firstNameFurigana: "まい",
    lastNameEn: "fukagawa",
    firstNameEn: "mai",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1991-03-29",
  height: 162,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Official",
      url: "http://www.tencarat.co.jp/fukagawamai/",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/fukagawamai.official/",
    },
  ],
  photoAlbums: [
    {
      title: "ずっと、そばにいたい",
      release: "2016-06-09",
      type: PhotoAlbumType.PhotoAlbum,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
    {
      title: "My magazine",
      release: "2018-02-22",
      type: PhotoAlbumType.PhotoMagazine,
      shopping: [
        {
          title: "Amazon",
          url: "",
        },
      ],
    },
  ],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2016-06-16",
  },
};

const nagashimaseira: IMember = {
  name: MemberNames.NagashimaSeira,
  nameNotations: {
    lastName: "永島",
    firstName: "聖羅",
    lastNameFurigana: "ながしま",
    firstNameFurigana: "せいら",
    lastNameEn: "nagashima",
    firstNameEn: "seira",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1994-05-19",
  height: 158,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/seira_nagashima/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/seira_0519n",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2016-03-20",
  },
};

const matsuirena: IMember = {
  name: MemberNames.MatsuiRena,
  nameNotations: {
    lastName: "松井",
    firstName: "玲奈",
    lastNameFurigana: "まつい",
    firstNameFurigana: "れな",
    lastNameEn: "matsui",
    firstNameEn: "rena",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Exchange,
  birthday: "1991-07-27",
  height: 162,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/renamatui27/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/renampme",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2015-05-14",
  },
};

const hatanakaseira: IMember = {
  name: MemberNames.HatanakaSeira,
  nameNotations: {
    lastName: "畠中",
    firstName: "清羅",
    lastNameFurigana: "はたなか",
    firstNameFurigana: "せいら",
    lastNameEn: "hatanaka",
    firstNameEn: "seira",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1995-12-05",
  height: 150,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/seira_hatanaka/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/seira_hatanaka",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2015-04-04",
  },
};

const yamatorina: IMember = {
  name: MemberNames.YamatoRina,
  nameNotations: {
    lastName: "大和",
    firstName: "里菜",
    lastNameFurigana: "やまと",
    firstNameFurigana: "りな",
    lastNameEn: "yamato",
    firstNameEn: "rina",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1994-12-14",
  height: 162,
  bloodType: BloodType.O,
  sites: [],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2015-04-04",
  },
};

const itounene: IMember = {
  name: MemberNames.ItouNene,
  nameNotations: {
    lastName: "伊藤",
    firstName: "寧々",
    lastNameFurigana: "いとう",
    firstNameFurigana: "ねね",
    lastNameEn: "ito",
    firstNameEn: "nene",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1995-12-12",
  height: 148,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/12neneito12/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/nene_ito1212",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2014-10-19",
  },
};

const yonetokukyouka: IMember = {
  name: MemberNames.YonetokuKyouka,
  nameNotations: {
    lastName: "米徳",
    firstName: "京花",
    lastNameFurigana: "よねとく",
    firstNameFurigana: "きょうか",
    lastNameEn: "yonetoku",
    firstNameEn: "kyoka",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1999-04-14",
  height: 163,
  bloodType: BloodType.AB,
  sites: [],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2014-10-18",
  },
};

const yadarisako: IMember = {
  name: MemberNames.YadaRisako,
  nameNotations: {
    lastName: "矢田",
    firstName: "里沙子",
    lastNameFurigana: "やだ",
    firstNameFurigana: "りさこ",
    lastNameEn: "yada",
    firstNameEn: "risako",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1995-03-08",
  height: 158,
  bloodType: BloodType.A,
  sites: [],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2014-10-18",
  },
};

const ichikirena: IMember = {
  name: MemberNames.IchikiRena,
  nameNotations: {
    lastName: "市來",
    firstName: "玲奈",
    lastNameFurigana: "いちき",
    firstNameFurigana: "れな",
    lastNameEn: "ichiki",
    firstNameEn: "rena",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1996-01-22",
  height: 153,
  bloodType: BloodType.A,
  sites: [
    {
      title: "日本テレビ",
      url: "http://www.ntv.co.jp/announcer/profile/r_ichiki.html",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2014-10-19",
  },
};

const nishikawananami: IMember = {
  name: MemberNames.NishikawaNanami,
  nameNotations: {
    lastName: "西川",
    firstName: "七海",
    lastNameFurigana: "にしかわ",
    firstNameFurigana: "ななみ",
    lastNameEn: "nishikawa",
    firstNameEn: "nanami",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.Second,
  birthday: "1993-07-03",
  height: 165,
  bloodType: BloodType.A,
  sites: [],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2014-03-22",
  },
};

const miyazawaseira: IMember = {
  name: MemberNames.MiyazawaSeira,
  nameNotations: {
    lastName: "宮澤",
    firstName: "成良",
    lastNameFurigana: "みやざわ",
    firstNameFurigana: "せいら",
    lastNameEn: "miyazawa",
    firstNameEn: "seira",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1993-10-29",
  height: 166,
  bloodType: BloodType.O,
  sites: [
    {
      title: "Twitter",
      url: "https://twitter.com/seira_miyazawa/",
    },
    {
      title: "Ameba",
      url: "https://ameblo.jp/seira-miyazawa/",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2013-11-17",
  },
};

const kashiwayukina: IMember = {
  name: MemberNames.KashiwaYukina,
  nameNotations: {
    lastName: "柏",
    firstName: "幸奈",
    lastNameFurigana: "かしわ",
    firstNameFurigana: "ゆきな",
    lastNameEn: "kashiwa",
    firstNameEn: "yukina",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1994-08-12",
  height: 158,
  bloodType: BloodType.B,
  sites: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/yukina_812/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/y_k812/",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2013-11-17",
  },
};

const andoumikumo: IMember = {
  name: MemberNames.AndouMikumo,
  nameNotations: {
    lastName: "安藤",
    firstName: "美雲",
    lastNameFurigana: "あんどう",
    firstNameFurigana: "みくも",
    lastNameEn: "ando",
    firstNameEn: "mikumo",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1993-05-21",
  height: 156,
  bloodType: BloodType.O,
  sites: [],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2013-06-16",
  },
};

const iwaseyumiko: IMember = {
  name: MemberNames.IwaseYumiko,
  nameNotations: {
    lastName: "岩瀬",
    firstName: "佑美子",
    lastNameFurigana: "いわせ",
    firstNameFurigana: "ゆみこ",
    lastNameEn: "iwase",
    firstNameEn: "yumiko",
  },
  profileImage: {
    large: "",
    small: "",
  },
  singleImages: {},
  join: JoinedGeneration.First,
  birthday: "1990-06-12",
  height: 153,
  bloodType: BloodType.A,
  sites: [
    {
      title: "Twitter",
      url: "https://twitter.com/scarf_iwase/",
    },
    {
      title: "けつばん",
      url: "https://ketsuban.com/",
    },
  ],
  photoAlbums: [],
  units: [],
  positionsHistory: {},
  positionsCounter: {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  },
  graduation: {
    isGraduated: true,
    graduatedDate: "2012-11-18",
  },
};

export const members: IMembers = {
  [akimotomanatsu.name]: akimotomanatsu,
  [ikutaerika.name]: ikutaerika,
  [itoukarin.name]: itoukarin,
  [itoujunna.name]: itoujunna,
  [itouriria.name]: itouriria,
  [inouesayuri.name]: inouesayuri,
  [iwamotorenka.name]: iwamotorenka,
  [umezawaminami.name]: umezawaminami,
  [etoumisa.name]: etoumisa,
  [oozonomomoko.name]: oozonomomoko,
  [kitanohinako.name]: kitanohinako,
  [kuboshiori.name]: kuboshiori,
  [saitouasuka.name]: saitouasuka,
  [saitouyuuri.name]: saitouyuuri,
  [sakaguchitamami.name]: sakaguchitamami,
  [sakuraireika.name]: sakuraireika,
  [sasakikotoko.name]: sasakikotoko,
  [satoukaede.name]: satoukaede,
  [shiraishimai.name]: shiraishimai,
  [shinuchimai.name]: shinuchimai,
  [suzukiayane.name]: suzukiayane,
  [takayamakazumi.name]: takayamakazumi,
  [teradaranze.name]: teradaranze,
  [nakadakana.name]: nakadakana,
  [nakamurareno.name]: nakamurareno,
  [nishinonanase.name]: nishinonanase,
  [higuchihina.name]: higuchihina,
  [hoshinominami.name]: hoshinominami,
  [horimiona.name]: horimiona,
  [matsumurasayuri.name]: matsumurasayuri,
  [mukaihazuki.name]: mukaihazuki,
  [yamazakirena.name]: yamazakirena,
  [yamashitamizuki.name]: yamashitamizuki,
  [yoshidaayanochristie.name]: yoshidaayanochristie,
  [yodayuuki.name]: yodayuuki,
  [watanabemiria.name]: watanabemiria,
  [wadamaaya.name]: wadamaaya,
  [endousakura.name]: endousakura,
  [kakiharuka.name]: kakiharuka,
  [kakehashisayaka.name]: kakehashisayaka,
  [kanagawasaya.name]: kanagawasaya,
  [kitagawayuri.name]: kitagawayuri,
  [shibatayuna.name]: shibatayuna,
  [seimiyarei.name]: seimiyarei,
  [tamuramayu.name]: tamuramayu,
  [tsutsuiayame.name]: tsutsuiayame,
  [hayakawaseira.name]: hayakawaseira,
  [yakubomio.name]: yakubomio,
  [kawagohina.name]: kawagohina,
  [noujouami.name]: noujouami,
  [wakatsukiyumi.name]: wakatsukiyumi,
  [saitouchiharu.name]: saitouchiharu,
  [sagaraiori.name]: sagaraiori,
  [ikomarina.name]: ikomarina,
  [kawamuramahiro.name]: kawamuramahiro,
  [itoumarika.name]: itoumarika,
  [nakamotohimeka.name]: nakamotohimeka,
  [hashimotonanami.name]: hashimotonanami,
  [fukagawamai.name]: fukagawamai,
  [nagashimaseira.name]: nagashimaseira,
  [matsuirena.name]: matsuirena,
  [hatanakaseira.name]: hatanakaseira,
  [yamatorina.name]: yamatorina,
  [itounene.name]: itounene,
  [yonetokukyouka.name]: yonetokukyouka,
  [yadarisako.name]: yadarisako,
  [ichikirena.name]: ichikirena,
  [nishikawananami.name]: nishikawananami,
  [miyazawaseira.name]: miyazawaseira,
  [kashiwayukina.name]: kashiwayukina,
  [andoumikumo.name]: andoumikumo,
  [iwaseyumiko.name]: iwaseyumiko,
};
