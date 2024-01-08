"use client";

import * as z from "zod";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

import { useCursorVariant } from "@/config";
import { ButtonAnim } from "./ButtonAnim";
import LottieControl from "./lottie/page";

import anim11 from "@/public/lottie/anim11.json";
import { AnimatePresence } from "framer-motion";

const formSchema = z.object({
  famName: z
    .string()
    .min(2, {
      message: "Numele de familie trebuie să conțină minim 2 caractere.",
    })
    .max(50, {
      message: "Numele de familie trebuie să conțină maxim 50 de caractere.",
    }),
  preName: z
    .string()
    .min(2, {
      message: "Prenumele trebuie să conțină minim 2 caractere.",
    })
    .max(50, {
      message: "Prenumele trebuie să conțină maxim 50 de caractere.",
    }),
  email: z.string().email({ message: "Email introdus greșit." }),
  country: z.string({ required_error: "Selectați o țară." }),
  phone: z.string().refine(
    (val) => {
      const regex = /^(?:07\d{8}|[2-8]\d{7})$/;

      return regex.test(val);
    },
    { message: "Număr invalid." }
  ),
  website: z.string().optional(),
  company: z.string().optional(),
  message: z
    .string()
    .min(2, { message: "Mesajul trebuie să conșină minim 2 caractere" })
    .max(800, {
      message: "Mesajul trebuie să conțină maxim 800 de caractere.",
    }),
});

function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      famName: "",
      preName: "",
      company: "",
      email: "",
      phone: "",
      website: "",
      message: "",
    },
  });

  const [isSent, setIsSent] = useState(false);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: data.famName + " " + data.preName,
        email: data.email,
        company: data.company,
        country: data.country,
        phone: data.phone,
        website: data.website,
        message: data.message,
      }),
    });
    console.log(await response.status);
    const responseData = await response.json();
    if (response.status === 200) {
      setIsSent(true);
    } else {
      console.log(responseData);
    }
  }

  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSent ? (
          <div className="w-full h-auto max-w-[350px] max-h-[800px] mx-auto">
            <LottieControl animationData={anim11} />
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 text-left"
            >
              <div className="flex gap-4 w-full">
                <FormField
                  control={form.control}
                  name="famName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        Nume de familie <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Hatzu"
                          className="focus:ring-offset-0 focus-visible:ring-offset-0"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription>
                  Acesta este numele dvs. de familie.
                </FormDescription> */}
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        Prenume <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Dorian" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                  Acesta este numele dvs. de familie.
                </FormDescription> */}
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="dory@hat.zu" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                  Acesta este numele dvs. de familie.
                </FormDescription> */}
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <div className="flex gap-4 w-full">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        Oraș <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Domnești" {...field} />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        Telefon <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="0712345698" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                  Acesta este numele dvs. de familie.
                </FormDescription> */}
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.hatz.shop.ro"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                  Acesta este numele dvs. de familie.
                </FormDescription> */}
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Companie</FormLabel>
                    <FormControl>
                      <Input placeholder="Hatz Residence SRL" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                  Acesta este numele dvs. de familie.
                </FormDescription> */}
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      Mesaj <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Bună ziua..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                  Acesta este numele dvs. de familie.
                </FormDescription> */}
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <div className="flex">
                <div
                  onMouseEnter={() => sellEnter()}
                  onMouseLeave={() => sellLeave()}
                >
                  <ButtonAnim
                    color1="blueEmb"
                    color2="blueEmbDark"
                    className="p-2 px-7"
                    type="submit"
                    disabled={form.formState.isSubmitting}
                  >
                    Trimite
                  </ButtonAnim>
                </div>
              </div>
              {(form.getFieldState("famName").invalid ||
                form.getFieldState("company").invalid ||
                form.getFieldState("country").invalid ||
                form.getFieldState("email").invalid ||
                form.getFieldState("message").invalid ||
                form.getFieldState("phone").invalid ||
                form.getFieldState("preName").invalid ||
                form.getFieldState("website").invalid) && (
                <p className="border-2 border-red-500 p-2 px-5 text-sm">
                  Unul sau mai multe câmpuri sunt completate incorect. Vă rugăm
                  încercați din nou.
                </p>
              )}
            </form>
            <Toaster />
          </Form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;
