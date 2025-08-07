"use client";

import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center shadow-input w-full rounded-none md:rounded-2xl gap-4 mb-20 z-20 md:flex-row">
        <div className="flex flex-col items-center justify-center shadow-input w-full rounded-none md:rounded-2xl">
          <span className="rounded-full bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900 my-4">
            Get in touch
          </span>
          <div className="overflow-hidden rounded-3xl rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden p-6 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold text-white line-clamp-2 pb-2">
              Let&apos;s chat. Contact me with any questions.
            </h2>
            <p className="mt-1 text-base text-[#BEC1DD] line-clamp-3">
              Do you have a problem or question about your project? I&apos;m
              here to help. Send a message and I&apos;ll get back to you within
              24 hours.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label
                    htmlFor="firstname"
                    className="text-xl font-bold text-white line-clamp-2"
                  >
                    First name
                  </Label>
                  <Input id="firstname" placeholder="Carlos" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label
                    htmlFor="lastname"
                    className="text-xl font-bold text-white line-clamp-2"
                  >
                    Last name
                  </Label>
                  <Input id="lastname" placeholder="Gez" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label
                  htmlFor="email"
                  className="text-xl font-bold text-white line-clamp-2"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  placeholder="EmailAddress@.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label
                  htmlFor="textarea"
                  className="text-xl font-bold text-white line-clamp-2"
                >
                  Message
                </Label>
                <Textarea
                  id="textarea"
                  placeholder="Leave me a message"
                  rows={4}
                />
              </LabelInputContainer>

              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

              <div className="mt-10 flex items-center justify-center">
                <a href="/contact">
                  <MagicButton
                    title="Lest talk"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center shadow-input w-full rounded-none md:rounded-2xl gap-4 ">
          <div className="overflow-hidden rounded-3xl rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden p-6 flex flex-col justify-between h-full">
            <img
              src="./AboutMe/perfil.jpg"
              alt="perfile"
              className="size-100 rounded-2xl"
            />
          </div>

          <div className="flex flex-col justify-between h-full w-full overflow-hidden rounded-3xl rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden p-6">
            <div className="flex flex-row justify-start items-center relative mb-4 gap-10">
              <div className="flex flex-row justify-center items-center w-16 h-16 bg-purple rounded-2xl">
                <img className="w-[80%]" src="./Icons/email.png" alt="email" />
              </div>
              <div>
                <p className="text-xl font-bold text-white line-clamp-2">
                  Email
                </p>
                <p className="mt-1 text-base text-[#BEC1DD] line-clamp-3">
                  gez.carlos.98@gmail.com
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center relative mb-4 gap-10">
              <div className="flex flex-row justify-center items-center w-16 h-16 bg-purple rounded-2xl">
                <img className="w-[80%]" src="./Icons/phone.png" alt="email" />
              </div>
              <div>
                <p className="text-xl font-bold text-white line-clamp-2">
                  Phone
                </p>
                <p className="mt-1 text-base text-[#BEC1DD] line-clamp-3">
                  +54 3544 464242
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center relative mb-4 gap-10">
              <div className="flex flex-row justify-center items-center w-16 h-16 bg-purple rounded-2xl">
                <img className="w-[80%]" src="./Icons/area.png" alt="email" />
              </div>
              <div>
                <p className="text-xl font-bold text-white line-clamp-2">
                  Address
                </p>
                <p className="mt-1 text-base text-[#BEC1DD] line-clamp-3">
                  General Artigas, Cordoba, Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-4", className)}>
      {children}
    </div>
  );
};
