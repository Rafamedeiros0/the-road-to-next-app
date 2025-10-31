import { prisma } from "@/lib/prisma";
import { SearchParams } from "../search-params";

export const getTickets = async (
  searchParams: SearchParams,
  userId?: string,
) => {
  return await prisma.ticket.findMany({
    where: {
      userId,
      ...(typeof searchParams.search === "string" && {
        title: {
          contains: searchParams.search,
          mode: "insensitive",
        },
      }),
    },
    orderBy: {
      ...(searchParams.sort === undefined && {
        createdAt: "desc",
      }),
      ...(searchParams.sort === "bounty" && {
        bounty: "desc",
      }),
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
