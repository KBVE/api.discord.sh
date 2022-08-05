import express from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../openapi.json';

/** Migrating the routes from dev to admin. */

const swaggerUiOptions = {
    customCss: '.swagger-ui .topbar { display: none }'
  };
  
const adminrouter = express.Router();

adminrouter.use('/dev/api-docs', 
            swaggerUi.serve
        );

adminrouter.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));




export default adminrouter;