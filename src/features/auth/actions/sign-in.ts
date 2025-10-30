"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import {
  type ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { auth } from "@/lib/auth";
import { ticketsPath } from "@/paths";

const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(191),
});

export const signIn = async (_actionState: ActionState, formData: FormData) => {
  try {
    const { email, password } = signInSchema.parse(
      Object.fromEntries(formData)
    );

    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    if (!response) {
      return toActionState("ERROR", "Incorrect email or password");
    }
  } catch (error) {
    return fromErrorToActionState(error);
  }

  redirect(ticketsPath());
};
