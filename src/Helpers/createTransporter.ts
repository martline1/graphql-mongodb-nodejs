import nodemailer from "nodemailer";
import { google } from "googleapis";

// Import Own Modules
import {
	MAIL,
	MAIL_HOST,
	MAIL_CLIENT_ID,
	MAIL_CLIENT_SECRET,
	MAIL_REFRESH_TOKEN,
} from "~/Config/constants";

const OAuth2 = google.auth.OAuth2;

/**
 * Dynamically creates a transport with a valid refresh token using OAuth2 and gmail
 * 
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 */
const createTransporter = async () => {
	const oauth2Client = new OAuth2(
		MAIL_CLIENT_ID,
		MAIL_CLIENT_SECRET,
		"https://developers.google.com/oauthplayground"
	);

	oauth2Client.setCredentials({
		refresh_token : MAIL_REFRESH_TOKEN,
	});

	const accessToken = await new Promise((resolve, reject) => {
		oauth2Client.getAccessToken((err, token) => {
			if (err) {
				return reject(["[transporter] Failed to create access token.", err]);
			}

			return resolve(token);
		});
	});

	const config = {
		host   : MAIL_HOST,
		port   : 465,
		secure : true,
		auth   : {
			type         : "OAuth2",
			user         : MAIL,
			accessToken,
			clientId     : MAIL_CLIENT_ID,
			clientSecret : MAIL_CLIENT_SECRET,
			refreshToken : MAIL_REFRESH_TOKEN,
		},
	};

	const transporter = nodemailer.createTransport(config as any);

	return transporter;
};

export default createTransporter;
