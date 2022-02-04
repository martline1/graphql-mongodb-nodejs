import handlebars from "handlebars";
import fs         from "fs/promises";

// Import Own Modules
import createTransporter from "~/Helpers/createTransporter";
import {
	MAIL,
	MAIL_NAME,
} from "~/Config/constants";

type SendMailFun = (options: {
	email: string;
	subject: string;
	templateName: string;
	data: Record<string, unknown>,
	attachments?: Record<string, unknown>[],
}) => Promise<{
	success?: true;
	err?: any;
}>

/**
 * Sends an email with a handlebars html template
 * 
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 * @param {SendMailFun} options
 */
const sendMail: SendMailFun = async ({
	email,
	subject,
	templateName,
	data,
	attachments,
}) => {
	try {
		const transporter = await createTransporter();
		const html        = await fs.readFile(`src/Templates/${templateName}.hbs`, { encoding : "utf-8" });
		const template    = handlebars.compile(html);

		const templateWithData = template(data);

		await transporter.sendMail({
			from : `${MAIL_NAME} <${MAIL}>`,
			to   : email,
			html : templateWithData,
			subject,
			attachments,
		});

		return { success : true };
	} catch (err) {
		console.error("[sendMail] Error: ", err);

		return { err };
	}
};

export default sendMail;
