// Lib Imports.
import { auth } from '../utils/auth';

// Express request type with better-auth session.
declare global {
  namespace Express {
    interface Request extends BaseRequest {
      session: typeof auth.$Infer.Session.session | null;
      user: typeof auth.$Infer.User.user | null;
    }
  }
}
