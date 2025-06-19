"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
export default function contact() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col 
   items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <h1
        className="mt-40 md:mt-0 text-4xl md:text-7xl 
        font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
      >
        Contact Us
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto mb-4">
        Write any questioon or problem you are facing we are happy to help you.
        Reachout to out journet of building first web app with help of Next Js.
      </p>
      
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
   
      <BackgroundBeams />
    </div>
  );
}
