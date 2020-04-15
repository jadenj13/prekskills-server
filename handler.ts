import * as serverless from 'serverless-http';
import Server from './src/common/server';
import router from './src/api/routes';
import dbConnection from './src/db/connection';

const server = new Server(router, dbConnection.connectToMongo());

const handler = (
  event: AWSLambda.APIGatewayProxyEvent,
  context: AWSLambda.Context,
) => {
  // eslint-disable-next-line no-param-reassign
  context.callbackWaitsForEmptyEventLoop = false;

  return serverless(server.app)(event, context);
};

export { handler as app };
