import { createAuthClient } from "better-auth/react";
import { getBaseUrl } from "@/utils/url";

export const authClient = createAuthClient({
  baseURL: getBaseUrl(),
});

export const { signIn, signUp, useSession } = createAuthClient();
