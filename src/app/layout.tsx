'use client';

import StyledComponentsRegistry from './lib/registry';
import GlobalStyles from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import React from 'react';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
