require("ts-node").register();

import path       from "path";
import mongoose   from "mongoose";
import { Seeder } from "mongo-seeding";

// Import Own Modules
import { tryAsync }       from "~/Helpers";
import { DB_URL_TESTING } from "~/Config/constants";

// All tests time limit is a minute
jest.setTimeout(60 * 1000);

beforeAll(async () => {
	const seeder = new Seeder({
		database     : DB_URL_TESTING,
		dropDatabase : true,
	});

	const importOptions = {
		extensions   : ["ts", "js", "json"],
		transformers : [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
	};

	const collections = seeder.readCollectionsFromPath(path.resolve("./src/Seeds"), importOptions);

	await tryAsync(seeder.import(collections));

	await mongoose.connect(DB_URL_TESTING, {
		useNewUrlParser    : true,
		useUnifiedTopology : true,
	});
});

afterAll(async () => {
	const tasks: Promise<any>[] = [];

	for (const collection of Object.values(mongoose.connection.collections)) {
		tasks.push(tryAsync(collection.drop()));
	}

	await Promise.all(tasks);

	await mongoose.connection.close();
});
