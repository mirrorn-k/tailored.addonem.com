import { tCoverState } from "@/context/Transition";

export type tCoverProps = {
  state?: tCoverState | null;
  isActive: boolean;
  duration: number;
  onFinish?: () => void;
};
