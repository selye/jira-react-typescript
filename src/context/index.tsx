import { ReactNode } from "react";
import { AuthProvider } from "context/auth-context";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>;
    </QueryClientProvider>
  );
};
