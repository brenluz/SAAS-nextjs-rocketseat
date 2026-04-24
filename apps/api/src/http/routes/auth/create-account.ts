import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { request } from "https";
import { z } from "zod";

export async function createAccount(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/users', {
        schema: {
            body: z.object({
                name: z.string().min(2),
                email: z.email(),
                password: z.string().min(6),
            })
        },
    }, async () => {
        return "Account created successfully"
    })
}