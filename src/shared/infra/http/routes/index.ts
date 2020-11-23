import { Router } from 'express';
import IntegrationController from '../../../../controller/integrationController';

const integration = new IntegrationController();
const router = Router();

router.post('/payments', integration.payment);

router.get('/show/:id', integration.show);



export default router;