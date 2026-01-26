import { tOrganize } from "@/lib/api/organize/type";

export const DUMMY_ORGANIZE: tOrganize = {
  number: "1234567890123", // 法人番号（13桁想定）
  domain: "example.com",
  organization_name: "株式会社サンプル",
  ceo_name: "山田 太郎",
  ceo_post_name: "代表取締役",
  tell: "03-1234-5678",
  fax: "03-1234-5679",
  postal_code: "100-0001",
  address: "東京都千代田区千代田1-1",
  address_other: "サンプルビル 10F",
  email: "info@example.com",
  google_map: "https://www.google.com/maps?q=東京都千代田区千代田1-1",
  google_map_link: "https://maps.app.goo.gl/xxxxxxxxxxxx",
  caption: "ビジネスに、確かなデジタル基盤を。",
  gtm_tag: "GTM-XXXXXXX",
};
