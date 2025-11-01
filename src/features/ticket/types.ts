import { Prisma } from "@/app/generated/prisma";

export type TicketWithMetadata = Prisma.TicketGetPayload<{
  include: {
    User: {
      select: { name: true };
    };
  };
}> & { isOwner: boolean };
