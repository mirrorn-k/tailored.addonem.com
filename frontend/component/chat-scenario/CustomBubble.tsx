"use client";

import React from "react";
import type { ScenarioNode, ChoiceOption } from "@/atom/chat-scenario/type";
import * as Options from "@/atom/chat-scenario/Options";
import { useChatContexts } from "@/context/Chat";
import ChatBubble from "@/atom/chat-scenario/ChatBubble";
import { useTransition } from "@/context/Transition";

const Main = ({ node }: { node: ScenarioNode }) => {
  const { admin, goNext } = useChatContexts();
  const { startTransition } = useTransition();
  return (
    <ChatBubble
      key={`SelectBubble-${node.id}-bot`}
      imageSrc={admin.imageSrc}
      name={admin.name}
      message={node.text}
      align="left"
      shape="rounded"
    >
      {node.type === "input" && (
        <Options.Text
          onSubmit={(arg: string) => {
            goNext(arg, node.id);
            startTransition("/contact");
          }}
        />
      )}
      {node.type === "select" && (
        <Options.Select
          options={node.options}
          onSelect={(arg: string[]) => {
            goNext(arg, node.id);
            startTransition("/contact");
          }}
        />
      )}
      {node.type === "choice" && (
        <Options.Choice
          options={node.options}
          onSelect={(arg: ChoiceOption) => {
            goNext(arg.label, node.id);
            startTransition("/contact");
          }}
        />
      )}
    </ChatBubble>
  );
};

export default Main;
