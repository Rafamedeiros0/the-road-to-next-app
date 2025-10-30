import type { User as AuthUser } from "better-auth";

type Entity = {
  userId: string | null;
};

export const isOwner = (
  authUser: AuthUser | null | undefined,
  entity: Entity | null | undefined
) => {
  if (entity?.userId === authUser?.id) {
    return true;
  }
  return false;
};
