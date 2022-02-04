import mongoose from "mongoose";

// Import Own Modules
import { DB_URL } from "./constants";
import { logger } from "~/Helpers";

const initDatabase = async (callback: VoidFunction) => {
	try {
		await mongoose.connect(DB_URL, { useNewUrlParser : true, useUnifiedTopology : true, autoIndex : true });

		logger.info("[initDatabase] Connected to database");

		callback();

		process.on("SIGINT", () => {
			mongoose.connection.close(() => {
				logger.info("[initDatabase] Disconnected");

				process.exit(0);
			});
		});
	} catch (err) {
		logger.error(`[initDatabase] Error ${err}`)
	}
};

export default initDatabase;
