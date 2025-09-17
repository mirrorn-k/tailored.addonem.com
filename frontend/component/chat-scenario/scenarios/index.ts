import inquiry from "./inquiry.json";
import type { ScenarioNode } from "@/packages/ui/components/chat-scenario/type";
import { createScenarioMap } from "@/packages/ui/components/chat-scenario/index";

// 型アサーションを使い変換
export const inquiryScenario = inquiry as ScenarioNode[];

const allNodes: ScenarioNode[] = [
  ...inquiryScenario,
  // 他のシナリオを追加
];

export const scenarioMap = createScenarioMap(allNodes);
