import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../openapi.json';

import * as BookController from './controllers/book';

/** Guild Controller based upon the BookController */

import * as GuildController from './controllers/guild';

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const router = Router();

/** Guild Routes based upon the Book Routes */
router.post('/guild/add', GuildController.add);
//router.get('/guild/all', GuildController.all);
//router.get('/guild/search', GuildController.search);
//router.get('/guild/id/:GuildId', GuildController.get);
//router.delete('/guild/id/:GuildId', GuildController.remove);



// Book routes
router.post('/book/add', BookController.add);
router.get('/book/all', BookController.all);
router.get('/book/search', BookController.search);
router.get('/book/id/:bookId', BookController.get);
router.delete('/book/id/:bookId', BookController.remove);

// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));
}

export default router;
