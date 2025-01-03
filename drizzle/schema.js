import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const service_requests = pgTable('service_requests', {
  id: serial('id').primaryKey(),
  description: text('description').notNull(),
  clientId: uuid('client_id').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});