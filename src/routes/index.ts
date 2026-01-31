// Lib Imports.
import { Router } from 'express';

// Local Imports.
import DashboardRouter from './dashboard.routes';
import { errorController } from '../controllers';

// API router.
const router = Router();

// Dashboard routes.
router.use('/dashboard', DashboardRouter);

// Error Handlers.
router.use(errorController.serverError);

// Exports.
export default router;
