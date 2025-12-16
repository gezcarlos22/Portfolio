"use client";

import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import emailjs from '@emailjs/browser';

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          to_email: 'gez.carlos.98@gmail.com',
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setSubmitStatus('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                  <Input 
                    id="firstname" 
                    name="firstName"
                    placeholder="Carlos" 
                    type="text" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label
                    htmlFor="lastname"
                    className="text-xl font-bold text-white line-clamp-2"
                  >
                    Last name
                  </Label>
                  <Input 
                    id="lastname" 
                    name="lastName"
                    placeholder="Gez" 
                    type="text" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
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
                  name="email"
                  placeholder="EmailAddress@.com"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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
                  name="message"
                  placeholder="Leave me a message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </LabelInputContainer>

              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

              {submitStatus && (
                <div className={`text-center mb-4 ${submitStatus.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {submitStatus}
                </div>
              )}

              <div className="mt-10 flex items-center justify-center">
                <MagicButton
                  title={isSubmitting ? "Sending..." : "Let's talk"}
                  icon={<FaLocationArrow />}
                  position="right"
                  handleClick={() => {}}
                  otherClasses={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center shadow-input w-full rounded-none md:rounded-2xl gap-4 ">
          <div className="overflow-hidden rounded-3xl rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden p-6 flex flex-col justify-between h-full">
            <Image
              src="/AboutMe/perfil.jpg"
              alt="perfile"
              width={400}
              height={400}
              className="size-100 rounded-2xl"
            />
          </div>

          <div className="flex flex-col justify-center h-full w-full overflow-hidden rounded-3xl rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden p-6">
            <div className="flex flex-row justify-start items-center relative mb-4 gap-10">
              <div className="relative flex justify-center items-center w-14 h-14 md:w-16 md:h-16 bg-purple rounded-2xl p-2">
                <Image
                  className="w-[80%]"
                  src="/Icons/email.png"
                  alt="email"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-white line-clamp-2">
                  Email
                </p>
                <p className="mt-1 text-sm md:text-base text-[#BEC1DD] line-clamp-3">
                  gez.carlos.98@gmail.com
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center relative mb-4 gap-10">
              <div className="relative flex flex-row justify-center items-center w-14 h-14 md:w-16 md:h-16 bg-purple rounded-2xl p-2">
                <Image
                  className="w-[80%]"
                  src="/Icons/phone.png"
                  alt="phone"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-white line-clamp-2">
                  Phone
                </p>
                <p className="mt-1 text-sm md:text-base text-[#BEC1DD] line-clamp-3">
                  +54 3544 464242
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center relative mb-4 gap-10">
              <div className="relative flex flex-row justify-center items-center w-14 h-14 md:w-16 md:h-16 bg-purple rounded-2xl md:p-2">
                <Image
                  className="w-[80%]"
                  src="/Icons/area.png"
                  alt="area"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-white line-clamp-2">
                  Address
                </p>
                <p className="mt-1 text-sm md:text-base text-[#BEC1DD] line-clamp-3">
                  Cordoba, Argentina
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
