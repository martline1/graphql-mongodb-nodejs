import pino   from "pino";
import moment from "moment";

const logger: pino.Logger = pino({
	name      : "Logger",
	base      : { pid : false },
	transport : { target : "pino-pretty" },
	timestamp : () => `,"time":"${moment().format("DD/MM/YYYY HH:mm:ss")}"`
});

export default logger;
