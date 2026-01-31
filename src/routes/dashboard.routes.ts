// Lib Imports.
import { Router } from 'express';

// Local Imports.
import { dashboardController } from '../controllers';

// Dashboard router.
const router = Router();

// Dashboard routes.
router.get('/', dashboardController.getDashboard);

// Exports.
export default router;
