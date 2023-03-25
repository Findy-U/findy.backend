import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const SKILLS = [
  'JavaScript',
  'TypeScript',
  'C#',
  'Java',
  'PHP',
  'Ruby On Rails',
  'Go',
  'NodeJs',
  'ReactJs',
  'VueJs',
  'Angular',
  'NextJs',
  'NestJs',
  'Spring',
  'MySQL',
  'Postgres',
  'MongoDB',
  'Redis',
];

const ROLES = [
  'Stakeholder',
  'Product Manager',
  'Product Owner',
  'Tech Lead',
  'Agilista',
  'Frontend',
  'Backend',
  'Quality Assurance',
  'UX/UI',
  'DevOps',
];

function seedSkills() {
  Promise.all(
    SKILLS.map((skill) => prisma.stack.create({ data: { title: skill } })),
  )
    .then(() => console.info('[SEED] Succussfully create staks records'))
    .catch((e) => console.error('[SEED] Failed to create staks records', e));
}

seedSkills();

function seedRoles() {
  Promise.all(
    ROLES.map((role) => prisma.roles.create({ data: { title: role } })),
  )
    .then(() => console.info('[SEED] Succussfully create roles records'))
    .catch((e) => console.info('[SEED] Succussfully create reles records', e));
}

seedRoles();
