import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../openapi.json';

/** Original Book Controller from the Boilerplate */

import * as BookController from './controllers/book';

/** Guild Controller based upon the BookController */

import * as GuildController from './controllers/guild';

/** Network Controller based upon the BookController */
import * as NetworkController from './controllers/networkinfo';

/** User Controller */
import * as UserController from './controllers/user';

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const router = Router();

/** Network Routes */
router.get('/networkinfo/add', NetworkController.all);
router.get('/networkinfo/search', NetworkController.search);
router.get('/networkinfo/id/:NetworkInfoId', NetworkController.get);
router.delete('/networkinfo/id/:NetworkInfoId', NetworkController.remove);

/** Guild Routes based upon the Book Routes */
router.post('/guild/add', GuildController.add);
router.get('/guild/all', GuildController.all);
router.get('/guild/search', GuildController.search);
router.get('/guild/id/:GuildId', GuildController.get);
router.delete('/guild/id/:GuildId', GuildController.remove);


/** User Routes based upon the Book Routes */
router.post('/user/add', UserController.add);
router.get('/user/all', UserController.all);
router.get('/user/search', UserController.search);
router.get('/user/id/:UserId', UserController.get);
router.delete('/user/id/:UserId', UserController.remove);


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
