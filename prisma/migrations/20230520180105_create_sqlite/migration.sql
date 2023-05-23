-- CreateTable
CREATE TABLE "tb_candidate_users" (
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
    "created_recover_token" DATETIME
);

-- CreateTable
CREATE TABLE "tb_candidate-profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "url_github" TEXT,
    "url_linkedin" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "available_time" TEXT NOT NULL,
    "area_of_interest" TEXT NOT NULL,
    "candidateUserId" INTEGER,
    CONSTRAINT "tb_candidate-profile_candidateUserId_fkey" FOREIGN KEY ("candidateUserId") REFERENCES "tb_candidate_users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_occupation_area" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "user_id" INTEGER,
    "profileId" INTEGER,
    CONSTRAINT "tb_occupation_area_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "tb_candidate-profile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "profile_skills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "profile_id" INTEGER,
    "stack_id" INTEGER,
    CONSTRAINT "profile_skills_stack_id_fkey" FOREIGN KEY ("stack_id") REFERENCES "tb_stacks" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "profile_skills_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "tb_candidate-profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_candidate_projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "project_scope" TEXT NOT NULL,
    "url_team_selection" TEXT NOT NULL,
    "responsible" TEXT,
    "contact_responsible" TEXT,
    "url_linkedin_responsible" TEXT,
    "candidate_user_id" INTEGER,
    "findy_help" TEXT,
    "is_active" BOOLEAN DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "contact_leaders" TEXT,
    CONSTRAINT "tb_candidate_projects_candidate_user_id_fkey" FOREIGN KEY ("candidate_user_id") REFERENCES "tb_candidate_users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_project_stack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_id" INTEGER,
    "stack_id" INTEGER,
    CONSTRAINT "tb_project_stack_stack_id_fkey" FOREIGN KEY ("stack_id") REFERENCES "tb_stacks" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "tb_project_stack_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "tb_candidate_projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_project_roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_id" INTEGER,
    "title" TEXT,
    CONSTRAINT "tb_project_roles_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "tb_candidate_projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_stacks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tb_roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tb_leaders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_candidate_users_email_key" ON "tb_candidate_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_candidate-profile_candidateUserId_key" ON "tb_candidate-profile"("candidateUserId");

-- CreateIndex
CREATE UNIQUE INDEX "tb_candidate_projects_name_key" ON "tb_candidate_projects"("name");
