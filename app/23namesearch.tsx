"use client";

import { useState } from "react";

// 名前のリスト
const names = [
  {
    名前: "山田太郎",
    ひらがな: "やまだたろう",
    説明: "サンプルデータ",
    id: "0",
  },
  {
    名前: "佐藤健",
    ひらがな: "さとたけし",
    説明: "俳優、るろうに剣心主演",
    id: "1",
  },
  {
    名前: "新垣結衣",
    ひらがな: "あらがきゆい",
    説明: "俳優、逃げ恥で人気",
    id: "2",
  },
  {
    名前: "大谷翔平",
    ひらがな: "おおたにしょうへい",
    説明: "野球選手、MLB二刀流",
    id: "3",
  },
  {
    名前: "米津玄師",
    ひらがな: "よねづけんし",
    説明: "歌手、Lemonで大ヒット",
    id: "4",
  },
  {
    名前: "渡辺直美",
    ひらがな: "わたなべなおみ",
    説明: "タレント、ビヨンセものまね",
    id: "5",
  },
  {
    名前: "木村拓哉",
    ひらがな: "きむらたくや",
    説明: "俳優、SMAP元リーダー",
    id: "6",
  },
  {
    名前: "宮崎駿",
    ひらがな: "みやざきはやお",
    説明: "監督、ジブリ創設者",
    id: "7",
  },
  {
    名前: "綾瀬はるか",
    ひらがな: "あやせはるか",
    説明: "俳優、NHK大河主演",
    id: "8",
  },
  {
    名前: "広瀬すず",
    ひらがな: "ひろせすず",
    説明: "俳優、若手実力派",
    id: "9",
  },
  {
    名前: "橋本環奈",
    ひらがな: "はしもとかんな",
    説明: "俳優、千年に一度の美少女",
    id: "10",
  },
  {
    名前: "三浦春馬",
    ひらがな: "みうらはるま",
    説明: "俳優、舞台とドラマで活躍",
    id: "11",
  },
  {
    名前: "北川景子",
    ひらがな: "きたがわけいこ",
    説明: "俳優、モデル出身",
    id: "12",
  },
  {
    名前: "長澤まさみ",
    ひらがな: "ながさわまさみ",
    説明: "俳優、東宝シンデレラ",
    id: "13",
  },
  {
    名前: "星野源",
    ひらがな: "ほしのげん",
    説明: "歌手、俳優、逃げ恥主題歌",
    id: "14",
  },
  {
    名前: "中居正広",
    ひらがな: "なかいまさひろ",
    説明: "タレント、SMAP元メンバー",
    id: "15",
  },
  {
    名前: "深田恭子",
    ひらがな: "ふかだきょうこ",
    説明: "俳優、永遠のアイドル",
    id: "16",
  },
  {
    名前: "松本潤",
    ひらがな: "まつもとじゅん",
    説明: "俳優、嵐メンバー",
    id: "17",
  },
  {
    名前: "浜崎あゆみ",
    ひらがな: "はまさきあゆみ",
    説明: "歌手、J-POPの女王",
    id: "18",
  },
  {
    名前: "水原希子",
    ひらがな: "みずはらきこ",
    説明: "モデル、国際的活躍",
    id: "19",
  },
  {
    名前: "山下智久",
    ひらがな: "やましたともひさ",
    説明: "俳優、歌手、元NEWS",
    id: "20",
  },
  {
    名前: "湯川秀樹",
    ひらがな: "ゆかわひでき",
    説明: "物理学者、中間子理論でノーベル賞",
    id: "21",
  },
  {
    名前: "朝永振一郎",
    ひらがな: "ともながしんいちろう",
    説明: "物理学者、量子電磁力学でノーベル賞",
    id: "22",
  },
  {
    名前: "江崎玲於奈",
    ひらがな: "えさきれおな",
    説明: "物理学者、トンネル効果でノーベル賞",
    id: "23",
  },
  {
    名前: "小柴昌俊",
    ひらがな: "こしばまさとし",
    説明: "物理学者、ニュートリノでノーベル賞",
    id: "24",
  },
  {
    名前: "益川敏英",
    ひらがな: "ますかわとしひで",
    説明: "物理学者、素粒子理論でノーベル賞",
    id: "25",
  },
  {
    名前: "南部陽一郎",
    ひらがな: "なんぶよういちろう",
    説明: "物理学者、対称性の破れでノーベル賞",
    id: "26",
  },
  {
    名前: "山中伸弥",
    ひらがな: "やまなかしんや",
    説明: "医学者、iPS細胞でノーベル賞",
    id: "27",
  },
  {
    名前: "大村智",
    ひらがな: "おおむらさとし",
    説明: "化学者、寄生虫薬でノーベル賞",
    id: "28",
  },
  {
    名前: "野依良治",
    ひらがな: "のいりょうじ",
    説明: "化学者、キラル触媒でノーベル賞",
    id: "29",
  },
  {
    名前: "田中耕一",
    ひらがな: "たなかこういち",
    説明: "化学者、タンパク質分析でノーベル賞",
    id: "30",
  },
  {
    名前: "坂本龍馬",
    ひらがな: "さかもとりょうま",
    説明: "幕末の志士、薩長同盟を仲介",
    id: "31",
  },
  {
    名前: "織田信長",
    ひらがな: "おだのぶなが",
    説明: "戦国大名、天下布武を掲げる",
    id: "32",
  },
  {
    名前: "徳川家康",
    ひらがな: "とくがわいえやす",
    説明: "江戸幕府初代将軍",
    id: "33",
  },
  {
    名前: "豊臣秀吉",
    ひらがな: "とよとみひでよし",
    説明: "戦国大名、天下統一",
    id: "34",
  },
  {
    名前: "西郷隆盛",
    ひらがな: "さいごうたかもり",
    説明: "明治維新の指導者",
    id: "35",
  },
  {
    名前: "伊藤博文",
    ひらがな: "いとうひろぶみ",
    説明: "初代内閣総理大臣",
    id: "36",
  },
  {
    名前: "福沢諭吉",
    ひらがな: "ふくざわゆきち",
    説明: "啓蒙思想家、慶應義塾創設",
    id: "37",
  },
  {
    名前: "聖徳太子",
    ひらがな: "しょうとくたいし",
    説明: "飛鳥時代の政治家、十七条憲法",
    id: "38",
  },
  {
    名前: "紫式部",
    ひらがな: "むらさきしきぶ",
    説明: "平安時代の作家、源氏物語",
    id: "39",
  },
  {
    名前: "清少納言",
    ひらがな: "せいしょうなごん",
    説明: "平安時代の随筆家、枕草子",
    id: "40",
  },
  {
    名前: "渋沢栄一",
    ひらがな: "しぶさわえいいち",
    説明: "実業家、日本資本主義の父",
    id: "41",
  },
  {
    名前: "本田宗一郎",
    ひらがな: "ほんだそういちろう",
    説明: "実業家、ホンダ創業者",
    id: "42",
  },
  {
    名前: "盛田昭夫",
    ひらがな: "もりたあきお",
    説明: "実業家、ソニー共同創業者",
    id: "43",
  },
  {
    名前: "松下幸之助",
    ひらがな: "まつしたこうのすけ",
    説明: "実業家、パナソニック創業者",
    id: "44",
  },
  {
    名前: "三島由紀夫",
    ひらがな: "みしまゆきお",
    説明: "作家、仮面の告白で有名",
    id: "45",
  },
  {
    名前: "夏目漱石",
    ひらがな: "なつめそうせき",
    説明: "作家、吾輩は猫である",
    id: "46",
  },
  {
    名前: "太宰治",
    ひらがな: "だざいおさむ",
    説明: "作家、人間失格の作者",
    id: "47",
  },
  {
    名前: "川端康成",
    ひらがな: "かわばたやすなり",
    説明: "作家、雪国でノーベル文学賞",
    id: "48",
  },
  {
    名前: "安倍晋三",
    ひらがな: "あべしんぞう",
    説明: "政治家、元首相、長期政権",
    id: "49",
  },
  {
    名前: "羽生結弦",
    ひらがな: "はにゅうゆづる",
    説明: "フィギュアスケート、2度の金メダル",
    id: "50",
  },
  {
    名前: "イチロー",
    ひらがな: "いちろう",
    説明: "野球選手、MLB最多安打記録",
    id: "51",
  },
  {
    名前: "吉田沙保里",
    ひらがな: "よしださおり",
    説明: "レスリング、3度の五輪金メダル",
    id: "52",
  },
  {
    名前: "錦織圭",
    ひらがな: "にしこりけい",
    説明: "テニス選手、世界ランク最高4位",
    id: "53",
  },
  {
    名前: "宇野昌磨",
    ひらがな: "うのしょうま",
    説明: "フィギュアスケート、五輪メダリスト",
    id: "54",
  },
  {
    名前: "高橋尚子",
    ひらがな: "たかはしなおこ",
    説明: "マラソン、シドニー五輪金メダル",
    id: "55",
  },
  {
    名前: "野茂英雄",
    ひらがな: "のもひでお",
    説明: "野球選手、MLBパイオニア",
    id: "56",
  },
  {
    名前: "中田英寿",
    ひらがな: "なかたひでとし",
    説明: "サッカー選手、セリエAで活躍",
    id: "57",
  },
  {
    名前: "香川真司",
    ひらがな: "かがわしんじ",
    説明: "サッカー選手、欧州リーグで活躍",
    id: "58",
  },
  {
    名前: "本庶佑",
    ひらがな: "ほんじょたすく",
    説明: "医学者、免疫療法でノーベル賞",
    id: "59",
  },
  {
    名前: "石川遼",
    ひらがな: "いしかわりょう",
    説明: "ゴルフ、日本最年少プロ",
    id: "60",
  },
  {
    名前: "小津安二郎",
    ひらがな: "おづやすじろう",
    説明: "映画監督、東京物語の巨匠",
    id: "61",
  },
  {
    名前: "黒澤明",
    ひらがな: "くろさわあきら",
    説明: "映画監督、七人の侍で世界的に有名",
    id: "62",
  },
  {
    名前: "志村けん",
    ひらがな: "しむらけん",
    説明: "コメディアン、ドリフターズのリーダー",
    id: "63",
  },
  {
    名前: "美空ひばり",
    ひらがな: "みそらひばり",
    説明: "歌手、昭和の歌姫",
    id: "64",
  },
  {
    名前: "宇多田ヒカル",
    ひらがな: "うただひかる",
    説明: "歌手、First Loveでデビュー",
    id: "65",
  },
  {
    名前: "小室哲哉",
    ひらがな: "こむろてつや",
    説明: "音楽プロデューサー、TM NETWORK",
    id: "66",
  },
  {
    名前: "石原裕次郎",
    ひらがな: "いしはらゆうじろう",
    説明: "俳優、歌手、昭和のスター",
    id: "67",
  },
  {
    名前: "高倉健",
    ひらがな: "たかくらけん",
    説明: "俳優、仁義なき戦い主演",
    id: "68",
  },
  {
    名前: "竹内結子",
    ひらがな: "たけうちゆうこ",
    説明: "俳優、昼顔で人気",
    id: "69",
  },
  {
    名前: "柴咲コウ",
    ひらがな: "しばさきこう",
    説明: "俳優、歌手、ガリレオ主演",
    id: "70",
  },
  {
    名前: "戸田恵梨香",
    ひらがな: "とだえりか",
    説明: "俳優、コード・ブルー主演",
    id: "71",
  },
  {
    名前: "蒼井優",
    ひらがな: "あおいゆう",
    説明: "俳優、フラガールで受賞",
    id: "72",
  },
  {
    名前: "松田聖子",
    ひらがな: "まつだせいこ",
    説明: "歌手、80年代アイドル",
    id: "73",
  },
  {
    名前: "中森明菜",
    ひらがな: "なかもりあきな",
    説明: "歌手、昭和の歌姫",
    id: "74",
  },
  {
    名前: "山口百恵",
    ひらがな: "やまぐちももえ",
    説明: "歌手、俳優、伝説のアイドル",
    id: "75",
  },
  {
    名前: "小泉今日子",
    ひらがな: "こいずみきょうこ",
    説明: "歌手、俳優、80年代アイドル",
    id: "76",
  },
  {
    名前: "薬師丸ひろ子",
    ひらがな: "やくしまるひろこ",
    説明: "俳優、歌手、セーラー服と機関銃",
    id: "77",
  },
  {
    名前: "桃井かおり",
    ひらがな: "ももいかおり",
    説明: "俳優、ハリウッドでも活躍",
    id: "78",
  },
  {
    名前: "吉永小百合",
    ひらがな: "よしながさゆり",
    説明: "俳優、昭和の清純派スター",
    id: "79",
  },
  {
    名前: "高畑勲",
    ひらがな: "たかはたいさお",
    説明: "アニメ監督、火垂るの墓",
    id: "80",
  },
  {
    名前: "是枝裕和",
    ひらがな: "これえだひろかず",
    説明: "映画監督、万引き家族で受賞",
    id: "81",
  },
  {
    名前: "大隈重信",
    ひらがな: "おおくましげのぶ",
    説明: "政治家、早稲田大学創設",
    id: "82",
  },
  {
    名前: "乃木希典",
    ひらがな: "のぎまれすけ",
    説明: "軍人、日露戦争の英雄",
    id: "83",
  },
  {
    名前: "東郷平八郎",
    ひらがな: "とうごうへいはちろう",
    説明: "軍人、日本海海戦で勝利",
    id: "84",
  },
  {
    名前: "山本五十六",
    ひらがな: "やまもといそろく",
    説明: "軍人、連合艦隊司令長官",
    id: "85",
  },
  {
    名前: "与謝野晶子",
    ひらがな: "よさのあきこ",
    説明: "歌人、みだれ髪で近代短歌革新",
    id: "86",
  },
  {
    名前: "石川啄木",
    ひらがな: "いしかわたくぼく",
    説明: "歌人、ローマ字日記で有名",
    id: "87",
  },
  {
    名前: "正岡子規",
    ひらがな: "まさおかしき",
    説明: "俳人、俳句と短歌の近代化",
    id: "88",
  },
  {
    名前: "森鴎外",
    ひらがな: "もりおうがい",
    説明: "作家、舞姫で近代文学を開拓",
    id: "89",
  },
  {
    名前: "大久保利通",
    ひらがな: "おおくぼとしみち",
    説明: "明治維新の政治家、近代化推進",
    id: "90",
  },
  {
    名前: "板垣退助",
    ひらがな: "いたがきたいすけ",
    説明: "政治家、自由民権運動の指導者",
    id: "91",
  },
  {
    名前: "岡倉天心",
    ひらがな: "おかくらてんしん",
    説明: "美術史家、茶の本で日本文化発信",
    id: "92",
  },
  {
    名前: "柳宗悦",
    ひらがな: "やなぎむねよし",
    説明: "民芸運動の提唱者、美の哲学者",
    id: "93",
  },
  {
    名前: "北里柴三郎",
    ひらがな: "きたさとしばさぶろう",
    説明: "医学者、破傷風治療法を開発",
    id: "94",
  },
  {
    名前: "野依和夫",
    ひらがな: "のいかずお",
    説明: "化学者、タンパク質研究で貢献",
    id: "95",
  },
];

