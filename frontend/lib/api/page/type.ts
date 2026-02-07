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
  marqueeMessages?: tMarqueeMessages;
};

export type tPageContent =
  | ({ type: "content01" } & tContent01)
  | ({ type: "content02" } & tContent02)
  | ({ type: "content03" } & tContent03)
  | ({ type: "content04" } & tContent04);

export interface tContent01 {
  uuid: string;
  title: string;
  titleImg?: tMedia;
  caption: string;
}

export interface tContent02 {
  uuid: string;
  media: tMedia;
  title: string;
  caption: string;
  linkHref?: string;
}

export interface tContent03 {
  uuid: string;
  media: tMedia;
  title: string;
  titleImg?: tMedia;
  caption: string;
  linkText?: string;
  linkHref?: string;
}

export interface tContent04 {
  uuid: string;
  title: string;
  titleImg?: tMedia;
  url: string;
  width?: string;
  height?: string;
  caution?: string;
}

// ==============================
// content1（TemplateBase02）
// ==============================
export type tSetting = {
  subtitle: string;
  flgShowFooter: boolean;
  flgShowHeader: boolean;
};

// ==============================
// content2（TemplateBase02）
// ==============================
export type tKv = {
  // 元データ（UUID）
  catchcopy: string;

  // 展開後（アクセサで付与）
  logo: tMedia | null;
  kv: tMedia | null;
};

// ==============================
// content3（TemplateBase02）
// ==============================
export type tContent = {
  uuid: string;
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
// content4（TemplateBase02）
// ==============================
export type tMarqueeMessages = {
  right?: tMarqueeMessage;
  left?: tMarqueeMessage;
  top?: tMarqueeMessage;
  bottom?: tMarqueeMessage;
};

export type tMarqueeMessage = {
  message: string;
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
  content4: tMarqueeMessages;
};
