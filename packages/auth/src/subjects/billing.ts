import { z } from 'zod'

export const billingSubject = z.tuple([
  z.union([
    z.literal('delete'),
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
  ]),
  z.literal('billing'),
])

export type BillingSubject = z.infer<typeof billingSubject>
