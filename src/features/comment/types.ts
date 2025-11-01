import { Prisma } from "@/app/generated/prisma";

export type CommentWithMetadata = Prisma.CommentGetPayload<{
  include: {
    User: {
      select: {
        name: true;
      };
    };
  };
}> & { isOwner: boolean };
