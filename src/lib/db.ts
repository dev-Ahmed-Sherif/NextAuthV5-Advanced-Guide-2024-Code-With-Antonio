import { PrismaClient } from "@prisma/client";

// Used This because of Hot Reload make new instance of PrismaClient every time
// and global not effect by Hot Reload
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// Only used in Production
// export const db = new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
