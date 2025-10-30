"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { signInPath } from "@/paths";
import { getAuth } from "../queries/get-auth";

export const signOut = async () => {
  const { session } = await getAuth();

  if (!session) {
    redirect(signInPath());
  }

  await auth.api.signOut({
    headers: await headers(),
  });

  redirect(signInPath());
};
