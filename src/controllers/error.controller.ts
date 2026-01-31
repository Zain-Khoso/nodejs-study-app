// Lib Imports.
import { Request, Response, NextFunction } from 'express';

// Local Import.
import { centeredLog } from '../utils/helper';
import { serializeResponse } from '../utils/serializers';

// Controller to handle any kind of server error.
async function serverError(error: any, req: Request, res: Response, next: NextFunction) {
  console.log('\n');
  centeredLog(' Error ');
  console.log('\n');
  console.log(error);
  console.log('\n');
  centeredLog('');
  console.log('\n');

  return res.status(500).json(serializeResponse({}, { message: 'Something went wrong.' }));
}

// Exports.
export default { serverError };
