// Lib Imports.
import { Request, Response } from 'express';

// Local Imports.
import { serializeResponse } from '../utils/serializers';

// Controller to get data for dashboard page.
async function getDashboard(req: Request, res: Response) {
  if (req.user) return res.status(200).json(serializeResponse(req.user));
  else return res.status(400).json(serializeResponse({}, { message: 'User not found' }));
}

// Exports.
export default { getDashboard };
