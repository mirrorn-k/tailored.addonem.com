import { tMedia } from "./ttnouMap";

export type tList01 = {
  uuid: string;
  kbn: string;
  title: string;
  caption: string;
  img?: tMedia;
  released_at: string;
};

export type tContentMenu = {
  uuid: string;
  title: string;
};

export type tMenu = {
  uuid: string;
  title: string;
  slug: string;
};
