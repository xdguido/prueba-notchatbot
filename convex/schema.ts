import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  numbers: defineTable({
    value: v.number(),
  }),
  orders: defineTable({
    id: v.string(),
    email: v.string(),
    total_price: v.string(),
    status: v.optional(v.string()),
    product: v.optional(v.string()),
    date: v.optional(v.string()),
  }),
});
