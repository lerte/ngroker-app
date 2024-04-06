/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};
