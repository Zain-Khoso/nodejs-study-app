// Lib Imports.
import { Request, Response, NextFunction } from 'express';

// Local Import.
import { centeredLog } from '../utils/helper';
import { serializeResponse } from '../utils/serializers';

// Controller to handle any kind of server error.
async function serverError(error: any, req: Request, res: Response, next: NextFunction) {
  console.log('\n');
  centeredLog(' Error ');
  console.log(error);
  console.log(''.padEnd(120, '-'));

  return res.status(500).json(serializeResponse({}, { message: 'Something went wrong.' }));
}

// Controller to handle 404 reqs.
async function routeNotFoundError(req: Request, res: Response, next: NextFunction) {
  console.log('\n');
  centeredLog(` Page not Found: ${req.protocol}://${req.get('host')}${req.originalUrl} `);

  return res.status(404).json(serializeResponse({}, { message: 'Route not found.' }));
}

// Exports.
export default { serverError, routeNotFoundError };
