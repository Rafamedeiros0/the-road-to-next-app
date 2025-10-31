import { prisma } from "@/lib/prisma";
import { TicketSearchParams } from "../search-params";

export const getTickets = async (
  searchParams: TicketSearchParams,
  userId?: string,
) => {
  return await prisma.ticket.findMany({
    where: {
      userId,
      ...(searchParams.search && {
        title: {
          contains: searchParams.search,
          mode: "insensitive",
        },
      }),
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      User: {
        select: {
          name: true,
        },
      },
    },
  });
};
