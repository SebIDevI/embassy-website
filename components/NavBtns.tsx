"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import embassy from "@/public/logoBlack.png";

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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Racehub",
    href: "/",
    description: "Un spatiu si o comunitate destinata pasionatiilor de masini",
  },
  {
    title: "Chiropractor.ro",
    href: "/",
    description:
      "Un loc gandit cu si pentru chiropracticienii din Romania unde isi pot creste vizibilitatea in online",
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
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <Image src={embassy} alt={"Embassy Logo"} />
                    <div className="mb-2 mt-4 text-lg font-graphik leading-tight">
                      Embassy Network
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      O descriere sumara despre Embassy Network in foarte putine
                      cateva cuvinte
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/creative" title="Creative">
                Content Creation and Strategy
              </ListItem>
              <ListItem href="/web" title="WebExp">
                Web development, <br />
                Web design, SEO
              </ListItem>
              <ListItem href="/ppc" title="PPC">
                Clients Acquisition System
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>MBC Productions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem2
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  <p className="uppercase italic mb-2 mt-3">Coming soon</p>
                  {component.description}
                </ListItem2>
              ))}
            </ul>
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
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
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
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 text-center rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
