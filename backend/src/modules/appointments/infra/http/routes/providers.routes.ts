import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';

const providesRouter = Router();
const providersController = new ProvidersController();

providesRouter.use(ensureAuthenticated);

providesRouter.get('/', providersController.index);

export default providesRouter;
