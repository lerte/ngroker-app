import { DocsThemeConfig } from "nextra-theme-docs";
import EditOnGithub from "./components/EditOnGithub";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Link from "next/link";
import Logo from "./components/Logo";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  banner: {
    key: "0.1.0",
    text: (
      <Link href="/download">
        🎉 Ngroker 0.1.0 is released now. Add advanced mode, Download Now →
      </Link>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Ngroker - Free ngrok gui client",
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
  sidebar: {
    toggleButton: true,
  },
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
  chat: {
    link: "https://x.com/actifyjs",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-6 h-6"
      >
        <path
          className="fill-current"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
  },
  footer: {
    text: Footer,
  },
};

export default config;
