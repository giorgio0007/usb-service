"use client";

import { MessengerMenu } from "@/shared/ui/MessengerMenu";

export function ChatWidget() {
  return (
    <div className="fixed right-5 bottom-5 z-50 sm:right-6 sm:bottom-6">
      <MessengerMenu variant="fab" />
    </div>
  );
}
