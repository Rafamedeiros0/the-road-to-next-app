"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export const getAuth = async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
};
