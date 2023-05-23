/*
  Warnings:

  - You are about to drop the column `created_recover_token` on the `tb_candidate_users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tb_candidate_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "roles" TEXT,
    "provider" TEXT,
    "provider_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "recover_token" TEXT,
    "recover_token_expires_at" DATETIME
);
INSERT INTO "new_tb_candidate_users" ("created_at", "email", "id", "name", "password", "provider", "provider_id", "recover_token", "roles", "updated_at") SELECT "created_at", "email", "id", "name", "password", "provider", "provider_id", "recover_token", "roles", "updated_at" FROM "tb_candidate_users";
DROP TABLE "tb_candidate_users";
ALTER TABLE "new_tb_candidate_users" RENAME TO "tb_candidate_users";
CREATE UNIQUE INDEX "tb_candidate_users_email_key" ON "tb_candidate_users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
