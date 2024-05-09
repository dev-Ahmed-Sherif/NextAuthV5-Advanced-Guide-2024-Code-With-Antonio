"use client";

import { MdErrorOutline } from "react-icons/md";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (message === "") return <></>;
  return (
    <div
      className="bg-destructive/15 p-3 rounded-md flex
        items-center gap-x-2 text-sm text-destructive"
    >
      <MdErrorOutline className="h-4 w-4" />
      <p> {message} </p>
    </div>
  );
};
