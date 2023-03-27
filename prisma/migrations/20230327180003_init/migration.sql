-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_candidate_projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "project_scope" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "candidate_user_id" INTEGER,
    "is_active" BOOLEAN DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    CONSTRAINT "candidate_projects_candidate_user_id_fkey" FOREIGN KEY ("candidate_user_id") REFERENCES "candidate_users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_candidate_projects" ("candidate_user_id", "id", "is_active", "name", "phone", "project_scope") SELECT "candidate_user_id", "id", "is_active", "name", "phone", "project_scope" FROM "candidate_projects";
DROP TABLE "candidate_projects";
ALTER TABLE "new_candidate_projects" RENAME TO "candidate_projects";
CREATE UNIQUE INDEX "candidate_projects_name_key" ON "candidate_projects"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
