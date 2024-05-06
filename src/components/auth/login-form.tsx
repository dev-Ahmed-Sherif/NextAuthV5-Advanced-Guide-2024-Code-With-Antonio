"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an Account?"
      backButtonHref="/register"
      showSocial
    >
      <div> form </div>
    </CardWrapper>
  );
};
