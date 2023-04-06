-- CreateTable
CREATE TABLE "tb_candidate_users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "roles" TEXT,
    "provider" TEXT,
    "provider_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "recover_token" TEXT,

    CONSTRAINT "tb_candidate_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_candidate-profile" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "professional_experience" TEXT NOT NULL,
    "url_github" TEXT NOT NULL,
    "url_linkedin" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "candidateUserId" INTEGER,

    CONSTRAINT "tb_candidate-profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_candidate_projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "project_scope" TEXT NOT NULL,
    "url_team_selection" TEXT NOT NULL,
    "responsible" TEXT,
    "candidate_user_id" INTEGER,
    "findy_help" TEXT,
    "is_active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tb_candidate_projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_project_stack" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER,
    "stackId" INTEGER,

    CONSTRAINT "tb_project_stack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_project_roles" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER,
    "title" TEXT,

    CONSTRAINT "tb_project_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_stacks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "tb_stacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_roles" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "tb_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_leaders" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "projectId" INTEGER,

    CONSTRAINT "tb_leaders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_candidate_users_email_key" ON "tb_candidate_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_candidate-profile_candidateUserId_key" ON "tb_candidate-profile"("candidateUserId");

-- CreateIndex
CREATE UNIQUE INDEX "tb_candidate_projects_name_key" ON "tb_candidate_projects"("name");

-- AddForeignKey
ALTER TABLE "tb_candidate-profile" ADD CONSTRAINT "tb_candidate-profile_candidateUserId_fkey" FOREIGN KEY ("candidateUserId") REFERENCES "tb_candidate_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_candidate_projects" ADD CONSTRAINT "tb_candidate_projects_candidate_user_id_fkey" FOREIGN KEY ("candidate_user_id") REFERENCES "tb_candidate_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_project_stack" ADD CONSTRAINT "tb_project_stack_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "tb_candidate_projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_project_stack" ADD CONSTRAINT "tb_project_stack_stackId_fkey" FOREIGN KEY ("stackId") REFERENCES "tb_stacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_project_roles" ADD CONSTRAINT "tb_project_roles_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "tb_candidate_projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_leaders" ADD CONSTRAINT "tb_leaders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_candidate_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_leaders" ADD CONSTRAINT "tb_leaders_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "tb_candidate_projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
