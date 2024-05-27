"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import Link from "next/link";
import axios from "axios";

export default function Page() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {  
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "e5659565-5c2a-474d-8f89-e2372e423c34",
                name: event.target.name.value,
                email: event.target.email.value,
                message: event.target.message.value,
            }),
        });

        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
  }


  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to my Contact
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        feel free to send your msg along with your fullname and email.
      </p>

      <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" type="text" required/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input id="message" name="message" type="textarea" required/>
        </LabelInputContainer>
        

        <button
          className="bg-gradient-to-br mb-4 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit" onClick={()=>{handleSubmit}}
        >
          Send &rarr;
          <BottomGradient />
        </button>
        

        
      </form>
      <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          <Link href={"/"} >GO TO HOME</Link>
          <BottomGradient />
        </button>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

// 294449b2-dc6b-4ad0-85ed-c9cd0df2865f  jayesh access key
// e5659565-5c2a-474d-8f89-e2372e423c34  my access key