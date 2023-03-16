-- CreateTable
CREATE TABLE "candidate_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "roles" TEXT NOT NULL,
    "provider" TEXT,
    "provider_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "recover_token" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "candidate_users_email_key" ON "candidate_users"("email");
