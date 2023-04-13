import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const SKILLS = [
  'JavaScript',
  'TypeScript',
  '.Net Core',
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
  'Laravel',
  'MySQL',
  'Postgres',
  'MongoDB',
  'Redis',
  'Git',
  'Github',
  'Jira',
  'Trello',
  'Figma',
  'Miro',
  'Notion',
];

const ROLES = [
  'Front-End',
  'Back-End',
  'QA',
  'DevOps',
  'Product Manager',
  'Scrum Master',
  'UX',
  'UI',
  'Mentor',
];

function seedSkills() {
  Promise.all(
    SKILLS.map((skill) => prisma.stack.create({ data: { title: skill } })),
  )
    .then(() => console.info('[SEED] Succussfully create stacks records'))
    .catch((e) => console.error('[SEED] Failed to create stacks records', e));
}

seedSkills();

function seedRoles() {
  Promise.all(
    ROLES.map((role) => prisma.roles.create({ data: { title: role } })),
  )
    .then(() => console.info('[SEED] Succussfully create roles records'))
    .catch((e) => console.info('[SEED] Succussfully create roles records', e));
}

seedRoles();

function seedUserAdmin() {
  prisma.candidateUser
    .create({
      data: {
        name: 'Administrador do APP',
        email: 'findy.adm@gmail.com',
        password:
          '$2a$10$O7PLuwjrj5moVvOkyVyIeuf3Fw5RICwuL/IPKL0js.sIDfeV7KDZK', // senha: VJ8I@l7zK%
        roles: 'admin',
        provider: 'findy',
        providerId: null,
        recoverToken: null,
        createdAt: new Date(),
        updatedAt: null,
      },
    })
    .then(() => console.info('[SEED] Succussfully create user admin record'))
    .catch((e) =>
      console.info('[SEED] Succussfully create user admin record', e),
    );
}

seedUserAdmin();
