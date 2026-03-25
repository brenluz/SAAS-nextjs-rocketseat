import { z } from 'zod/index'

export const userSubject = z.tuple([
  z.union([
    z.literal('delete'),
    z.literal('manage'),
    z.literal('update'),
    z.literal('get'),
  ]),
  z.literal('User'),
])

export type UserSubject = z.infer<typeof userSubject>
