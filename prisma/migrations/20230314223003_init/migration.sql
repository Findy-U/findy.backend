-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_candidate_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "roles" TEXT,
    "provider" TEXT,
    "provider_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "recover_token" TEXT
);
INSERT INTO "new_candidate_users" ("created_at", "email", "id", "name", "password", "provider", "provider_id", "recover_token", "roles", "updated_at") SELECT "created_at", "email", "id", "name", "password", "provider", "provider_id", "recover_token", "roles", "updated_at" FROM "candidate_users";
DROP TABLE "candidate_users";
ALTER TABLE "new_candidate_users" RENAME TO "candidate_users";
CREATE UNIQUE INDEX "candidate_users_email_key" ON "candidate_users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
