// Import Own Modules
import app          from "./app";
import { PORT }     from "./Config/constants";
import initDatabase from "./Config/initDatabase";
import { logger }   from "./Helpers";

initDatabase(() => {
	app.listen(PORT, () => logger.info(`[Server] Listening on port ${PORT}`));
});
