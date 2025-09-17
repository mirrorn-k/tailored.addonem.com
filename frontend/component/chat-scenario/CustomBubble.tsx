"use client";

import React from "react";
import type {
  ScenarioNode,
  ChoiceOption,
} from "@/packages/ui/components/chat-scenario/type";
import * as Options from "@/packages/ui/components/chat-scenario/Options";
import { useContexts as ContextChat } from "@/packages/ui/components/chat-scenario/Context";
import ChatBubble from "@/packages/ui/components/chat-scenario/ChatBubble";
import { useTransition } from "@/packages/transition/Context";

const Main = ({ node }: { node: ScenarioNode }) => {
  const { startTransition } = useTransition();

  const { admin, goNext } = ContextChat();
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
