import dotenv from "dotenv";
dotenv.config();

import moment from "moment";

/**
 * @file
 * Aquí tendremos constantes tanto del .env como definidas con literales
 * la razón es que usaremos el .env solamente para credenciales privadas
 * y el resto de constantes que pueden ser públicas, estarán definidas en 
 * este archivo
 * 
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 */

export const IS_PRODUCTION: Boolean = process.env.NODE_ENV === "production";

export const JWT_KEY: string  = process.env.JWT_KEY as string;
export const JWT_LIFE_AMOUNT: moment.DurationInputArg1 = 7;
export const JWT_LIFE_UNIT: moment.unitOfTime.DurationConstructor = "days";

export const PORT: number | string = process.env.PORT ?? 8080;

/** Dirección url del frontend, para enviar en los correos */
export const APP_URL: string = IS_PRODUCTION
	? process.env.APP_URL as string
	: process.env.APP_URL_LOCAL as string;

/** SOCIAL */
export const FACEBOOK_URL: string  = process.env.FACEBOOK_URL as string;
export const TWITTER_URL: string   = process.env.TWITTER_URL as string;
export const INSTAGRAM_URL: string = process.env.INSTAGRAM_URL as string;

/** Dirección url de la base de datos de mongo */
export const DB_URL: string = IS_PRODUCTION
	? process.env.DB_URL as string
	: process.env.DB_URL_LOCAL as string;

export const DB_URL_TESTING: string = process.env.DB_URL_LOCAL + "_test" as string;

export const YEAR: string = process.env.YEAR as string;

export const MAIL: string               = process.env.MAIL as string;
export const MAIL_HOST: string          = process.env.MAIL_HOST as string;
export const MAIL_NAME: string          = process.env.MAIL_NAME as string;
export const MAIL_CLIENT_ID: string     = process.env.MAIL_CLIENT_ID as string;
export const MAIL_CLIENT_SECRET: string = process.env.MAIL_CLIENT_SECRET as string;
export const MAIL_REFRESH_TOKEN: string = process.env.MAIL_REFRESH_TOKEN as string;

// AWS S3
export const AWS_ACCESS_KEY_ID: string     = process.env.AWS_ACCESS_KEY_ID as string;
export const AWS_SECRET_ACCESS_KEY: string = process.env.AWS_SECRET_ACCESS_KEY as string;
export const AWS_BUCKET_NAME: string       = process.env.AWS_BUCKET_NAME as string;
export const AWS_BUCKET_REGION: string     = process.env.AWS_BUCKET_REGION as string;