export default function Home() {
  const [randomName, setRandomName] = useState<string[]>(["", "", ""]);
  const [whoFlag, setWhoFlag] = useState(false);

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setRandomName([
      names[randomIndex].名前,
      names[randomIndex].ひらがな,
      names[randomIndex].説明,
    ]);
    setWhoFlag(false);
  };

  const showGoogleSearch = () => {
    const windowWidth = Math.floor(screen.width * 0.9);
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      randomName[0]
    )}&tbm=isch`;
    window.open(searchUrl, "_blank", `width=${windowWidth}`);
  };

  return (
    <main className="text-center p-[50px]">
      <h1 className="text-2xl font-bold">ランダム名前ジェネレーター</h1>
      <p className="text-[24px] my-5">
        {randomName[0] || "ボタンを押して名前を表示"}
      </p>

      {/* 変更箇所: ボタン群にスタイルを追加 */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setWhoFlag(!whoFlag)}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md shadow-sm transition-colors"
        >
          誰？
        </button>
        <button
          onClick={showGoogleSearch}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md shadow-sm transition-colors"
        >
          顔？
        </button>
        <button
          onClick={getRandomName}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-sm transition-colors"
        >
          新しい名前を生成
        </button>
      </div>

      <div className="mt-5">
        {whoFlag && (
          <div>
            <p className="text-[24px]">{randomName[1]}</p>
            <p className="text-[24px]">{randomName[2]}</p>
          </div>
        )}
      </div>
    </main>
  );
}
