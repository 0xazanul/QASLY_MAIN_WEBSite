"use client";

import * as React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "@/lib/query";

export function QueryProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [client] = React.useState(() => createQueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}



