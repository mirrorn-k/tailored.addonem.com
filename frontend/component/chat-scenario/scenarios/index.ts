import inquiry from "./inquiry.json";
import type { ScenarioNode } from "@/atom/chat-scenario/type";
import { createScenarioMap } from "@/atom/chat-scenario/index";

// 型アサーションを使い変換
export const inquiryScenario = inquiry as ScenarioNode[];

const allNodes: ScenarioNode[] = [
  ...inquiryScenario,
  // 他のシナリオを追加
];

export const scenarioMap = createScenarioMap(allNodes);
