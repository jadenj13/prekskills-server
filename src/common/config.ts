class Config {
  public readonly nodeEnv = process.env.NODE_ENV;
  public readonly appId = process.env.APP_ID;
  public readonly logLevel = process.env.LOG_LEVEL;
  public readonly mongoDbUri = process.env.MONGO_DB_URI;
  public readonly jwtSecret = process.env.JWT_SECRET;

  constructor() {
    this.ensureRequiredVariables();
  }

  private ensureRequiredVariables() {
    ['NODE_ENV', 'APP_ID', 'LOG_LEVEL', 'MONGO_DB_URI', 'JWT_SECRET'].forEach(
      (name) => {
        if (!process.env[name]) {
          throw new Error(`Environment variable ${name} is missing`);
        }
      },
    );
  }
}

export default new Config();
