"use client";

import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/react";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { Button } from "@/components/ui/button";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
    </div>
  );
};
