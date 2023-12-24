import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useCursorVariant } from "@/config";

function Faq() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }
  return (
    <>
      <div className="pb-16 bg-white">
        <h3 className="text-center font-extrabold text-4xl py-16">FAQs</h3>
        <div className="container">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                How quickly do I get to see results with your approach?
              </AccordionTrigger>
              <AccordionContent>
                It takes us roughly 5 working days to get things set up for you
                and then we start running your ads. Results – in the form of
                booked appointments – can appear the first day your ads run.
                Although we would expect it to take a few days before the
                specific set-up we’ve created for you finally beds in. <br />
                <br />
                From there, we refine your ads as results come in, looking for
                small improvements in order to increase overall results. That
                can take 3 – 4 weeks. But you’ll be getting appointments in the
                meantime – and we’ll be aiming to run the size of campaign
                necessary to keep your company fully busy throughout. You need
                to be able to handle the increased appointments and orders
                before we begin your ad campaign.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                Why do you use TikTok mainly? There are many ads platforms – why
                not diversify?
              </AccordionTrigger>
              <AccordionContent>
                Across varied platforms, the landscape differs when it comes to
                healthcare businesses. Some platforms prove fiercely competitive
                and financially demanding – particularly Google ads – while
                others yield limited outcomes. <br />
                <br />
                Drawing from our vast experience, we&apos;re well aware of these
                nuances. <br />
                <br />
                In our pursuit of sourcing exclusive leads for healthcare
                business owners, our expertise points to a clear victor: TikTok.
                Since 2022, TikTok has stood as an unrivaled powerhouse for
                generating high-quality appointments. <br />
                <br />
                TikTok&apos;s edge lies in the superior quality of leads it
                generates, coupled with its cost-effectiveness. This has been
                our experience since 2022. <br />
                <br />
                By specialising solely in TikTok, optionally complemented by
                strategic Facebook and Instagram campaigns, we&apos;ve honed an
                unsurpassed lead generation proficiency. <br />
                <br />
                TikTok empowers us to precisely target audiences through its
                potent audience tools. Our mastery of TikTok&apos;s intricacies
                allows us to pinpoint audiences with remarkable precision,
                achieving results that outshine the rest. Our journey as adept
                TikTok advertisers has led to numerous healthcare business
                owners lots of money to their annual revenues. Until some other
                platform comes along that can outdo YouTube we’re going to stick
                with it. It works!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                Do you call the new leads, or do I have to call them?
              </AccordionTrigger>
              <AccordionContent>
                At Embassy Network, we understand the importance of flexibility
                in lead management. <br />
                <br />
                We offer you the option to choose how you&apos;d like to handle
                communication with your new leads. You can absolutely let us
                take care of the initial steps, including appointment setting,
                and reach out to them on your behalf. We can communicate via
                phone calls, emails, or even SMS, depending on your preferences.
                Our aim is to tailor our services to suit your needs. If you
                prefer a more hands-on approach, you&apos;re more than welcome
                to take charge of contacting the leads directly. On the other
                hand, if you&apos;d like to save time and focus on other aspects
                of your business, our team is well-equipped to handle the
                initial interactions and ensure a seamless process for both you
                and your potential customers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                Do you call the new leads, or do I have to call them?
              </AccordionTrigger>
              <AccordionContent>
                What if you work with another healthcare business in my area,
                won’t that hurt my business? <br />
                <br />
                That won’t happen. <br />
                <br />
                Before we take on a new client we make sure they’re right for
                us. In other words we first qualify them (just like we qualify
                new clients for you). <br />
                <br />
                Part of that qualification is: do we already have a client in
                the same exact niche in the area you operate in? <br />
                <br />
                We routinely refuse to take on clients because their business
                competes with an existing client’s business.
                <br />
                <br />
                So rest assured: if you are our client then we will not take on
                a new client in your area of operation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faq;
