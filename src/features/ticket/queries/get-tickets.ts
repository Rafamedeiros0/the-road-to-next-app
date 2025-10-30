import { prisma } from "@/lib/prisma";

export const getTickets = async () => {
  return await prisma.ticket.findMany({
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
