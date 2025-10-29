import { useEffect } from "react";
import type { ActionState } from "../utils/to-action-state";

type OnArgs = { actionState: ActionState };

type UseActionFeedbackOptions = {
  onSuccess?: (onArgs: OnArgs) => void;
  onError?: (onArgs: OnArgs) => void;
};

const useActionFeedBack = (
  actionState: ActionState,
  options: UseActionFeedbackOptions
) => {
  useEffect(() => {
    if (actionState.status === "SUCCESS") {
      options.onSuccess?.({ actionState });
    }
    if (actionState.status === "ERROR") {
      options.onError?.({ actionState });
    }
  }, [actionState, options]);
};

export { useActionFeedBack };
