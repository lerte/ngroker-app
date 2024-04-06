/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  export: "output",
  images: {
    unoptimized: true,
  },
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};
