"use client";

import Link from "next/link";
// import Button from '../button/Button';
import * as Icon from "react-icons/lu";
import * as React from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useMediaQuery } from "@/app/utils/useMediaQuery";

const menuVariants: Variants = {
  hide: { scaleY: 0 },
  show: { scaleY: 1 },
};

function TopBar() {
  return (
    <div className="w-full flex justify-end items-center h-auto bg-darky-800 ">
      <Link
        href="callto:18889176375"
        className="py-2 pl-4 pr-2 inline-flex items-center text-darky-800 bg-primary-400 hover:bg-primary-500"
      >
        {" "}
        <Icon.LuPhone size="18" />{" "}
        <span className="px-3 font-semibold text-sm"> Soumission rapide </span>{" "}
      </Link>
    </div>
  );
}

function NavMobile() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen((o) => !o);
  return (
    <div className="flex flex-col h-auto w-full">
      <TopBar />
      <motion.nav className="sticky top-0 z-10 flex w-full flex-col items-center justify-between font-medium text-md">
        <div className="h-auto w-full flex items-center justify-between bg-white md:px-12 px-4 shadow py-3">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="48px"
              x={0}
              y={0}
              enableBackground="new 0 0 2180 2180"
              viewBox="0 0 2180 2180"
            >
              <path
                id="bg"
                d="M1018.8 2078.6c-14.4-4.7-29.4-9.9-44.5-15.3l-3.5-1.3-1.5-.6c-78.6-28.8-155.6-64.5-229-106.2-28.9-16.3-57.9-34.1-86.2-52.7-31.7-20.8-63.2-43.1-93.3-66.2-31.5-24.2-62.3-49.7-91.6-76-28.9-25.9-56.4-52.5-81.9-79-30.1-31.1-59.3-64.1-86.6-97.7-19.9-24.5-39.2-49.8-57.3-75.1-102.6-143.9-156.8-313.7-156.8-491.1V443.6l85.2-63.1 8.1-5.9c33.7-24.7 68.8-48.2 104.1-70 25.8-15.9 52.3-31.2 78.8-45.4 28-15 57.1-29.5 86.6-43 27.7-12.6 55.3-24.3 82.2-34.7 29.2-11.4 60.1-22.3 91.7-32.4 31.3-9.9 62.8-18.7 93.8-26.4 27.6-6.9 56.5-13.2 86-18.7 77.9-14.6 157.7-23.2 237.3-25.7 15.4-.5 31.6-.8 49.4-.8 14.1 0 26 .2 37.5.5 91 2.1 182.4 12.2 271.5 30 28.5 5.7 57.5 12.3 85.9 19.6 28.9 7.5 58.2 15.9 87 25.1 82.7 26.5 163.8 60.2 241.2 100 62.5 32 124 68.9 182.7 109.6l97.6 67.6v578.2c0 186.2-52.7 354.3-156.7 499.9-18.5 25.9-38.3 51.8-58.7 76.9-25.4 31.2-52.4 61.7-80.1 90.9-75.3 78.9-159.1 150-249.1 211.4-27.9 19-56.9 37.5-86.1 54.7-86.9 51.3-178.8 94.1-273.2 127.1-9.6 3.3-19 6.5-28.5 9.6l-71.1 23.5-70.9-23.5z"
                fill="#3A4349"
              />
              <g id="letters">
                <path
                  d="M1797.4 1339.1c53.4-92.7 81.6-198.8 81.6-307.3V551.2c-26.5-18.3-53.9-35.9-81.6-52.4v840.3zm-1.6 5.6c55.4-94.2 84.6-202.1 84.6-312.9V550.4c-27.4-19-55.9-37.2-84.6-54.2v848.5m163.8-833.6v520.7c0 12.2-.3 24.9-1 37.6 0 .4 0 .8-.1 1.2-.1 1.7-.2 3.3-.3 4.9-9 125.7-47.8 241-115.2 342.8l-.3.4-6.3 9.3c-1.9 2.8-3.8 5.5-5.9 8.5l-1.5 2.1-1.5 2.1-1.8 2.5-3.2 4.5c-4.9 6.7-9.7 13.1-14.3 19.2-6.5 8.6-12 15.6-17.1 22.1-6.7 8.6-13.6 17.2-20.6 25.6-.3.4-.6.8-1 1.2-.3.4-.6.7-.9 1.1-5.9 7.2-12.1 14.6-18.9 22.5-6.7 7.8-13.6 15.7-20.6 23.5l-7.1 7.9c-.6.7-1.4 1-2.3 1-.4 0-.7-.1-1.1-.2-1.2-.5-2-1.6-2-2.8V369.2c0-1 .5-2 1.4-2.6.5-.3 1.1-.5 1.6-.5.4 0 .9.1 1.3.3l5.9 2.8c80.2 38.8 157.6 85.3 229.9 138.2l1.6 1.2c.9.6 1.3 1.5 1.3 2.5zm-160.7 822.2V501.5c26.6 15.9 53 32.8 78.5 50.5v479.9c0 106.1-27.1 210.1-78.5 301.4zM1211.2 298.9v556.2h1c22.8 2.9 48.1-1.5 66.8 0h18.7c1.6.1 2.9-1.6 2.9 0v90.5c0 .8-.4-.6-1 0-.6.5-1.3 0-2.1 0h-4.5c-25.1-1.7-55.6 3-80.6 0h-1.3V1847c49.9-21.7 99-46.8 146.2-74.6.5-.3 1-.4 1.6-.4.5 0 1 .1 1.5.4 1 .5 1.5 1.6 1.5 2.6v78.3c0 1.1-.6 2.1-1.6 2.7-75.9 42-155.7 77-237.4 104-.3.1-.6.2-1 .2-.6 0-1.3-.2-1.8-.6-.8-.6-1.3-1.5-1.3-2.5V222.8c0-.8.3-1.6.9-2.2.6-.6 1.3-.9 2.1-.9h.1c79.3 1.7 159.2 10.1 237.4 24.9 1.4.3 2.5 1.5 2.5 3V317c0 .9-.4 1.8-1.1 2.4-.6.5-1.2.7-1.9.7-.2 0-.4 0-.6-.1-47.9-9.6-97.3-16.7-147-21.1zm-823.3 330V492.8c-29.1 18.1-58.1 37.6-86.1 58.1l-7.1 5.1v195l.6.3c43.8 23.9 87.2 50.6 129.2 79.5 11.9 8.2 23.3 16.2 34.9 24.7l1.6 1.2c.8.6 1.2 1.5 1.2 2.4V1560c0 1.2-.8 2.4-1.9 2.8-.4.1-.8.2-1.1.2-.8 0-1.6-.3-2.2-.9l-30.6-31.9c-17.6-20.7-34.9-42.2-51.3-63.8-7.9-10.3-16.3-21.7-25.6-34.6-80.9-113.4-125.4-247.4-128.8-387.6l-.1-2.2c0-1 .5-2 1.3-2.6l1.8-1.3c20-13.7 40.2-26.8 60.1-39l5.2-3.2 1-.6c.5-.3 1.1-.5 1.6-.5s1 .1 1.5.4c1 .5 1.6 1.6 1.6 2.7v32.4c0 115.2 31.4 227.5 90.7 324.8l2 3.2.1-3.7c.2-6.9.4-13.9.4-21.9v-428l-.5-.3c-31.9-22.1-64.9-43.1-98.2-62.3-.1 0-.4-.2-.4-.3-21.3-12.3-43-24.1-64.5-35.1l-2.2-1.2c-1-.5-1.6-1.6-1.6-2.7V520.3c0-1 .5-1.9 1.2-2.5l36.4-26.7c63.4-46.4 130.6-87.6 199.8-122.5.4-.2.9-.3 1.4-.3.6 0 1.1.2 1.6.5.9.6 1.4 1.5 1.4 2.6v253.8c0 21.9-1 43.6-2.9 64.6l-.2 2.3c-.1 1.1-.7 2-1.7 2.5l-2.1 1c-20.4 9.9-41.9 20.9-63.7 32.8l-7.1 3.9c-.5.3-1 .4-1.5.4-.6 0-1.2-.2-1.7-.5-1-.7-1.4-1.8-1.3-2.9l1.2-8.1c4.4-30.4 6.6-61.4 6.6-92.3zm1265.3 905.3v105.6c0 .8-.3 1.6-.9 2.2-24.4 23.2-50 45.8-76.2 67.4-.4.3-.9.5-1.3.6l-5.5 4.5c-13.7 11.3-27.8 22.5-42 33.2-.4.3-.7.5-1.1.8l-1.2.9c-29 21.7-59.2 42.6-89.7 62-.5.3-1.1.5-1.6.5s-1-.1-1.5-.4c-1-.5-1.6-1.6-1.6-2.7V264c0-.9.4-1.8 1.2-2.4.5-.4 1.2-.7 1.9-.7.2 0 .5 0 .7.1 24.8 6 50.3 13 76 20.8 1.3.4 2.2 1.6 2.2 2.9v1371.7l1.8-1.5c20-16.2 39.5-32.9 57.9-49.6 23.3-21 46.4-43.2 68.6-66.1l7-7.2c.6-.6 1.4-.9 2.2-.9.4 0 .8.1 1.1.2 1.2.6 2 1.7 2 2.9zM1061 1885.8v71.4c0 1-.5 1.9-1.3 2.5-.5.4-1.2.6-1.8.6-.3 0-.6-.1-1-.2-74.4-24.6-147.6-55.9-217.4-93.1-1-.5-1.6-1.6-1.6-2.7v-78.4c0-1 .5-2 1.3-2.5.5-.3 1.1-.5 1.7-.5.4 0 .8.1 1.1.2l5.6 2.3c8.3 3.4 17.3 6.7 25.2 9.7l.9.4c9 3.3 15.7 5.9 21.6 8.3l1.5.6V307.3c-18.8 2.7-37.4 5.8-55.5 9.1-.2 0-.4.1-.6.1-.7 0-1.4-.2-1.9-.7-.7-.6-1.1-1.4-1.1-2.3v-69.2c0-1.5 1.1-2.7 2.5-3 31.2-5.6 63.3-10.1 95.3-13.6 10.9-1.1 22-2.1 33-3.1 25-2.1 49.9-3.5 74.1-4.2l4.2-.1h.1c.8 0 1.6.3 2.1.9.6.6.9 1.4.9 2.2v67.9c0 1.6-1.3 3-3 3-20.4.6-41.5 1.8-63 3.5v1553l15.8 7.2.7.3c14.9 6.8 26.7 12.2 42.1 18.4l.7.3.8.3c3.3 1.3 6.9 2.7 12.1 4.7l2.6 1c1.6.4 2.3 1.5 2.3 2.8zM769.4 280.2v1556.6c0-14.1-.6-13.1-1.6-12.6-.5.3-1 .4-1.5.4-.6 0-1.1-.1-1.6-.4-7-4.3-14.2-8.8-22.2-14-.3-.2-.6-.4-.8-.6-9.5-6.8-13.4-13.7-23-21l-4.2-3.2c-7.6-5.9-15.8-12.2-24.5-18.7l-1.6-1.2c-.8-.6-1.2-1.5-1.2-2.4V945.7h-.9c-13.2-1.7-37.5 1.2-54.4 0h-4.1c-6.9-.5-13.1.4-18.2 0h-1.2v761.1c0 1.2-.7 2.3-1.7 2.8-.4.2-.9.3-1.3.3-.7 0-1.4-.2-1.9-.7-14.4-11.8-28.9-24.3-43.2-37.1-.2-.1-.4-.3-.6-.5l-.7-.8c-.5-.6-1-1.2-1.6-1.8l-2-2.3c-6.9-7.6-14-15.5-21.8-23.4l-1.2-1.2c-.5-.6-.8-1.3-.8 13.1V358.6c0-16.4.7-17.5 1.8-18l2.3-1.1c7.7-3.6 14.8-7.1 21.7-10.6l.5-.3 1-.5c12.8-6.4 24.9-12.4 40-18.2l5.5-2.1c.4-.1.7-.2 1.1-.2.6 0 1.2.2 1.7.5.8.6 1.3 1.5 1.3 2.5v544.5h1c6.1.5 13.9-.6 22.3 0h.6c17 1.2 41.3-1.5 53.6 0h1.2V288.9c0-1.3.9-2.5 2.1-2.9l17.6-5.5c17.4-5.5 32.1-11.8 53.6-17.2l5.1-1.2c.2-.1.5-.1.7-.1.7 0 1.3.2 1.9.7.7.5 1.2 1.4 1.2 17.5z"
                  fill="#fff"
                />
              </g>
            </svg>
          </Link>
          <button className="text-darky-600" onClick={toggleOpen}>
            {" "}
            {isOpen ? <Icon.LuX size="28" /> : <Icon.LuMenu size="28" />}
          </button>
        </div>
        <AnimatePresence mode="sync">
          {isOpen && (
            <motion.div
              className="w-full border-t-2 border-darky-400 flex flex-col items-start justify-center bg-darky-100"
              layout
              initial="hide"
              animate="show"
              exit="hide"
              style={{ originY: 0 }}
              key={isOpen ? "open" : "closed"}
            >
              <Link
                className="text-base font-semibold text-darky-700 bg-white hover:text-darky-400 border-b-2 border-darky-200 p-7 h-full w-full"
                href="/services"
              >
                {" "}
                Nos services{" "}
              </Link>

              <Link
                className="text-base font-semibold  bg-white text-darky-700 hover:text-darky-400 p-7 w-full h-full border-b-2 border-darky-200"
                href="/about"
              >
                {" "}
                L'entreprise{" "}
              </Link>

              <Link
                className="text-base font-semibold  bg-white text-darky-700 hover:text-darky-400 p-7 w-full h-full border-b-2 border-darky-200"
                href="/job"
              >
                {" "}
                Carrières{" "}
              </Link>

              <Link
                className="text-base font-semibold  bg-white text-darky-700 hover:text-darky-400 p-7 border-b-2 border-darky-200 w-full h-full "
                href="/contact"
              >
                {" "}
                Nous joindre{" "}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

function DesktopNav() {
  const { scrollYProgress } = useScroll();
  const [atPageStart, setAtPageStart] = React.useState(true);
  const [scrollingUp, setScrollingUp] = React.useState(true);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setAtPageStart(v < 0.05);
    setScrollingUp(v < 0.25 || scrollYProgress.getVelocity() < 0);
  });

  return (
    <header className="w-full h-auto">
      <motion.nav
        className="sticky top-0 z-10 flex w-full h-18 py-5 px-12 bg-white items-center gap-2 justify-between drop-shadow-sm"
        variants={menuVariants}
        animate={[
          atPageStart ? "transparent" : "solid",
          scrollingUp ? "show" : "hidden",
        ]}
        layout
      >
        <Link
          href="/"
          className="flex font-normal items-center text-darky-700 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            id="logo"
            width="57px"
            enableBackground="new 0 0 2180 2180"
            viewBox="0 0 2180 2180"
          >
            <path
              id="bg"
              d="M1018.8 2078.6c-14.4-4.7-29.4-9.9-44.5-15.3l-3.5-1.3-1.5-.6c-78.6-28.8-155.6-64.5-229-106.2-28.9-16.3-57.9-34.1-86.2-52.7-31.7-20.8-63.2-43.1-93.3-66.2-31.5-24.2-62.3-49.7-91.6-76-28.9-25.9-56.4-52.5-81.9-79-30.1-31.1-59.3-64.1-86.6-97.7-19.9-24.5-39.2-49.8-57.3-75.1-102.6-143.9-156.8-313.7-156.8-491.1V443.6l85.2-63.1 8.1-5.9c33.7-24.7 68.8-48.2 104.1-70 25.8-15.9 52.3-31.2 78.8-45.4 28-15 57.1-29.5 86.6-43 27.7-12.6 55.3-24.3 82.2-34.7 29.2-11.4 60.1-22.3 91.7-32.4 31.3-9.9 62.8-18.7 93.8-26.4 27.6-6.9 56.5-13.2 86-18.7 77.9-14.6 157.7-23.2 237.3-25.7 15.4-.5 31.6-.8 49.4-.8 14.1 0 26 .2 37.5.5 91 2.1 182.4 12.2 271.5 30 28.5 5.7 57.5 12.3 85.9 19.6 28.9 7.5 58.2 15.9 87 25.1 82.7 26.5 163.8 60.2 241.2 100 62.5 32 124 68.9 182.7 109.6l97.6 67.6v578.2c0 186.2-52.7 354.3-156.7 499.9-18.5 25.9-38.3 51.8-58.7 76.9-25.4 31.2-52.4 61.7-80.1 90.9-75.3 78.9-159.1 150-249.1 211.4-27.9 19-56.9 37.5-86.1 54.7-86.9 51.3-178.8 94.1-273.2 127.1-9.6 3.3-19 6.5-28.5 9.6l-71.1 23.5-70.9-23.5z"
            />
            <path
              id="letters"
              d="M1797.4 1339.1c53.4-92.7 81.6-198.8 81.6-307.3V551.2c-26.5-18.3-53.9-35.9-81.6-52.4v840.3zm-1.6 5.6c55.4-94.2 84.6-202.1 84.6-312.9V550.4c-27.4-19-55.9-37.2-84.6-54.2v848.5m163.8-833.6v520.7c0 12.2-.3 24.9-1 37.6 0 .4 0 .8-.1 1.2-.1 1.7-.2 3.3-.3 4.9-9 125.7-47.8 241-115.2 342.8l-.3.4-6.3 9.3c-1.9 2.8-3.8 5.5-5.9 8.5l-1.5 2.1-1.5 2.1-1.8 2.5-3.2 4.5c-4.9 6.7-9.7 13.1-14.3 19.2-6.5 8.6-12 15.6-17.1 22.1-6.7 8.6-13.6 17.2-20.6 25.6-.3.4-.6.8-1 1.2-.3.4-.6.7-.9 1.1-5.9 7.2-12.1 14.6-18.9 22.5-6.7 7.8-13.6 15.7-20.6 23.5l-7.1 7.9c-.6.7-1.4 1-2.3 1-.4 0-.7-.1-1.1-.2-1.2-.5-2-1.6-2-2.8V369.2c0-1 .5-2 1.4-2.6.5-.3 1.1-.5 1.6-.5.4 0 .9.1 1.3.3l5.9 2.8c80.2 38.8 157.6 85.3 229.9 138.2l1.6 1.2c.9.6 1.3 1.5 1.3 2.5zm-160.7 822.2V501.5c26.6 15.9 53 32.8 78.5 50.5v479.9c0 106.1-27.1 210.1-78.5 301.4zM1211.2 298.9v556.2h1c22.8 2.9 48.1-1.5 66.8 0h18.7c1.6.1 2.9-1.6 2.9 0v90.5c0 .8-.4-.6-1 0-.6.5-1.3 0-2.1 0h-4.5c-25.1-1.7-55.6 3-80.6 0h-1.3V1847c49.9-21.7 99-46.8 146.2-74.6.5-.3 1-.4 1.6-.4.5 0 1 .1 1.5.4 1 .5 1.5 1.6 1.5 2.6v78.3c0 1.1-.6 2.1-1.6 2.7-75.9 42-155.7 77-237.4 104-.3.1-.6.2-1 .2-.6 0-1.3-.2-1.8-.6-.8-.6-1.3-1.5-1.3-2.5V222.8c0-.8.3-1.6.9-2.2.6-.6 1.3-.9 2.1-.9h.1c79.3 1.7 159.2 10.1 237.4 24.9 1.4.3 2.5 1.5 2.5 3V317c0 .9-.4 1.8-1.1 2.4-.6.5-1.2.7-1.9.7-.2 0-.4 0-.6-.1-47.9-9.6-97.3-16.7-147-21.1zm-823.3 330V492.8c-29.1 18.1-58.1 37.6-86.1 58.1l-7.1 5.1v195l.6.3c43.8 23.9 87.2 50.6 129.2 79.5 11.9 8.2 23.3 16.2 34.9 24.7l1.6 1.2c.8.6 1.2 1.5 1.2 2.4V1560c0 1.2-.8 2.4-1.9 2.8-.4.1-.8.2-1.1.2-.8 0-1.6-.3-2.2-.9l-30.6-31.9c-17.6-20.7-34.9-42.2-51.3-63.8-7.9-10.3-16.3-21.7-25.6-34.6-80.9-113.4-125.4-247.4-128.8-387.6l-.1-2.2c0-1 .5-2 1.3-2.6l1.8-1.3c20-13.7 40.2-26.8 60.1-39l5.2-3.2 1-.6c.5-.3 1.1-.5 1.6-.5s1 .1 1.5.4c1 .5 1.6 1.6 1.6 2.7v32.4c0 115.2 31.4 227.5 90.7 324.8l2 3.2.1-3.7c.2-6.9.4-13.9.4-21.9v-428l-.5-.3c-31.9-22.1-64.9-43.1-98.2-62.3-.1 0-.4-.2-.4-.3-21.3-12.3-43-24.1-64.5-35.1l-2.2-1.2c-1-.5-1.6-1.6-1.6-2.7V520.3c0-1 .5-1.9 1.2-2.5l36.4-26.7c63.4-46.4 130.6-87.6 199.8-122.5.4-.2.9-.3 1.4-.3.6 0 1.1.2 1.6.5.9.6 1.4 1.5 1.4 2.6v253.8c0 21.9-1 43.6-2.9 64.6l-.2 2.3c-.1 1.1-.7 2-1.7 2.5l-2.1 1c-20.4 9.9-41.9 20.9-63.7 32.8l-7.1 3.9c-.5.3-1 .4-1.5.4-.6 0-1.2-.2-1.7-.5-1-.7-1.4-1.8-1.3-2.9l1.2-8.1c4.4-30.4 6.6-61.4 6.6-92.3zm1265.3 905.3v105.6c0 .8-.3 1.6-.9 2.2-24.4 23.2-50 45.8-76.2 67.4-.4.3-.9.5-1.3.6l-5.5 4.5c-13.7 11.3-27.8 22.5-42 33.2-.4.3-.7.5-1.1.8l-1.2.9c-29 21.7-59.2 42.6-89.7 62-.5.3-1.1.5-1.6.5s-1-.1-1.5-.4c-1-.5-1.6-1.6-1.6-2.7V264c0-.9.4-1.8 1.2-2.4.5-.4 1.2-.7 1.9-.7.2 0 .5 0 .7.1 24.8 6 50.3 13 76 20.8 1.3.4 2.2 1.6 2.2 2.9v1371.7l1.8-1.5c20-16.2 39.5-32.9 57.9-49.6 23.3-21 46.4-43.2 68.6-66.1l7-7.2c.6-.6 1.4-.9 2.2-.9.4 0 .8.1 1.1.2 1.2.6 2 1.7 2 2.9zM1061 1885.8v71.4c0 1-.5 1.9-1.3 2.5-.5.4-1.2.6-1.8.6-.3 0-.6-.1-1-.2-74.4-24.6-147.6-55.9-217.4-93.1-1-.5-1.6-1.6-1.6-2.7v-78.4c0-1 .5-2 1.3-2.5.5-.3 1.1-.5 1.7-.5.4 0 .8.1 1.1.2l5.6 2.3c8.3 3.4 17.3 6.7 25.2 9.7l.9.4c9 3.3 15.7 5.9 21.6 8.3l1.5.6V307.3c-18.8 2.7-37.4 5.8-55.5 9.1-.2 0-.4.1-.6.1-.7 0-1.4-.2-1.9-.7-.7-.6-1.1-1.4-1.1-2.3v-69.2c0-1.5 1.1-2.7 2.5-3 31.2-5.6 63.3-10.1 95.3-13.6 10.9-1.1 22-2.1 33-3.1 25-2.1 49.9-3.5 74.1-4.2l4.2-.1h.1c.8 0 1.6.3 2.1.9.6.6.9 1.4.9 2.2v67.9c0 1.6-1.3 3-3 3-20.4.6-41.5 1.8-63 3.5v1553l15.8 7.2.7.3c14.9 6.8 26.7 12.2 42.1 18.4l.7.3.8.3c3.3 1.3 6.9 2.7 12.1 4.7l2.6 1c1.6.4 2.3 1.5 2.3 2.8zM769.4 280.2v1556.6c0-14.1-.6-13.1-1.6-12.6-.5.3-1 .4-1.5.4-.6 0-1.1-.1-1.6-.4-7-4.3-14.2-8.8-22.2-14-.3-.2-.6-.4-.8-.6-9.5-6.8-13.4-13.7-23-21l-4.2-3.2c-7.6-5.9-15.8-12.2-24.5-18.7l-1.6-1.2c-.8-.6-1.2-1.5-1.2-2.4V945.7h-.9c-13.2-1.7-37.5 1.2-54.4 0h-4.1c-6.9-.5-13.1.4-18.2 0h-1.2v761.1c0 1.2-.7 2.3-1.7 2.8-.4.2-.9.3-1.3.3-.7 0-1.4-.2-1.9-.7-14.4-11.8-28.9-24.3-43.2-37.1-.2-.1-.4-.3-.6-.5l-.7-.8c-.5-.6-1-1.2-1.6-1.8l-2-2.3c-6.9-7.6-14-15.5-21.8-23.4l-1.2-1.2c-.5-.6-.8-1.3-.8 13.1V358.6c0-16.4.7-17.5 1.8-18l2.3-1.1c7.7-3.6 14.8-7.1 21.7-10.6l.5-.3 1-.5c12.8-6.4 24.9-12.4 40-18.2l5.5-2.1c.4-.1.7-.2 1.1-.2.6 0 1.2.2 1.7.5.8.6 1.3 1.5 1.3 2.5v544.5h1c6.1.5 13.9-.6 22.3 0h.6c17 1.2 41.3-1.5 53.6 0h1.2V288.9c0-1.3.9-2.5 2.1-2.9l17.6-5.5c17.4-5.5 32.1-11.8 53.6-17.2l5.1-1.2c.2-.1.5-.1.7-.1.7 0 1.3.2 1.9.7.7.5 1.2 1.4 1.2 17.5z"
              fill="#fff"
            />
          </svg>
        </Link>
        <div className="flex items-center justify-around mx-auto gap-10">
          <Link
            href="/services"
            className="font-semibold text-darky-700 hover:text-darky-600"
          >
            {" "}
            Nos services{" "}
          </Link>

          <Link
            href="/about"
            className="font-semibold text-darky-700 hover:text-darky-600"
          >
            {" "}
            L'entreprise{" "}
          </Link>

          <Link
            href="/job"
            className="font-semibold text-darky-700 hover:text-darky-600"
          >
            {" "}
            Carrières{" "}
          </Link>

          <Link
            href="/contact"
            className="font-semibold text-darky-700 hover:text-darky-600"
          >
            {" "}
            Nous joindre{" "}
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <Link
            className="flex items-center justify-between py-4 px-5 font-semibold bg-primary text-white rounded-lg shadow-md border border-b-4 border-primary-800"
            href="/contact"
          >
            {" "}
            Soumission <Icon.LuArrowRight size="16" className="ml-2" />{" "}
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}

export default function Nav() {
  const md = useMediaQuery("md");
  if (md) return <DesktopNav />;
  return <NavMobile />;
}
