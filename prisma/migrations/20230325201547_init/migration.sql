-- CreateTable
CREATE TABLE "candidate_users" (
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

-- CreateTable
CREATE TABLE "candidate_projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "project_scope" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "candidate_user_id" INTEGER,
    "is_active" BOOLEAN DEFAULT false,
    CONSTRAINT "candidate_projects_candidate_user_id_fkey" FOREIGN KEY ("candidate_user_id") REFERENCES "candidate_users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "project_stack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_id" INTEGER,
    "stackId" INTEGER,
    CONSTRAINT "project_stack_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "candidate_projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "project_stack_stackId_fkey" FOREIGN KEY ("stackId") REFERENCES "stacks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "project_roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_id" INTEGER,
    "rolesId" INTEGER,
    CONSTRAINT "project_roles_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "candidate_projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "project_roles_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "stacks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "candidate_users_email_key" ON "candidate_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_projects_name_key" ON "candidate_projects"("name");
