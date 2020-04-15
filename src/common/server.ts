import * as express from 'express';
import * as http from 'http';
import * as jwt from 'express-jwt';
import config from './config';

class ExpressServer {
  public app = express();
  private server: http.Server;

  constructor(router: express.Router, dbConnectionPromise: Promise<any>) {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(this.awaitPromiseMiddleware(dbConnectionPromise));
    this.app.use(
      '/',
      jwt({ secret: config.jwtSecret, credentialsRequired: false }),
      router,
    );
  }

  private awaitPromiseMiddleware(promise: Promise<any>) {
    return async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) => {
      await promise;
      next();
    };
  }

  public listen(port = 3333) {
    if (port) {
      this.server = http.createServer(this.app);
      this.server.listen(port);
    }

    return this.app;
  }
}

export default ExpressServer;
