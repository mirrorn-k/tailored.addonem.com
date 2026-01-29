import { tSite } from "@/lib/api/site/type";

export const INIT_SITE: tSite = {
  // =========================
  // PK / timestamps
  // =========================
  uuid: "",
  created_at: "",
  updated_at: "",
  deleted_at: null,
  released_at: "",

  // =========================
  // 共通識別
  // =========================
  domain: "",

  // =========================
  // 基本情報
  // =========================
  url: "",
  name: "",
  type: "",

  // =========================
  // ロゴ（media uuid）
  // =========================
  favicon_uuid: "",
  logo_square_uuid: "",
  logo_horizontal_uuid: "",
  logo_full_uuid: null,

  // =========================
  // リレーション
  // =========================
  favicon: null,

  logo_full: null,
  logo_square: null,
  logo_horizontal: null,

  // =========================
  // フラグ
  // =========================
  flg_wdc: true,

  // =========================
  // 外部タグ
  // =========================
  gtm_tag: "",

  // =========================
  // Basic認証（JSON）
  // =========================
  basic_auth: {
    flg: true,
    user: "",
    pass: "",
    ips: [],
  },

  // =========================
  // メタ情報（JSON）
  // =========================
  meta: {
    title: "",
    description: "",
    keywords: "",
  },

  // =========================
  // 構造化データ（JSON-LD）
  // =========================
  structured_data: {},

  // =========================
  // CSS
  // =========================
  css: ``,

  // =========================
  // ヘッダー
  // =========================
  header: {
    type: "",
    flg: false,
    title: "",
    flgLogo: false,
    flgShow: false,
    flgMenus: false,
    flgContactButton: false,
    logo: null,
    customCss: ``,
  },

  // =========================
  // フッター
  // =========================
  footer: {
    type: "",
    flgFax: false,
    flgTel: false,
    flgLogo: false,
    flgEmail: false,
    flgMenus: false,
    flgAddress: false,
    logo: null,
    text: "",
    copyright: "",
    customCss: ``,
  },
};

/////////////////////////////////////////////////////

import { tOrganize } from "@/lib/api/organize/type";

export const INIT_ORGANIZE: tOrganize = {
  number: "", // 法人番号（13桁想定）
  domain: "",
  organization_name: "",
  ceo_name: "",
  ceo_post_name: "",
  tell: "",
  fax: "",
  postal_code: "",
  address: "",
  address_other: "",
  email: "",
  google_map: "",
  google_map_link: "",
  caption: "",
  gtm_tag: "",
};
