"use client";

import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import SpeechBubble from "@/atom/chat-scenario/ChatBubble";
import { useChatContexts } from "@/context/Chat";
import HistoryView from "@/atom/chat-scenario/Histories";
import * as Options from "@/atom/chat-scenario/Options";
import type { ChoiceOption } from "@/atom/chat-scenario/type";

export default function Main() {
  const { currentId, history, node, admin, customer, goNext } =
    useChatContexts();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history.list.length, currentId]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <HistoryView />

      <SpeechBubble
        key={`${node.id}-bot-${history.list.length} + 1`}
        imageSrc={admin.imageSrc}
        name={admin.name}
        message={node.text}
        align="left"
        shape="rounded"
      />
      {node.type !== "message" && (
        <SpeechBubble
          key={`${node.id}-user-${history.list.length + 1}`}
          imageSrc={customer.imageSrc}
          name={customer.name}
          align="right"
        >
          {node.type === "input" && (
            <Options.Text
              onSubmit={(arg: string) => {
                goNext(arg);
              }}
            />
          )}
          {node.type === "select" && (
            <Options.Select
              options={node.options}
              onSelect={(arg: string[]) => {
                goNext(arg);
              }}
            />
          )}
          {node.type === "choice" && (
            <Options.Choice
              options={node.options}
              onSelect={(arg: ChoiceOption) => {
                goNext(arg.label);
              }}
            />
          )}
        </SpeechBubble>
      )}

      <div ref={bottomRef} />
      <Typography variant="caption" color="textSecondary" align="center">
        {history.list.length} steps - Current ID: {currentId}
      </Typography>
    </Box>
  );
}
