import React from "react";
import Head from "./components/Head";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditOnGithub from "./components/EditOnGithub";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps: () => ({ titleTemplate: "%s – Ngroker" }),
  head: Head,
  // navbar: {
  //   component: Navbar,
  // },
  logo: Logo,
  feedback: {
    content: null,
  },
  nextThemes: {
    defaultTheme: "dark",
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
    text: Footer,
  },
};

export default config;
