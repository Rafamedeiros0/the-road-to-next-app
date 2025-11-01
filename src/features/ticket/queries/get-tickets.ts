import { prisma } from "@/lib/prisma";
import { ParsedSearchParams } from "../search-params";

export const getTickets = async (
  searchParams: ParsedSearchParams,
  userId?: string
) => {
  const searchedParams = await searchParams;

  return await prisma.ticket.findMany({
    where: {
      userId,
      title: {
        contains: searchedParams.search,
        mode: "insensitive",
      },
    },
    orderBy: {
      ...(searchedParams.sort === "newest" && { createdAt: "desc" }),
      ...(searchedParams.sort === "bounty" && { bounty: "desc" }),
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
