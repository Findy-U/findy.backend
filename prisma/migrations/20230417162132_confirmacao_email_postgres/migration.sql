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
    "confirmation_token" TEXT,
    "expired_confirmation_token" DATETIME,
    "activated" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_tb_candidate_users" ("activated", "confirmation_token", "created_at", "email", "expired_confirmation_token", "id", "name", "password", "provider", "provider_id", "recover_token", "roles", "updated_at") SELECT coalesce("activated", false) AS "activated", "confirmation_token", "created_at", "email", "expired_confirmation_token", "id", "name", "password", "provider", "provider_id", "recover_token", "roles", "updated_at" FROM "tb_candidate_users";
DROP TABLE "tb_candidate_users";
ALTER TABLE "new_tb_candidate_users" RENAME TO "tb_candidate_users";
CREATE UNIQUE INDEX "tb_candidate_users_email_key" ON "tb_candidate_users"("email");
CREATE UNIQUE INDEX "tb_candidate_users_confirmation_token_key" ON "tb_candidate_users"("confirmation_token");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
