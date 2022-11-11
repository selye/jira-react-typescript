import { ReactNode } from "react";
import { AuthProvider } from "context/auth-context";
<<<<<<< Updated upstream
import { QueryClientProvider, QueryClient } from "react-query";
=======

import { Provider } from "react-redux";
import { store } from "store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
>>>>>>> Stashed changes

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>;
    </QueryClientProvider>
  );
};
