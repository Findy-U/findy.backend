-- CreateTable
CREATE TABLE "CandidateProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "professional_experience" TEXT NOT NULL,
    "url_github" TEXT NOT NULL,
    "url_linkedin" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "id_candidate_user" INTEGER NOT NULL,
    CONSTRAINT "CandidateProfile_id_candidate_user_fkey" FOREIGN KEY ("id_candidate_user") REFERENCES "candidate_users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
