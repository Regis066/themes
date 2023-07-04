import * as React from 'react';
import { ThemeConfig, RadixThemesProvider, Avatar, Flex, ThemePanel } from '@radix-ui/themes';

export default function Test() {
  return (
    <ThemeConfig asChild accentScale="purple" radius="full">
      <html lang="en">
        <body>
          <div id="root">
            <RadixThemesProvider>
              <ThemePanel />
              <Flex align="center" gap="3">
                <Avatar src="./api/avatar" fallback="BG" />

                <Avatar src="#" fallback="BG" />

                <Avatar fallback="BG" />
                <Avatar fallback={<CustomUserIcon />} />
              </Flex>
            </RadixThemesProvider>
          </div>
        </body>
      </html>
    </ThemeConfig>
  );
}

function CustomUserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        clipRule="evenodd"
      />
    </svg>
  );
}
