/*
  Warnings:

  - You are about to drop the column `professional_experience` on the `tb_candidate-profile` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `tb_candidate-profile` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `tb_leaders` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `tb_leaders` table. All the data in the column will be lost.
  - You are about to drop the column `stackId` on the `tb_project_stack` table. All the data in the column will be lost.
  - Added the required column `area_of_interest` to the `tb_candidate-profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `available_time` to the `tb_candidate-profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tb_leaders" DROP CONSTRAINT "tb_leaders_projectId_fkey";

-- DropForeignKey
ALTER TABLE "tb_leaders" DROP CONSTRAINT "tb_leaders_userId_fkey";

-- DropForeignKey
ALTER TABLE "tb_project_stack" DROP CONSTRAINT "tb_project_stack_stackId_fkey";

-- AlterTable
ALTER TABLE "tb_candidate-profile" DROP COLUMN "professional_experience",
DROP COLUMN "skills",
ADD COLUMN     "area_of_interest" TEXT NOT NULL,
ADD COLUMN     "available_time" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tb_candidate_projects" ADD COLUMN     "contact_leaders" TEXT,
ADD COLUMN     "contact_responsible" TEXT,
ADD COLUMN     "utl_linkedin_responsible" TEXT;

-- AlterTable
ALTER TABLE "tb_leaders" DROP COLUMN "projectId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "tb_project_stack" DROP COLUMN "stackId",
ADD COLUMN     "stack_id" INTEGER;

-- CreateTable
CREATE TABLE "OccupationArea" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "user_id" INTEGER,
    "profileId" INTEGER,

    CONSTRAINT "OccupationArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_skills" (
    "id" SERIAL NOT NULL,
    "profile_id" INTEGER,
    "stack_id" INTEGER,

    CONSTRAINT "profile_skills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OccupationArea" ADD CONSTRAINT "OccupationArea_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "tb_candidate-profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_skills" ADD CONSTRAINT "profile_skills_stack_id_fkey" FOREIGN KEY ("stack_id") REFERENCES "tb_stacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_skills" ADD CONSTRAINT "profile_skills_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "tb_candidate-profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_project_stack" ADD CONSTRAINT "tb_project_stack_stack_id_fkey" FOREIGN KEY ("stack_id") REFERENCES "tb_stacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
