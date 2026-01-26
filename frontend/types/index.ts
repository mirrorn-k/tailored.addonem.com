import { tMedia } from "./ttnouMap";

export type tList01 = {
  uuid: string;
  kbn: string;
  title: string;
  caption: string;
  img?: tMedia;
  released_at: string;
};

export type tNaviMenu = {
  uuid: string;
  title: string;
};

export type tMenu = {
  title: string;
  slug: string;
};
