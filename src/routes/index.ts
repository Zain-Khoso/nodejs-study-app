// Lib Imports.
import { Router } from 'express';

// Local Imports.
import DashboardRouter from './dashboard.routes';

// API router.
const router = Router();

// Dashboard routes.
router.use('/dashboard', DashboardRouter);

// Exports.
export default router;
