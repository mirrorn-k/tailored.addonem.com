export type Dir = "up" | "down" | "left" | "right";

export type tCoverState = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  payload?: unknown;
};

export type Phase =
  | "idle" // 通常表示
  | "first" // 初回カバー
  | "cover-in" // カバー侵入中
  | "covered" // 完全に覆っている
  | "cover-out"; // カバー退出中

export type tCoverProps = {
  duration: number;
  state?: tCoverState | null;
  phase: Phase;
};
