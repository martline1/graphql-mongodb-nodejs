require("ts-node").register();

import path       from "path";
import { Seeder } from "mongo-seeding";

// Import Own
import { DB_URL, IS_PRODUCTION } from "./constants";

const executeSeed = async () => {
	try {
		const seeder = new Seeder({
			database           : DB_URL,
            ...(IS_PRODUCTION ? {
                dropCollections : true,
            } : {
                dropDatabase : true,
            }),
		});

		const importOptions = {
			extensions   : ["ts", "js", "json"],
			transformers : [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
		};

		const collections = seeder.readCollectionsFromPath(path.resolve("src/Seeds"), importOptions);

		await seeder.import(collections);

		console.log("[seed.ts] Database seeded successfully!");
	} catch (err) {
		console.error("[seed.ts] Failed to seed the database.", err);
	}
};

executeSeed();
