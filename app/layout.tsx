/* eslint-disable @next/next/no-page-custom-font */
import "./styles/hellogpt.scss";
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";

import { getBuildConfig } from "./config/build";

const buildConfig = getBuildConfig();

export const metadata = {
  title: "ChatGPT-Midjourney",
  description: "Your personal ChatGPT+Midjourney Chat Bot.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "ChatGPT-Midjourney",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="version" content={buildConfig.commitId} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
