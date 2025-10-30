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

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed: Started...");

  await prisma.ticket.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();

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

  await prisma.ticket.createMany({
    data: tickets.map((ticket) => ({
      ...ticket,
      userId: dbUsers[0].id,
    })),
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();
