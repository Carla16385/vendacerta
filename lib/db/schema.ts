import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  sales: integer("sales").notNull().default(0),
  commission: integer("commission").notNull().default(0),
  image: text("image"),
  niche: text("niche").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})

export const videoJobs = pgTable("video_jobs", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").notNull(),
  productName: text("product_name").notNull(),
  hook: text("hook").notNull(),
  script: text("script").notNull(),
  caption: text("caption").notNull(),
  hashtags: text("hashtags").notNull(),
  status: text("status").notNull().default("gerado"),
  model: text("model"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})

export type Product = typeof products.$inferSelect
export type VideoJob = typeof videoJobs.$inferSelect
