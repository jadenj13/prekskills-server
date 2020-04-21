import { Request, Response, NextFunction } from 'express';

export default (allowedRoles: string[]) => {
  const middleware = (req: Request, res: Response, next: NextFunction) => {
    const allowed = allowedRoles.includes(req.user.role);

    if (allowed) {
      return next();
    }

    return res.sendStatus(403);
  };

  return middleware;
};
