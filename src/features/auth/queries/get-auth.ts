"use server";

import type { Session, User } from "better-auth";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export type GetAuthResult = {
  session: Session | null;
  user: User | null;
};

export const getAuth = async (): Promise<GetAuthResult> => {
  const result = await auth.api.getSession({
    headers: await headers(),
  });

  return {
    session: result?.session ?? null,
    user: result?.user ?? null,
  };
};
