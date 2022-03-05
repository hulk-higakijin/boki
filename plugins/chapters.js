const secondIndustrialChapters = [
  {
    id: 1,
    title: '工業簿記とは',
    lessons: [
      { id: 1, title: '工業簿記とは', page: 12 },
      { id: 2, title: '工業簿記の全体の流れ', page: 14 },
      { id: 3, title: '原価計算とは', page: 16 },
      { id: 4, title: '仕掛品と製品', page: 18 },
    ],
  },
  {
    id: 2,
    title: '材料費',
    lessons: [
      { id: 1, title: '直接材料費と間接材料費', page: 22 },
      { id: 2, title: '材料勘定の記入', page: 26 },
      { id: 3, title: '材料の消費単価', page: 32 },
      { id: 4, title: '材料の消費数量', page: 38 },
      { id: 5, title: '棚卸減耗費', page: 40 },
      { id: 6, title: '予定消費単価', page: 46 },
    ],
  },
  {
    id: 3,
    title: '労務費',
    lessons: [
      { id: 1, title: '直接労務費と間接労務費', page: 54 },
      { id: 2, title: '賃率勘定の記入', page: 58 },
      { id: 3, title: '予定賃率', page: 66 },
    ],
  },
  {
    id: 4,
    title: '経費',
    lessons: [
      { id: 1, title: '直接経費と間接経費', page: 74 },
      { id: 2, title: '賃金勘定の記入', page: 76 },
    ],
  },
  {
    id: 5,
    title: '製造間接費',
    lessons: [
      { id: 1, title: '製造間接費とは', page: 86 },
      { id: 2, title: '予定配賦率とは', page: 90 },
      { id: 3, title: '予定配賦率の原価差異の分析', page: 94 },
    ],
  },
  {
    id: 6,
    title: '勘定の記入と財務諸表',
    lessons: [
      { id: 1, title: '勘定記入のまとめ', page: 96 },
      { id: 2, title: '製造原価報告書', page: 102 },
      { id: 3, title: '損益計算書と貸借対照表', page: 106 },
      { id: 4, title: '原価差異がある場合の財務諸表', page: 108 },
    ],
  },
  {
    id: 7,
    title: '製造間接費の部門別計算',
    lessons: [
      { id: 1, title: '製造間接費の第一次集計（部門個別費と部門共通費）', page: 118 },
      { id: 2, title: '製造間接費の第二次集計（直接配賦法と相互配賦法）', page: 122 },
      { id: 3, title: '製品への配賦（実際配賦と予定配賦）', page: 138 },
    ],
  },
  {
    id: 8,
    title: '個別原価計算',
    lessons: [
      { id: 1, title: '個別原価計算とは', page: 146 },
      { id: 2, title: '製造指図書と原価計算表', page: 148 },
      { id: 3, title: '個別原価計算（仕損品）', page: 150 },
      { id: 4, title: '原価計算表と勘定元帳との関係', page: 154 },
      { id: 5, title: '個別原価計算（仕訳）', page: 158 },
    ],
  },
  {
    id: 9,
    title: '総合原価計算１',
    lessons: [
      { id: 1, title: '総合原価計算とは', page: 166 },
      { id: 2, title: '仕掛品の解き方', page: 168 },
      { id: 3, title: '仕掛品の計算（先入先出法）', page: 172 },
      { id: 4, title: '仕掛品の計算（平均法）', page: 176 },
      { id: 5, title: '材料の追加投入（作業の途中に投入）', page: 186 },
      { id: 6, title: '材料の追加投入（平均的に投入）', page: 196 },
    ],
  },
  {
    id: 10,
    title: '総合原価計算２',
    lessons: [
      { id: 1, title: '仕損と減損とは', page: 204 },
      { id: 2, title: '仕損１完成品原価に含めて処理', page: 206 },
      { id: 3, title: '仕損２完成品原価と月末仕掛品原価に含めて処理', page: 218 },
      { id: 4, title: ' 仕損３発生点が不明の場合', page: 233 },
      { id: 5, title: '副産物と作業屑', page: 236 },
    ],
  },
  {
    id: 11,
    title: '総合原価計算の種類',
    lessons: [
      { id: 1, title: '工程別総合原価計算', page: 238 },
      { id: 2, title: '組別総合原価計算', page: 248 },
      { id: 3, title: '等級別総合原価計算', page: 256 },
    ],
  },
  {
    id: 12,
    title: '標準原価計算',
    lessons: [
      { id: 1, title: '標準原価計算とは', page: 266 },
      { id: 2, title: '標準原価計算カード', page: 268 },
      { id: 3, title: 'シングル・プラン', page: 270 },
      { id: 4, title: 'パーシャル・プラン', page: 276 },
      { id: 5, title: '原価差異の分析とは', page: 284 },
      { id: 6, title: '原価差異の分析（材料費）', page: 286 },
      { id: 7, title: '原価差異の分析（労務費）', page: 292 },
      { id: 8, title: '原価差異の分析（製造間接費）', page: 302 },
      { id: 9, title: '実際原価計算の原価差異の分析', page: 323 },
    ],
  },
  {
    id: 13,
    title: '直接原価計算',
    lessons: [
      { id: 1, title: '直接原価計算とは', page: 330 },
      { id: 2, title: 'CVP分析（基礎）', page: 332 },
      { id: 3, title: 'CVP分析（応用）', page: 338 },
      { id: 4, title: 'CVP分析（損益分岐点比率と安全余裕率）', page: 346 },
      { id: 5, title: '直接原価計算の損益計算書', page: 352 },
      { id: 6, title: '固定費調整', page: 362 },
    ],
  },
  {
    id: 14,
    title: '本社工場会計',
    lessons: [
      { id: 1, title: '本社工場会計とは', page: 370 },
      { id: 2, title: '本社と工場の仕訳', page: 372 },
    ],
  },
]

