import { PrismaClient } from "@prisma/client";

// Declaración global para TypeScript
declare global {
    var prisma: PrismaClient
}

// Creación de una única instancia de PrismaClient
const prisma = globalThis.prisma || new PrismaClient()

// En desarrollo, guardamos la instancia en la variable global
if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export default prisma;