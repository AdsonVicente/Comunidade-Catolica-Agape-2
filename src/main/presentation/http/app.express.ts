import express, { Application } from "express";
import { apiv1Router } from "./rest/api.v1";
import helmet from "helmet";
import compression from "compression";
import { customMorgan } from "./middlewares/custom-morgan.middleware";
import { errorLogger } from "./middlewares/error-logger.middleware";
import { invalidPath } from "./middlewares/invalid-path.middleware";
import { errorResponder } from "./middlewares/error-responser.middleware";
import cors from "cors"
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import swaggerDocs from './swagger.json'




const swaggerUi = require('swagger-ui-express');

dotenv.config();


const createExpressApplication = async (): Promise<Application>  => {
    
    // Criação do diretório de uploads
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

    const app: Application = express();
    app.disable('x-powered-by');


    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    //Middlewares Integrados (Built-in)
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    

    //Middlewares de Terceiros
    app.use(helmet());
    app.use(compression());
    app.use(cors({
        origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:5400', 'http://127.0.0.1:5400', 'http://localhost:3000'],
        optionsSuccessStatus: 200
    }));
    app.use((req, res, next) => {
        res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
        next();
    });
    

    //Middleware Customizados
    app.use(customMorgan);
    // Serve a pasta de uploads como estática
    app.use('/uploads', express.static(uploadDir));
    

    //Middlewares de Rotas
    app.use('/api/v1', apiv1Router);

    

    //Middleware de Tratamento de Erros (Error Handling)
    app.use(invalidPath);
    app.use(errorLogger);
    app.use(errorResponder);

    return app;
}

export { createExpressApplication }