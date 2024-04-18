import * as React from "react";
import { motion } from "framer-motion";
import { useCursorVariant } from "@/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Bell } from "@/components/Bell";
import { ButtonAnim } from "../ButtonAnim";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const text = [
  {
    title: "Servicii",
    subtitles: [
      {
        title: "Creative",
        href: "/creative",
        description: "Content Creation and Strategy",
      },
      {
        title: "WebExp",
        href: "/web",
        description: "Web development, Web design, SEO",
      },
      {
        title: "PPC",
        href: "/ppc",
        description: "Clients Acquisition System",
      },
    ],
  },
  {
    title: "MBC Productions",
    subtitles: [
      {
        title: "Chiropractor.ro",
        href: "/chiropracticieni",
        description:
          "Un loc gandit cu si pentru chiropracticienii din Romania unde isi pot creste vizibilitatea in online",
      },
      {
        title: "Racehub",
        href: "/",
        description:
          "Un spatiu si o comunitate destinata pasionatiilor de masini",
      },
      {
        title: "Tash Animations",
        href: "/",
        description:
          "O bula de entertainment de unde iti poti asigura o doza de amuzament",
      },
    ],
  },
  {
    title: "Despre noi",
    href: "/desprenoi",
  },
  {
    title: "Final",
  },
];

interface MenuItemProp {
  i: number;
}

export const MenuItem: React.FC<MenuItemProp> = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="list-none mb-5 flex items-center cursor-pointer"
      onMouseEnter={sellEnter}
      onMouseLeave={sellLeave}
    >
      <Accordion
        type="single"
        collapsible
        className="items-center justify-center w-full"
      >
        {text[i]?.subtitles ? (
          <AccordionItem value={`item-1`} className="border-0">
            <p className="text-slate-950 font-graphik font-bold text-3xl no-underline m-0 p-0 gap-2 justify-center">
              {text[i]?.title}
            </p>
            <div className="py-6">
              {text[i]?.subtitles?.map((e, j) => (
                <div key={j} className={`${j === 1 ? "my-5" : ""}`}>
                  <Link href={e.href}>
                    <p className="text-xl font-graphik">{e.title}</p>
                    {i === 1 && j !== 0 ? (
                      <p className="uppercase italic text-sm py-2">
                        Coming soon
                      </p>
                    ) : (
                      ""
                    )}
                    {/* <p className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      {e.description}
                    </p> */}
                  </Link>
                </div>
              ))}
            </div>
          </AccordionItem>
        ) : text[i]?.href ? (
          <div>
            <Link href={text[i].href as string}>
              <p className="text-slate-950 font-graphik font-bold text-3xl no-underline text-start">
                {text[i].title}
              </p>
            </Link>
          </div>
        ) : (
          <div>
            {i == text.length - 1 ? (
              <div className="w-full flex justify-start pb-20">
                <div
                  onMouseEnter={() => sellEnter()}
                  onMouseLeave={() => sellLeave()}
                >
                  <ButtonAnim
                    color1="blueEmb"
                    color2="blueEmbDark"
                    link="/contact"
                    className="ml-0 py-2 px-5"
                  >
                    Contact
                  </ButtonAnim>
                </div>
              </div>
            ) : (
              <p className="font-bold text-3xl font-graphik text-slate-950 w-full text-start">
                {text[i]?.title}
              </p>
            )}
          </div>
        )}
      </Accordion>
    </motion.li>
  );
};
