import { QueryClient, DefaultOptions } from "@tanstack/react-query";

const defaultQueryOptions: DefaultOptions = {
  queries: {
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  },
};

export function createQueryClient(): QueryClient {
  return new QueryClient({ defaultOptions: defaultQueryOptions });
}


