"use client";

import * as React from "react";
import { useState } from "react";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import embassy from "@/public/logoBlack.png";
import creative from "@/public/creative-nav.png";
import web from "@/public/web-nav.png";
import ppc from "@/public/ppc.png";

import { AnimatePresence, Variants, motion } from "framer-motion";

import { useCursorVariant } from "@/config";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaCaretRight } from "react-icons/fa";

const variantsP: Variants = {
  hidden: {
    width: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  visible: {
    width: "100%",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const variantsIcon: Variants = {
  small: {
    fontSize: "16px",
    transform: "translate(0px)",
  },
  big: {
    fontSize: "20px",
    transform: "translate(4px, -2px)",
  },
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Chiropractor.ro",
    href: "/chiropractor.ro",
    description:
      "Un loc gandit cu si pentru chiropracticienii din Romania unde isi pot creste vizibilitatea in online",
  },
  {
    title: "Racehub",
    href: "/",
    description: "Un spatiu si o comunitate destinata pasionatiilor de masini",
  },
  {
    title: "Tash Animations",
    href: "/",
    description:
      "O bula de entertainment de unde iti poti asigura o doza de amuzament",
  },
];

export default function NavBtns() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <NavigationMenu
      onMouseEnter={() => sellEnter()}
      onMouseLeave={() => sellLeave()}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicii</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-screen">
              <ul className="flex gap-40 p-4 justify-center container">
                {/* <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full max-w-xs select-none flex-col justify-between items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                {/* <Image
                        src={embassy}
                        alt={"Embassy Logo"}
                        className="mb-5 max-w-sm p-10"
                      /> */}
                {/* <div className="mb-2 mt-4 text-lg font-graphik leading-tight">
                      Embassy Network
                    </div> */}
                {/* <p className="text-sm leading-tight text-muted-foreground">
                        O descriere sumara despre Embassy Network in foarte
                        putine cateva cuvinte
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li> */}
                <ListItem href="/creative" title="Creative" image={creative}>
                  Content Creation and Strategy
                </ListItem>
                <ListItem href="/web" title="WebExp" image={web}>
                  Web development, <br />
                  Web design, SEO
                </ListItem>
                <ListItem href="/ppc" title="PPC" image={ppc}>
                  Clients Acquisition System
                </ListItem>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>MBC Productions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-screen">
              <ul className="flex gap-3 p-4 justify-center container">
                {components.map((component) => (
                  <ListItem2
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    <p className="uppercase italic mb-2 mt-3">
                      {component.title !== "Chiropractor.ro"
                        ? "Coming soon"
                        : ""}
                    </p>
                    {component.description}
                  </ListItem2>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/desprenoi" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Despre noi
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    image: StaticImageData;
  }
>(({ className, title, image, children, ...props }, ref) => {
  const [isMOver, setIsMOver] = useState(false);

  const imgVariants: Variants = {
    in: {
      scale: 1.2,
    },
    out: {
      scale: 1,
    },
  };

  const [isOver, setIsOver] = useState(false);
  return (
    <li
      className="w-auto"
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <AnimatePresence mode="wait">
            {isOver ? (
              <motion.div
                variants={imgVariants}
                initial="out"
                animate="in"
                exit="out"
                className="z-0 duration-200"
              >
                <Image
                  src={image}
                  alt={"Image " + title}
                  className="w-full max-w-[200px]"
                />
              </motion.div>
            ) : (
              <motion.div
                variants={imgVariants}
                initial="out"
                animate="out"
                exit="out"
                className="z-0 duration-200"
              >
                <Image
                  src={image}
                  alt={"Image " + title}
                  className="w-full max-w-[200px]"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="text-base font-medium leading-none font-graphik py-2 z-10 relative">
            <b>{title}</b>
          </div>
          <p className="text-sm leading-snug text-muted-foreground font-graphikLight z-10 relative">
            {children}
            <div className="flex text-black pt-3 gap-1 relative w-auto">
              <AnimatePresence mode="wait">
                <div
                  className="flex gap-1"
                  onMouseEnter={() => setIsMOver(true)}
                  onMouseLeave={() => setIsMOver(false)}
                >
                  <div className="w-auto relative">
                    {isMOver ? (
                      <motion.div
                        variants={variantsP}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blueEmb"
                      ></motion.div>
                    ) : (
                      <motion.div
                        variants={variantsP}
                        initial="hidden"
                        animate="hidden"
                        exit="hidden"
                        className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blueEmb"
                      ></motion.div>
                    )}
                    <p className="font-graphik">Descoperă</p>
                  </div>{" "}
                  {isMOver ? (
                    <motion.div
                      variants={variantsIcon}
                      initial="small"
                      animate="big"
                      exit="small"
                    >
                      <FaCaretRight className="text-blueEmb" />
                    </motion.div>
                  ) : (
                    <motion.div
                      variants={variantsIcon}
                      initial="small"
                      animate="small"
                      exit="small"
                    >
                      <FaCaretRight className="text-blueEmb" />
                    </motion.div>
                  )}
                </div>
              </AnimatePresence>
            </div>
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ListItem2 = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="max-w-xs">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 text-start rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-2xl font-medium leading-none font-pro break-words">
            {title}
          </div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem2.displayName = "ListItem2";
