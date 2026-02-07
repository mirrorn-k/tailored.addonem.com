import { tSite } from "@/lib/api/site/type";
import { IMAGE_DEFAULT } from "@/const/Image";

export const DUMMY_SITE: tSite = {
  // =========================
  // PK / timestamps
  // =========================
  uuid: "site-uuid-001",
  created_at: "2026-01-01 10:00:00",
  updated_at: "2026-01-20 18:30:00",
  deleted_at: null,
  released_at: "2026-01-10 00:00:00",

  // =========================
  // 共通識別
  // =========================
  domain: "example.com",

  // =========================
  // 基本情報
  // =========================
  url: "https://example.com",
  name: "テストサイト",
  type: "corporate",

  // =========================
  // ロゴ（media uuid）
  // =========================
  favicon_uuid: "media-uuid-favicon",
  logo_square_uuid: "media-uuid-square",
  logo_horizontal_uuid: "media-uuid-horizontal",
  logo_full_uuid: null,

  // =========================
  // リレーション
  // =========================
  favicon: IMAGE_DEFAULT,

  logo_full: IMAGE_DEFAULT,
  logo_square: IMAGE_DEFAULT,
  logo_horizontal: IMAGE_DEFAULT,

  // =========================
  // フラグ
  // =========================
  flg_wdc: true,

  // =========================
  // 外部タグ
  // =========================
  gtm_tag: "GTM-XXXXXXX",

  // =========================
  // Basic認証（JSON）
  // =========================
  basic_auth: {
    flg: true,
    user: "testuser",
    pass: "testpass",
    ips: ["192.168.0.1", "203.0.113.10"],
  },

  // =========================
  // メタ情報（JSON）
  // =========================
  meta: {
    title: "テストサイト｜Example",
    description: "これはテスト用のサイトです。",
    keywords: "テスト, サンプル, Example",
  },

  // =========================
  // 構造化データ（JSON-LD）
  // =========================
  structured_data: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "テストサイト",
    url: "https://example.com",
  },

  // =========================
  // CSS
  // =========================
  css: `
    body {
      background-color: #ffffff;
    }
    header {
      border-bottom: 1px solid #eee;
    }
  `,

  // =========================
  // ヘッダー
  // =========================
  header: {
    type: "default",
    flg: true,
    title: "テストサイト",
    flgLogo: true,
    flgShow: true,
    flgMenus: true,
    flgContactButton: true,
    logo: IMAGE_DEFAULT,
    customCss: `
      .header {
        background-color: #f8f8f8;
      }
    `,
  },

  // =========================
  // フッター
  // =========================
  footer: {
    type: "footer01",
    flgFax: false,
    flgTel: true,
    flgLogo: true,
    flgEmail: true,
    flgMenus: true,
    flgAddress: true,
    logo: IMAGE_DEFAULT,
    text: "株式会社サンプル",
    copyright: "© 2026 Sample Inc.",
    customCss: `
      .footer {
        background-color: #222;
        color: #fff;
      }
    `,
  },
};
