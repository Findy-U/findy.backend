import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import {
  linguagens,
  frameworks,
  databases,
  toolsDesing,
  cloudServices,
  toolsDevOps,
  toolsTesting,
} from './data';

async function seedLanguages() {
  const result = await Promise.all(
    linguagens.map(async (lang) => {
      const exists = await prisma.programmingLanguages.findMany({
        where: { name: lang.name },
      });
      if (exists.length !== 0) {
        return exists;
      }

      return false;
    }),
  );

  if (result.some((item) => item !== false)) {
    return console.info('[SEED] Language já cadastradas');
  }

  try {
    await Promise.all(
      linguagens.map(
        async (lang) =>
          await prisma.programmingLanguages.create({
            data: { name: lang.name, title: lang.title },
          }),
      ),
    );
    console.info('[SEED] Successfully create language records');
  } catch (error) {
    console.info('[SEED] Successfully create language records', error);
  }
}

seedLanguages();

async function seedFrameworks() {
  const result = await Promise.all(
    frameworks.map(async (lib) => {
      const exists = await prisma.frameworksLibraries.findMany({
        where: { name: lib.name },
      });
      if (exists.length !== 0) {
        return exists;
      }

      return false;
    }),
  );

  if (result.some((item) => item !== false)) {
    return console.info('[SEED] Framework já cadastradas');
  }

  try {
    await Promise.all(
      linguagens.map(
        async (lib) =>
          await prisma.frameworksLibraries.create({
            data: { name: lib.name, title: lib.title },
          }),
      ),
    );
    console.info('[SEED] Successfully create Framework records');
  } catch (error) {
    console.info('[SEED] Successfully create Framework records', error);
  }
}

seedFrameworks();

async function seedDataBases() {
  const result = await Promise.all(
    databases.map(async (db) => {
      const exists = await prisma.dataBases.findMany({
        where: { name: db.name },
      });
      if (exists.length !== 0) {
        return exists;
      }

      return false;
    }),
  );

  if (result.some((item) => item !== false)) {
    return console.info('[SEED] Database já cadastradas');
  }

  try {
    await Promise.all(
      databases.map(
        async (db) =>
          await prisma.dataBases.create({
            data: { name: db.name, title: db.title },
          }),
      ),
    );
    console.info('[SEED] Successfully create Database records');
  } catch (error) {
    console.info('[SEED] Successfully create Database records', error);
  }
}

seedDataBases();

async function seedToolsDesing() {
  const result = await Promise.all(
    toolsDesing.map(async (tool) => {
      const exists = await prisma.designerTools.findMany({
        where: { name: tool.name },
      });
      if (exists.length !== 0) {
        return exists;
      }

      return false;
    }),
  );

  if (result.some((item) => item !== false)) {
    return console.info('[SEED] Tools Desing já cadastradas');
  }

  try {
    await Promise.all(
      toolsDesing.map(
        async (tool) =>
          await prisma.designerTools.create({
            data: { name: tool.name, title: tool.title },
          }),
      ),
    );
    console.info('[SEED] Successfully create Tools Desing records');
  } catch (error) {
    console.info('[SEED] Successfully create Tools Desing records', error);
  }
}

seedToolsDesing();

async function seedCloudServices() {
  const result = await Promise.all(
    cloudServices.map(async (service) => {
      const exists = await prisma.cloudServices.findMany({
        where: { name: service.name },
      });
      if (exists.length !== 0) {
        return exists;
      }

      return false;
    }),
  );

  if (result.some((item) => item !== false)) {
    return console.info('[SEED] Cloud Services já cadastradas');
  }

  try {
    await Promise.all(
      cloudServices.map(
        async (service) =>
          await prisma.cloudServices.create({
            data: { name: service.name, title: service.title },
          }),
      ),
    );
    console.info('[SEED] Successfully create Cloud Services records');
  } catch (error) {
    console.info('[SEED] Successfully create Cloud Services records', error);
  }
}

seedCloudServices();

async function seedToolsDevOps() {
  const result = await Promise.all(
    toolsDevOps.map(async (tool) => {
      const exists = await prisma.devOpsTools.findMany({
        where: { name: tool.name },
      });
      if (exists.length !== 0) {
        return exists;
      }

      return false;
    }),
  );

  if (result.some((item) => item !== false)) {
    return console.info('[SEED] Tools DevOps já cadastradas');
  }

  try {
    await Promise.all(
      toolsDevOps.map(
        async (tool) =>
          await prisma.devOpsTools.create({
            data: { name: tool.name, title: tool.title },
          }),
      ),
    );
    console.info('[SEED] Successfully create Tools DevOps records');
  } catch (error) {
    console.info('[SEED] Successfully create Tools DevOps records', error);
  }
}

seedToolsDevOps();

async function seedToolsTesting() {
  const result = await Promise.all(
    toolsTesting.map(async (tool) => {
      const exists = await prisma.testingTools.findMany({
        where: { name: tool.name },
      });
      if (exists.length !== 0) {
        return exists;
      }

      return false;
    }),
  );

  if (result.some((item) => item !== false)) {
    return console.info('[SEED] Tools Testing já cadastradas');
  }

  try {
    await Promise.all(
      toolsTesting.map(
        async (tool) =>
          await prisma.testingTools.create({
            data: { name: tool.name, title: tool.title },
          }),
      ),
    );
    console.info('[SEED] Successfully create Tools Testing records');
  } catch (error) {
    console.info('[SEED] Successfully create Tools Testing records', error);
  }
}

seedToolsTesting();

// async function seedRoles() {
//   const roles = await Promise.all(
//     ROLES.map(async (role) => {
//       const exists = await prisma.roles.findMany({ where: { title: role } });
//       if (exists.length !== 0) {
//         return exists;
//       }
//       return false;
//     }),
//   );

//   if (roles.some((item) => item !== false)) {
//     return console.info('[SEED] Cargos já cadastrados');
//   }

//   try {
//     await Promise.all(
//       ROLES.map(
//         async (role) => await prisma.roles.create({ data: { title: role } }),
//       ),
//     );
//     console.info('[SEED] Successfully create roles records');
//   } catch (error) {
//     console.info('[SEED] Successfully create roles records', error);
//   }
// }

// async function seedUserAdmin() {
//   const userExists = await prisma.candidateUser.findFirst({
//     where: { email: 'findy.adm@gmail.com' },
//   });

//   if (userExists) return console.info('[SEED] Admin já cadastrado');

//   await prisma.candidateUser
//     .create({
//       data: {
//         name: 'Administrador do APP',
//         email: 'findy.adm@gmail.com',
//         password:
//           '$2a$10$O7PLuwjrj5moVvOkyVyIeuf3Fw5RICwuL/IPKL0js.sIDfeV7KDZK', // senha: VJ8I@l7zK%
//         roles: 'admin',
//         provider: 'findy',
//         activated: true,
//         providerId: null,
//         recoverToken: null,
//         createdAt: new Date(),
//         updatedAt: null,
//       },
//     })
//     .then(() => console.info('[SEED] Successfully create user admin record'))
//     .catch((e) =>
//       console.info('[SEED] Successfully create user admin record', e),
//     );
// }

// seedUserAdmin();
