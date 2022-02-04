import express         from "express";
import cors            from "cors";
import mongoose        from "mongoose";
import { graphqlHTTP } from "express-graphql";

// Import Own Modules
import {
    APP_URL,
    IS_PRODUCTION,
} from "./Config/constants";

import { loadSchemaSync }       from "@graphql-tools/load";
import { GraphQLFileLoader }    from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { join }                 from "path";

const app = express();

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

if (IS_PRODUCTION) {
    app.use(cors({ origin : APP_URL }));
} else {
    app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

const schema = loadSchemaSync("src/schema.graphql", { loaders: [new GraphQLFileLoader()] });

const resolvers = {
    Query : {
        hello: () => {
            return "Hello world from graphql!";
        },
    },
};

const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
})

app.use("/graphql", graphqlHTTP({
    graphiql : true,
    schema   : schemaWithResolvers,
}));

// app.use("/api", router);

export default app;
