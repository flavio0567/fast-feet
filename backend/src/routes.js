import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import AvatarController from './app/controllers/AvatarController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import SignatureController from './app/controllers/SignatureController';
import ProblemController from './app/controllers/ProblemController';

import Log from './app/middlewares/Log';
import SessionStore from './app/middlewares/validators/SessionStore';

import DeliveryStore from './app/middlewares/validators/DeliveryStore';
import DeliveryUpdate from './app/middlewares/validators/DeliveryUpdate';
import RecipientStore from './app/middlewares/validators/RecipientStore';
import DeliverymanStore from './app/middlewares/validators/DeliverymanStore';
import DeliverymanUpdate from './app/middlewares/validators/DeliverymanUpdate';
import DeliverymanDelete from './app/middlewares/validators/DeliverymanDelete';
import DeliveryProblemStore from './app/middlewares/validators/DeliveryProblemStore';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/sessions', Log, SessionStore, SessionController.store);
routes.get('/deliveryman/:id/deliveries', Log, DeliverymanController.index);
routes.get('/users', Log, UserController.index);

/*
 * Delivery problems
 */
routes.get('/problems', Log, ProblemController.index);
routes.get('/delivery/:id/problems', Log, DeliveryProblemController.index);
routes.post(
  '/delivery/:id/problems',
  Log,
  DeliveryProblemStore,
  DeliveryProblemController.store
);
routes.delete(
  '/problem/:id/cancel-delivery',
  Log,
  DeliveryProblemController.delete
);
/*
 * Delivery udpate signature after delivered
 */
routes.put('/delivery/:id', Log, DeliveryUpdate, DeliveryController.update);

routes.use(authMiddleware);
/*
 * Admin actions
 *
 * Recipients
 */
routes.get('/recipients', Log, RecipientController.index);
routes.post('/recipients', Log, RecipientStore, RecipientController.store);

/*
 * Deliverymen
 */
routes.get('/deliveryman', Log, DeliverymanController.index);
routes.post('/deliveryman', Log, DeliverymanStore, DeliverymanController.store);
routes.put(
  '/deliveryman/:id',
  Log,
  DeliverymanUpdate,
  DeliverymanController.update
);
routes.delete(
  '/deliveryman/:id',
  Log,
  DeliverymanDelete,
  DeliverymanController.delete
);

/*
 * Deliveries
 */
routes.get('/delivery', Log, DeliveryController.index);
routes.post('/delivery', Log, DeliveryStore, DeliveryController.store);
/*
 * Files: Avatar, Signature
 */
routes.post('/avatar', upload.single('file'), Log, AvatarController.store);
routes.post(
  '/signature/:id/deliveries',
  upload.single('file'),
  Log,
  SignatureController.store
);

export default routes;