const secondCommercialChapters = [
  {
    id: 1,
    title: '売上原価',
    lessons: [
      { id: 1, title: '売上原価（三分法）', page: 18 },
      { id: 2, title: '売上原価（販売のつど売上原価に振り替える方法）', page: 20 },
      { id: 3, title: '棚卸減耗損・商品評価額', page: 22 },
    ],
  },
  {
    id: 2,
    title: '商品売買・サービス集',
    lessons: [
      { id: 1, title: '収益の認識基準', page: 30 },
      { id: 2, title: '仕入割戻', page: 32 },
      { id: 3, title: '売上割戻', page: 34 },
      { id: 4, title: '売上割引・仕入割引', page: 36 },
      { id: 5, title: '役務収益・役務原価１', page: 40 },
      { id: 6, title: '役務収益・役務原価２', page: 42 },
      { id: 7, title: '主たる営業取引', page: 48 },
    ],
  },
  {
    id: 3,
    title: '外貨建取引',
    lessons: [
      { id: 1, title: '外貨建取引（外国通貨での売上・仕入）', page: 52 },
      { id: 2, title: '外貨建取引（売掛金と買掛金）', page: 54 },
      { id: 3, title: '外貨建取引（前受金と前払金）', page: 56 },
      { id: 4, title: '外貨建取引（決算整理仕訳）', page: 58 },
      { id: 5, title: '為替予約（振当処理）１', page: 66 },
      { id: 6, title: '為替予約（振当処理）２', page: 68 },
    ],
  },
  {
    id: 4,
    title: '手形・債権の譲渡',
    lessons: [
      { id: 1, title: '割引手形', page: 74 },
      { id: 2, title: '裏書手形', page: 76 },
      { id: 3, title: '手形の不渡り', page: 78 },
      { id: 4, title: '手形の期日の延長（手形の更改）', page: 82 },
      { id: 5, title: '営業外支払手形・営業外受取手形', page: 84 },
      { id: 6, title: '電子記録債権の割り引き・譲渡', page: 88 },
      { id: 7, title: '債権の譲渡', page: 90 },
    ],
  },
  {
    id: 5,
    title: '当座預金の銀行勘定調整表',
    lessons: [
      { id: 1, title: '銀行勘定調整表', page: 94 },
      { id: 2, title: '連絡未通知', page: 96 },
      { id: 3, title: '未渡小切手', page: 97 },
      { id: 4, title: '誤記入', page: 98 },
      { id: 5, title: '時間外預入', page: 99 },
      { id: 6, title: '未取立小切手', page: 100 },
      { id: 7, title: '未取付小切手', page: 101 },
    ],
  },
  {
    id: 6,
    title: '固定資産',
    lessons: [
      { id: 1, title: '固定資産とは', page: 106 },
      { id: 2, title: '固定資産の取得（圧縮記帳）', page: 108 },
      { id: 3, title: '固定資産の取得（割賦購入）', page: 110 },
      { id: 4, title: '減価償却（定額法）', page: 116 },
      { id: 5, title: '減価償却（定率法）', page: 118 },
      { id: 6, title: '減価償却（生産高比率法）', page: 122 },
      { id: 7, title: '固定資産の売却', page: 126 },
      { id: 8, title: '減価償却の記帳方法（間接法と直接法）', page: 128 },
      { id: 9, title: '固定資産の買い替え', page: 130 },
      { id: 10, title: '固定資産の除却・廃棄', page: 132 },
      { id: 11, title: '固定資産の火災', page: 138 },
      { id: 12, title: '建設仮勘定', page: 140 },
      { id: 13, title: '無形固定資産１（特許権・商標権・のれん）', page: 146 },
      { id: 14, title: '無形固定資産２（ソフトウェア）', page: 148 },
      { id: 15, title: 'ソフトウェア勘定', page: 150 },
    ],
  },
  {
    id: 7,
    title: 'リース取引',
    lessons: [
      { id: 1, title: 'リース取引とは', page: 154 },
      { id: 2, title: 'オペレーティング・リース取引', page: 156 },
      { id: 3, title: 'ファイナンス・リース取引', page: 158 },
      { id: 4, title: 'ファイナンス・リース取引（利子込み法）', page: 160 },
      { id: 5, title: 'ファイナンス・リース取引（利子抜き法）', page: 162 },
    ],
  },
  {
    id: 8,
    title: '有価証券',
    lessons: [
      { id: 1, title: '有価証券の種類', page: 170 },
      { id: 2, title: '売買目的有価証券の取得', page: 172 },
      { id: 3, title: '売買目的有価証券の売却', page: 174 },
      { id: 4, title: '売買目的有価証券の時価評価１', page: 176 },
      { id: 5, title: '売買目的有価証券の時価評価２', page: 178 },
      { id: 6, title: '満期保有目的債権の取得', page: 180 },
      { id: 7, title: '満期保有目的債権の償却原価法', page: 182 },
      { id: 8, title: '子会社株式・関連会社株式の取得', page: 186 },
      { id: 9, title: 'その他の有価証券の取得と売却', page: 188 },
      { id: 10, title: 'その他の有価証券の時価評価', page: 190 },
      { id: 11, title: '端数利息', page: 196 },
      { id: 12, title: '有価証券のまとめ', page: 200 },
    ],
  },
  {
    id: 9,
    title: '引当金',
    lessons: [
      { id: 1, title: '引当金の種類', page: 206 },
      { id: 2, title: '貸倒引当金の一括評価と個別評価', page: 208 },
      { id: 3, title: '貸倒引当金の表示', page: 210 },
      { id: 4, title: '商品保証引当金・製品保証引当金', page: 214 },
      { id: 5, title: '固定資産の修繕引当金', page: 216 },
      { id: 6, title: '賞与引当金', page: 218 },
      { id: 7, title: '退職給付引当金', page: 220 },
    ],
  },
  {
    id: 10,
    title: '純資産',
    lessons: [
      { id: 1, title: '純資産とは', page: 226 },
      { id: 2, title: '株式会社の設立', page: 228 },
      { id: 3, title: '増資', page: 230 },
      { id: 4, title: '剰余金の配分と処分', page: 234 },
      { id: 5, title: '株式資本の計数の変動', page: 238 },
    ],
  },
  {
    id: 11,
    title: '税金',
    lessons: [
      { id: 1, title: '法人税等の仕訳', page: 242 },
      { id: 2, title: '法人税等の計算と課税所得', page: 246 },
      { id: 3, title: '税効果会計とは', page: 254 },
      { id: 4, title: '税効果会計（減価償却）', page: 256 },
      { id: 5, title: '税効果会計（貸倒引当金）', page: 259 },
      { id: 6, title: '税効果会計（その他の有価証券）', page: 261 },
      { id: 7, title: 'その他の税金', page: 266 },
    ],
  },
  {
    id: 12,
    title: 'その他の論点',
    lessons: [
      { id: 1, title: '合併１（現金を渡す場合）', page: 272 },
      { id: 2, title: '合併２（株式を渡す場合）', page: 274 },
      { id: 3, title: '合併３（のれん・負ののれん発生益）', page: 276 },
      { id: 4, title: '研究開発費', page: 278 },
      { id: 5, title: '保証債務', page: 282 },
      { id: 6, title: '長期前払費用', page: 284 },
      { id: 7, title: '月次決算', page: 288 },
    ],
  },
  {
    id: 13,
    title: '精算表・財務諸表',
    lessons: [
      { id: 1, title: '精算表の形式', page: 292 },
      { id: 2, title: '精算表（棚卸減耗損などの記入方法）', page: 294 },
      { id: 3, title: '損益計算書', page: 304 },
      { id: 4, title: '貸借対照表', page: 308 },
      { id: 5, title: '株主資本等変動計算表', page: 327 },
      { id: 6, title: '製造業の財務諸表', page: 335 },
    ],
  },
  {
    id: 14,
    title: '本支店会計',
    lessons: [
      { id: 1, title: '本支店会計とは', page: 340 },
      { id: 2, title: '本支店間の取引', page: 342 },
      { id: 3, title: '支店間の取引１（支店分散計算制度）', page: 348 },
      { id: 4, title: '支店間の取引２（本店集中計算制度）', page: 350 },
      { id: 5, title: '決算整理１', page: 354 },
      { id: 6, title: '決算整理２', page: 356 },
      { id: 7, title: '本支店合併財務諸表', page: 358 },
      { id: 8, title: '本店と支店の損益振替', page: 364 },
    ],
  },
  {
    id: 15,
    title: '連結会計',
    lessons: [
      { id: 1, title: '連結会計とは', page: 368 },
      { id: 2, title: '支配獲得日の連結会計１', page: 372 },
      { id: 3, title: '支配獲得日の連結会計２', page: 374 },
      { id: 4, title: '支配獲得日の連結会計３', page: 378 },
      { id: 5, title: '連結第１年度の連結会計', page: 382 },
      { id: 6, title: '連結第２年度の連結会計', page: 392 },
      { id: 7, title: 'タイムテーブルを使った解き方', page: 399 },
      { id: 8, title: '連結会計間の取引の消去', page: 404 },
      { id: 9, title: 'ダウンストリームとアップストリーム', page: 412 },
      { id: 10, title: '貸倒引当金の調整', page: 414 },
      { id: 11, title: '未実現利益の消去１（商品）', page: 422 },
      { id: 12, title: '未実現利益の消去２（土地）', page: 432 },
      { id: 13, title: '連結精算表', page: 442 },
      { id: 14, title: '連結財務諸表', page: 457 },
    ],
  },
]

export default ({}, inject) => {
  inject('secondIndustrialChapters', secondIndustrialChapters)
  inject('secondCommercialChapters', secondCommercialChapters)
}
