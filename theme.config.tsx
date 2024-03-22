import React from "react";
import EditOnGithub from "./components/EditOnGithub";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <strong>Ngroker</strong>,
  feedback: {
    content: null,
  },
  editLink: {
    component: EditOnGithub,
  },
  project: {
    link: "https://github.com/lerte/ngroker.com",
  },
  chat: {
    link: "https://discord.com",
  },
  footer: {
    text: "Copyright © 2024 Ngroker Inc.",
  },
};

export default config;
