import * as mongoose from 'mongoose';
import config from '../common/config';
import logger from '../common/logger';

class Connection {
  public connectToMongo = async () => {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    await mongoose.connect(config.mongoDbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info('Connected to MongoDb.');

    return mongoose.connection;
  };
}

export default new Connection();
