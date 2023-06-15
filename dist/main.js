"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.enableCors();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const PORT = parseInt(process.env.PORT) || 3001;
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('Findy API')
        .setDescription('API gerenciamento de candidatos voluntários e projetos voluntários.')
        .setVersion('0.0.1')
        .addTag('authentication')
        .addTag('candidate_users')
        .addTag('candidate_profile')
        .addTag('candidate_projects')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(PORT || 3001);
    if (PORT === 3001) {
        console.info(`Application is running on: http://localhost:${PORT}`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map