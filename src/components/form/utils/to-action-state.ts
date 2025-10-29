import { z, ZodError } from "zod";

export type ActionState = {
  message: string;
  fieldErrors: Record<string, string[] | undefined>;
  payload?: FormData;
};

export const fromErrorToActionState = (
  error: unknown,
  payload: FormData
): ActionState => {
  if (error instanceof ZodError) {
    return {
      message: "",
      fieldErrors: z.flattenError(error).fieldErrors,
      payload,
    };
  } else if (error instanceof Error) {
    return {
      message: error.message,
      fieldErrors: {},
      payload,
    };
  } else {
    return {
      message: "An unknown error occurred",
      fieldErrors: {},
      payload,
    };
  }
};
