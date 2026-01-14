import { tMedia } from "@/types/ttnouMap";

export type tPage = {
  uuid: string;
  name: string;
  slug: string;
  settings: tSetting;
  kv: tKv;
  flg_show: boolean;
  meta: Record<string, string> | null;
  structured_data: Record<string, string | number | boolean | null> | null;
  contents: tPageContent[];
};

export type tPageContent =
  | ({ type: "content01" } & tContent01)
  | ({ type: "content02" } & tContent02);

export interface tContent01 {
  title: string;
  media: tMedia | null;
  caption: string;
  linkHref?: string | null;
  linkText?: string;
}

export interface tContent02 {
  media: tMedia;
  title: string;
  caption: string;
  linkHref?: string;
}

// ==============================
// content1（TemplateBase01）
// ==============================
export type tSetting = {
  subtitle: string;
  flgShowFooter: boolean;
  flgShowHeader: boolean;
};

// ==============================
// content2（TemplateBase01）
// ==============================
export type tKv = {
  // 元データ（UUID）
  catchcopy: string;

  // 展開後（アクセサで付与）
  logo: tMedia | null;
  kv: tMedia | null;
};

// ==============================
// content3（TemplateBase01）
// ==============================
export type tContent = {
  name: string;
  type: string;
  content_items: tContentItem[];
};

export type tContentItem = {
  label: string;
  type: string;
  raw_value: string | null;
  content: tMedia | tMedia | null;
};

// ==============================
// Page（APIレスポンス）
// ==============================
export type tPageApiResponce = {
  uuid: string;
  name: string;
  slug: string;
  flg_show: boolean;
  meta: Record<string, string> | null;
  structured_data: Record<string, string | number | boolean | null> | null;

  content1: tSetting | null;
  content2: tKv | null;
  content3: tContent[] | null;
};
