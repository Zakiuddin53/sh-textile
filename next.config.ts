import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@mantine/core",
    "@mantine/hooks",
    "@mantine/form",
    "@mantine/dates",
    "@mantine/notifications",
    "@mantine/modals",
    "@mantine/nprogress",
  ],
};

export default nextConfig;
