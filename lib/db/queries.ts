import { db } from "./index"
import { videoJobs } from "./schema"
import { desc } from "drizzle-orm"

export async function getVideoJobs() {
  return db.select().from(videoJobs).orderBy(desc(videoJobs.createdAt))
}
