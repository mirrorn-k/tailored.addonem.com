"use client";

import React from "react";
import type { ScenarioNode, ChoiceOption } from "@/atom/chat-scenario/type";
import * as Options from "@/atom/chat-scenario/Options";
import { useContexts as ContextChat } from "@/atom/chat-scenario/Context";
import ChatBubble from "@/atom/chat-scenario/ChatBubble";

import { useRouter } from "next/navigation";

const Main = ({ node }: { node: ScenarioNode }) => {
  const router = useRouter();

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
            router.push("/contact");
          }}
        />
      )}
      {node.type === "select" && (
        <Options.Select
          options={node.options}
          onSelect={(arg: string[]) => {
            goNext(arg, node.id);
            router.push("/contact");
          }}
        />
      )}
      {node.type === "choice" && (
        <Options.Choice
          options={node.options}
          onSelect={(arg: ChoiceOption) => {
            goNext(arg.label, node.id);
            router.push("/contact");
          }}
        />
      )}
    </ChatBubble>
  );
};

export default Main;
