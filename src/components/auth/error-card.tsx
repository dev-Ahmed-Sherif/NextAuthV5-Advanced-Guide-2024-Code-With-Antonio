"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";

import { MdErrorOutline } from "react-icons/md";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops Something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <div className="w-full flex justify-center items-center">
        <MdErrorOutline className="h-4 w-4" />
      </div>
    </CardWrapper>
  );
};
