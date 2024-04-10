"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

export default function Layout({ children }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 transition duration-1000 ease-in-out dark:text-white dark:bg-blueGray-700">
      <Head>
        <title>Pedro Portella | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          defer
          data-domain="pedroportella.com.br"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <div className="flex flex-col items-center justify-center w-2/3">
        <div className="fixed cursor-pointer top-3 right-3">
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="p-2 rounded-xl"
            >
              <RiSunLine size={32} />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")} className="p-2 rounded-xl">
              <RiMoonFill size={32} />
            </button>
          )}
        </div>
        <motion.div
          layoutId="nav"
          className="flex flex-wrap justify-center leading-6"
        >
          <Link href="/">
            <button className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-teal-600 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-teal-600">
              HOME
            </button>
          </Link>
          <Link href="/about">
            <button className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-teal-600 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-teal-600">
              ABOUT
            </button>
          </Link>
        </motion.div>
        <motion.div
          layoutId="border-div"
          className="flex flex-col items-center justify-center w-full py-8 my-6 border-t border-b border-gray-300 dark:border-white"
        >
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </motion.div>
        <motion.div
          layoutId="social-icons"
          className="flex items-center justify-center"
        >
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-teal-600"
            href="https://github.com/pportella23"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl " icon={faGithub} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-teal-600"
            href="https://twitter.com/pportella23"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faTwitter} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-teal-600"
            href="https://www.linkedin.com/in/pportella/"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faLinkedinIn} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
