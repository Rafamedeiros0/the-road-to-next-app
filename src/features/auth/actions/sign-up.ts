"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { Prisma } from "@/app/generated/prisma";
import {
  type ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { auth } from "@/lib/auth";
import { ticketsPath } from "@/paths";

const signUpSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(191)
      .refine((value) => !value.includes(" "), "Name cannot contain spaces"),
    email: z.email(),
    password: z.string().min(6).max(191),
    confirmPassword: z.string().min(6).max(191),
  })
  // TODO: check if that is the best way to check
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password do not match",
        path: ["confirmPassword"],
      });
    }
  });

export const signUp = async (_actionState: ActionState, formData: FormData) => {
  try {
    const { name, email, password } = signUpSchema.parse(
      Object.fromEntries(formData)
    );

    const response = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    if (!response) {
      return toActionState("ERROR", "Sign up failed", formData);
    }
  } catch (error) {
    // TODO: check if I need improve the error handle considering better Auth
    return fromErrorToActionState(error, formData);
  }

  redirect(ticketsPath());
};
