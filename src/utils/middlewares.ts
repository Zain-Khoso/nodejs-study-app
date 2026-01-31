// Lib Imports.
import { Request, Response, NextFunction } from 'express';
import { fromNodeHeaders } from 'better-auth/node';

// Local Imports.
import { auth } from './auth';

// This middleware is used to retrieve and attach the current session to the request object.
async function session(req: Request, _: Response, next: NextFunction) {
  const session = await auth.api.getSession({ headers: fromNodeHeaders(req.headers) });

  if (session) {
    req.session = session.session;
    req.user = session.user;
  } else {
    req.session = null;
    req.user = null;
  }

  next();
}

// Exports.
export { session };
