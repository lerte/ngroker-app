import Link from "next/link";
import Head from "./components/Head";
import Logo from "./components/Logo";
import { useRouter } from "next/router";
import Footer from "./components/Footer";
import EditOnGithub from "./components/EditOnGithub";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  banner: {
    key: "2.0-release",
    text: <Link href="/download">🎉 Ngroker is published. Download Now →</Link>,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Ngroker",
      };
    } else {
      return {
        titleTemplate:
          "Ngroker | Amazingly convenient tunnels to localhost, base on ngrok.",
      };
    }
  },
  head: Head,
  logo: Logo,
  feedback: {
    content: null,
  },
  nextThemes: {
    defaultTheme: "system",
  },
  editLink: {
    component: EditOnGithub,
  },
  project: {
    link: "https://github.com/lerte/ngroker-app",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  footer: {
    text: Footer,
  },
};

export default config;
