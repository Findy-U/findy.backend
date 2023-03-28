/*
  Warnings:

  - You are about to drop the `CandidateProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CandidateProfile";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "candidate-profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "professional_experience" TEXT NOT NULL,
    "url_github" TEXT NOT NULL,
    "url_linkedin" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "candidateUserId" INTEGER,
    CONSTRAINT "candidate-profile_candidateUserId_fkey" FOREIGN KEY ("candidateUserId") REFERENCES "candidate_users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "candidate-profile_candidateUserId_key" ON "candidate-profile"("candidateUserId");
