import { hashPassword } from "better-auth/crypto";
import { PrismaClient } from "../src/app/generated/prisma/client";

const prisma = new PrismaClient();

const users = [
  {
    name: "admin",
    email: "admin@admin.com",
  },
  {
    name: "user",
    email: "rafamedeiros0@gmail.com",
  },
];

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from the database",
    status: "DONE" as const,
    deadline: "2026-01-01",
    bounty: 9.99,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from the database",
    status: "OPEN" as const,
    deadline: "2026-01-01",
    bounty: 8.99,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from the database",
    status: "IN_PROGRESS" as const,
    deadline: "2026-01-01",
    bounty: 9,
  },
];

const comments = [
  {
    content: "This is the first comment from the database",
  },
  {
    content: "This is the second comment from the database",
  },
  {
    content: "This is the third comment from the database",
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed: Started...");

  await prisma.comment.deleteMany();
  await prisma.user.deleteMany();
  await prisma.ticket.deleteMany();

  const passwordHash = await hashPassword("12345678");

  const dbUsers = await prisma.user.createManyAndReturn({
    data: users,
  });

  await prisma.account.createMany({
    data: dbUsers.map(({ id }) => ({
      accountId: id,
      providerId: "credential",
      userId: id,
      password: passwordHash,
    })),
  });

  const dbTickets = await prisma.ticket.createManyAndReturn({
    data: tickets.map((ticket) => ({
      ...ticket,
      userId: dbUsers[0].id,
    })),
  });

  await prisma.comment.createMany({
    data: comments.map((comment) => ({
      ...comment,
      userId: dbUsers[1].id,
      ticketId: dbTickets[0].id,
    })),
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();
