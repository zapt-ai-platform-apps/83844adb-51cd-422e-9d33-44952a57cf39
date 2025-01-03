CREATE TABLE "service_requests" (
  "id" SERIAL PRIMARY KEY,
  "description" TEXT NOT NULL,
  "client_id" UUID NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);