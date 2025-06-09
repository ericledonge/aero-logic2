'use client';

import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const ClientLayout: FC<PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
