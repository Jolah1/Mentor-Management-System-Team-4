import Joi from 'joi';
import dotenv from 'dotenv';

dotenv.config();

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    DATABASE_URL: Joi.string().required().description('DB url'),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire'),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which reset password token expires'),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which verify email token expires'),
    SMTP_HOST: Joi.string().description('server that will send the emails'),
    SMTP_PORT: Joi.number().description('port to connect to the email server'),
    SMTP_USERNAME: Joi.string().description('username for email server'),
    SMTP_PASSWORD: Joi.string().description('password for email server'),
    EMAIL_FROM: Joi.string().description('the from field in the emails sent by the app'),
    MAILGUN_API_KEY: Joi.string().description('Mailgun API key'),
    MAILGUN_DOMAIN: Joi.string().description('Mailgun domain'),
    MAILGUN_FROM: Joi.string().description('Mailgun from field'),
    CLIENT_URL: Joi.string().description('URL of the client app'),
    DB_USERNAME: Joi.string().description('Database user name'),
    DB_PASSWORD: Joi.string().description('Database password'),
    DB_NAME: Joi.string().description('Database name'),
    DB_PORT: Joi.number().description('Database port'),
    DB_HOST: Joi.string().description('Database host'),
    DB_HOST_PRODUCTION: Joi.string().description('Database production url'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  development: {
    username: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_NAME,
    host: envVars.DB_HOST,
    port: envVars.DB_PORT,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      multipleStatements: true,
      prependSearchPath: true,
    },
  },
  production: {
    username: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_NAME,
    host: envVars.DB_HOST_PRODUCTION,
    port: 5432,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      multipleStatements: true,
      prependSearchPath: true,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
    expires: envVars.JWT_EXPIRATION,
  },
  mailgun: {
    apiKey: envVars.MAILGUN_API_KEY,
    domain: envVars.MAILGUN_DOMAIN,
    from: envVars.EMAIL_FROM,
  },
  client_url: envVars.CLIENT_URL,
};

module.exports = config;
