/* eslint-disable @next/next/no-page-custom-font */
'use client';

import StyledComponentsRegistry from './lib/registry';
import GlobalStyles from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import React from 'react';
import NavBar from '@/components/NavBar';
import MainContainer from '@/components/MainContainer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Lexend+Exa:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <StyledComponentsRegistry>
                    <ThemeProvider theme={theme}>
                        <GlobalStyles />
                        <NavBar />
                        <MainContainer>{children}</MainContainer>
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
