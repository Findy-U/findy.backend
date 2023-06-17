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

async function seedSkills() {
  const skills = await Promise.all(
    SKILLS.map(async (skill) => {
      const skillExists = await prisma.stack.findMany({
        where: { title: skill },
      });
      if (skillExists.length !== 0) {
        return skillExists;
      }

      return false;
    }),
  );

  if (skills.some((item) => item !== false)) {
    return console.info('[SEED] Skills já cadastradas');
  }

  try {
    await Promise.all(
      SKILLS.map(
        async (skill) => await prisma.stack.create({ data: { title: skill } }),
      ),
    );
    console.info('[SEED] Successfully create skills records');
  } catch (error) {
    console.info('[SEED] Successfully create skills records', error);
  }
}

seedSkills();

async function seedRoles() {
  const roles = await Promise.all(
    ROLES.map(async (role) => {
      const exists = await prisma.roles.findMany({ where: { title: role } });
      if (exists.length !== 0) {
        return exists;
      }
      return false;
    }),
  );

  if (roles.some((item) => item !== false)) {
    return console.info('[SEED] Cargos já cadastrados');
  }

  try {
    await Promise.all(
      ROLES.map(
        async (role) => await prisma.roles.create({ data: { title: role } }),
      ),
    );
    console.info('[SEED] Successfully create roles records');
  } catch (error) {
    console.info('[SEED] Successfully create roles records', error);
  }
}

seedRoles();

async function seedUserAdmin() {
  const userExists = await prisma.candidateUser.findFirst({
    where: { email: 'findy.adm@gmail.com' },
  });

  if (userExists) return console.info('[SEED] Admin já cadastrado');

  await prisma.candidateUser
    .create({
      data: {
        name: 'Administrador do APP',
        email: 'findy.adm@gmail.com',
        password:
          '$2a$10$O7PLuwjrj5moVvOkyVyIeuf3Fw5RICwuL/IPKL0js.sIDfeV7KDZK', // senha: VJ8I@l7zK%
        roles: 'admin',
        provider: 'findy',
        activated: true,
        providerId: null,
        recoverToken: null,
        createdAt: new Date(),
        updatedAt: null,
      },
    })
    .then(() => console.info('[SEED] Successfully create user admin record'))
    .catch((e) =>
      console.info('[SEED] Successfully create user admin record', e),
    );
}

seedUserAdmin();
