import { useEffect, useRef } from "react";
import type { ActionState } from "../utils/to-action-state";

type OnArgs = {
  actionState: ActionState;
};

type UseActionFeedbackOptions = {
  onSuccess?: (onArgs: OnArgs) => void;
  onError?: (onArgs: OnArgs) => void;
};

// TODO: Check that implementation
const useActionFeedback = (
  actionState: ActionState,
  options: UseActionFeedbackOptions
) => {
  const prevTimestamp = useRef(actionState.timestamp);
  const onSuccessRef = useRef(options.onSuccess);
  const onErrorRef = useRef(options.onError);

  useEffect(() => {
    onSuccessRef.current = options.onSuccess;
    onErrorRef.current = options.onError;
  }, [options.onSuccess, options.onError]);

  useEffect(() => {
    const isUpdate = prevTimestamp.current !== actionState.timestamp;

    if (!isUpdate) return;

    if (actionState.status === "SUCCESS") {
      onSuccessRef.current?.({ actionState });
    }
    if (actionState.status === "ERROR") {
      onErrorRef.current?.({ actionState });
    }

    prevTimestamp.current = actionState.timestamp;
  }, [actionState]);
};

export { useActionFeedback };
